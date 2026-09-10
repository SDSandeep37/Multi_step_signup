import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProgressBar from "./ProgressBar";

import TermsStep from "./steps/TermsStep";
import EmailStep from "./steps/EmailStep";
import OtpStep from "./steps/OtpStep";
import UsernameStep from "./steps/UsernameStep";
import DobStep from "./steps/DobStep";
import FullNameStep from "./steps/FullNameStep";
import LocationStep from "./steps/LocationStep";
import { initialSignupData } from "../signup/signupData";

const SignupWizard = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const [data, setData] = useState(initialSignupData);

  function updateData(updates) {
    setData((previous) => ({
      ...previous,
      ...updates,
    }));
  }
  // console.log(data);
  function goNext() {
    setCurrentStep((step) => Math.min(step + 1, 7));
  }

  function goBack() {
    setCurrentStep((step) => Math.max(step - 1, 1));
  }

  function handleComplete(finalLocation) {
    const finalData = {
      ...data,
      location: finalLocation,
    };

    sessionStorage.setItem("signupProfile", JSON.stringify(finalData));

    navigate("/welcome", { replace: true });
  }

  return (
    <div className="min-h-screen bg-(--color-bg) px-4 py-10 text-white">
      <div className="mx-auto w-full max-w-2xl">
        <ProgressBar currentStep={currentStep} />

        <div className="rounded-3xl border border-(--color-surface) bg-(--color-surface) p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10">
          {currentStep === 1 && (
            <TermsStep
              accepted={data.termsAccepted}
              setAccepted={(value) =>
                updateData({
                  termsAccepted: value,
                })
              }
              onNext={goNext}
            />
          )}

          {currentStep === 2 && (
            <EmailStep
              email={data.email}
              setEmail={(value) =>
                updateData({
                  email: value,
                })
              }
              onOtpSent={goNext}
            />
          )}

          {currentStep === 3 && (
            <OtpStep
              email={data.email}
              onVerified={() => {
                updateData({
                  emailVerified: true,
                });

                goNext();
              }}
              onBack={goBack}
            />
          )}

          {currentStep === 4 && (
            <UsernameStep
              username={data.username}
              setUsername={(value) =>
                updateData({
                  username: value,
                })
              }
              onNext={goNext}
              onBack={goBack}
            />
          )}

          {currentStep === 5 && (
            <DobStep
              dateOfBirth={data.dateOfBirth}
              setDateOfBirth={(value) =>
                updateData({
                  dateOfBirth: value,
                })
              }
              setAge={(value) =>
                updateData({
                  age: value,
                })
              }
              onNext={goNext}
              onBack={goBack}
            />
          )}

          {currentStep === 6 && (
            <FullNameStep
              fullName={data.fullName}
              setFullName={(value) =>
                updateData({
                  fullName: value,
                })
              }
              onNext={goNext}
              onBack={goBack}
            />
          )}

          {currentStep === 7 && (
            <LocationStep
              location={data.location}
              setLocation={(location) =>
                updateData({
                  location,
                })
              }
              onComplete={handleComplete}
              onBack={goBack}
            />
          )}
        </div>

        <p className="mt-6 text-center text-xs text-zinc-600">
          Your information is handled securely.
        </p>
      </div>
    </div>
  );
};
export default SignupWizard;
