const steps = ["Terms", "Email", "OTP", "Username", "DOB", "Name", "Location"];

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;

          const completed = stepNumber < currentStep;

          const active = stepNumber === currentStep;

          return (
            <div key={step} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`
                    flex h-9 w-9 items-center justify-center
                    rounded-full border text-sm font-semibold
                    transition-all duration-300
                    ${
                      completed
                        ? "border-(--color-secondary) bg-(--color-secondary) text-(--color-text)"
                        : active
                          ? "border-(--color-primary) bg-(--color-primary) text-(--color-text)"
                          : "border-zinc-700 bg-zinc-900 text-zinc-500"
                    }
                  `}
                >
                  {completed ? "✓" : stepNumber}
                </div>

                <span
                  className={`
                    mt-2 hidden text-xs sm:block
                    ${active || completed ? "text-(-color-text)" : "text-(-color-primary)"}
                  `}
                >
                  {step}
                </span>
              </div>

              {stepNumber !== steps.length && (
                <div
                  className={`
                    mx-2 h-px flex-1 transition-colors duration-300
                    ${completed ? "bg-(--color-secondary)" : "bg-(--color-surface)"}
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
