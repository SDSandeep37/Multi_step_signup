import { useState } from "react";

import StepHeader from "../StepHeader";
import { calculateAge, validateDateOfBirth } from "../../../utils/age";

const DobStep = ({ dateOfBirth, setDateOfBirth, setAge, onNext, onBack }) => {
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const result = validateDateOfBirth(dateOfBirth);

    if (!result.valid) {
      setError(result.error);
      return;
    }

    const age = calculateAge(dateOfBirth);

    setAge(age);
    onNext();
  }

  return (
    <>
      <StepHeader
        title="When were you born?"
        description="You must be at least 18 years old to continue."
      />

      <form onSubmit={handleSubmit}>
        <label className="mb-2 block text-sm font-medium text-(--color-subtext)">
          Date of birth
        </label>

        <input
          type="date"
          value={dateOfBirth}
          max={new Date().toISOString().split("T")[0]}
          onChange={(e) => {
            setDateOfBirth(e.target.value);
            setError("");
          }}
          className="w-full rounded-xl  px-4 py-3 text-(--color-text) outline-none focus:border-indigo-500"
        />

        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 rounded-xl border border-(--color-subtext) px-5 py-3 font-semibold text-(--color-text) hover:bg-zinc-900"
          >
            Back
          </button>

          <button
            type="submit"
            className="steps_button flex-1 rounded-xl px-5 py-3 font-semibold text-(--color-text)"
          >
            Continue
          </button>
        </div>
      </form>
    </>
  );
};

export default DobStep;
