import { useSignUp } from "@clerk/react";
import { useState } from "react";

import StepHeader from "../StepHeader";
import { validateEmail } from "../../../utils/validation";

const EmailStep = ({ email, setEmail, onOtpSent }) => {
  const { signUp } = useSignUp();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const validationError = validateEmail(email);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const emailAddress = email.trim().toLowerCase();
      setEmail(emailAddress);
      // Create the Clerk signup
      const { error: createError } = await signUp.create({
        emailAddress,
      });

      if (createError) {
        console.error(
          "Clerk signup creation error:",
          JSON.stringify(createError, null, 2),
        );

        setError(
          createError.longMessage ||
            createError.message ||
            "Unable to create signup. Please try again.",
        );

        return;
      }

      // Send the email verification code
      const { error: codeError } = await signUp.verifications.sendEmailCode();

      if (codeError) {
        console.error(
          "Clerk email code error:",
          JSON.stringify(codeError, null, 2),
        );

        setError(
          codeError.longMessage ||
            codeError.message ||
            "Unable to send verification code. Please try again.",
        );

        return;
      }

      onOtpSent();
    } catch (err) {
      console.error("Unexpected Clerk error:", err);

      setError(
        err?.errors?.[0]?.longMessage ||
          err?.message ||
          "Unable to send verification code. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <StepHeader
        title="Enter your email"
        description="We'll send a verification code to your email address."
      />

      <form onSubmit={handleSubmit}>
        <label className="mb-2 block text-sm font-medium text-(--color-subtext)">
          Email address
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          placeholder="you@example.com"
          autoComplete="email"
          disabled={loading}
          className="w-full rounded-xl border-none px-4 py-3 text-(--color-text) outline-none transition placeholder:text-(--color-subtext) focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-50"
        />

        {error && <p className="mt-2 text-[12px] text-red-400">{error}</p>}

        {/* Required for Clerk bot protection */}
        <div id="clerk-captcha" data-cl-theme="dark" data-cl-size="flexible" />

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-xl steps_button px-5 py-3 font-semibold text-(--color-text) transition-all duration-300"
        >
          {loading ? "Sending code..." : "Send verification code"}
        </button>
      </form>
    </>
  );
};

export default EmailStep;
