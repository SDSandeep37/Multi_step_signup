import { useSignUp } from "@clerk/react";
import { useEffect, useState } from "react";

import StepHeader from "../StepHeader";
import { validateOtp } from "../../../utils/validation";

const OtpStep = ({ email, onVerified, onBack }) => {
  const { signUp } = useSignUp();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(30);

  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setInterval(() => {
      setCooldown((previous) => previous - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);

  async function handleVerify(e) {
    e.preventDefault();

    const validationError = validateOtp(otp);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const { error: verifyError } = await signUp.verifications.verifyEmailCode(
        {
          code: otp,
        },
      );

      if (verifyError) {
        console.error(
          "Clerk verification error:",
          JSON.stringify(verifyError, null, 2),
        );

        setError(
          verifyError.longMessage ||
            verifyError.message ||
            "Invalid or expired verification code.",
        );

        return;
      }

      console.log("Email verification successful");
      console.log("Current signup status:", signUp.status);

      onVerified();
    } catch (err) {
      console.error("Unexpected verification error:", err);

      setError(
        err?.errors?.[0]?.longMessage ||
          err?.message ||
          "Invalid or expired verification code.",
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleResend() {
    if (cooldown > 0 || loading) return;

    try {
      setError("");
      setLoading(true);

      const { error: resendError } = await signUp.verifications.sendEmailCode();

      if (resendError) {
        console.error(
          "Clerk resend error:",
          JSON.stringify(resendError, null, 2),
        );

        setError(
          resendError.longMessage ||
            resendError.message ||
            "Unable to resend the code. Please try again.",
        );

        return;
      }

      setCooldown(30);
      setOtp("");
    } catch (err) {
      console.error("Unexpected resend error:", err);

      setError(
        err?.errors?.[0]?.longMessage ||
          err?.message ||
          "Unable to resend the code. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <StepHeader
        title="Verify your email"
        description={`Enter the 6-digit code we sent to ${email}.`}
      />

      <form onSubmit={handleVerify}>
        <input
          type="text"
          inputMode="numeric"
          maxLength={6}
          value={otp}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "").slice(0, 6);

            setOtp(value);
            setError("");
          }}
          placeholder="000000"
          autoComplete="one-time-code"
          autoFocus
          aria-label="Email verification code"
          disabled={loading}
          className="w-full rounded-xl border-none px-4 py-4 text-center text-2xl tracking-[0.5em] text-(--color-text) outline-none transition placeholder:text-(--color-subtext) focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-50"
        />

        {error && (
          <p className="mt-3 text-center text-sm text-red-400">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading || otp.length !== 6}
          className="steps_button mt-6 w-full rounded-xl px-5 py-3 font-semibold text-(--color-text) transition-all duration-300"
        >
          {loading ? "Verifying..." : "Verify email"}
        </button>
      </form>

      <div className="mt-5 flex items-center justify-between text-sm">
        <button
          type="button"
          onClick={onBack}
          disabled={loading}
          className="text-(--color-subtext) hover:text-(--color-text) disabled:opacity-50"
        >
          ← Change email
        </button>

        <button
          type="button"
          disabled={cooldown > 0 || loading}
          onClick={handleResend}
          className="text-(--color-subtext) hover:text-(--color-text) disabled:opacity-50"
        >
          {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend code"}
        </button>
      </div>
    </>
  );
};

export default OtpStep;
