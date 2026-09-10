import { useState } from "react";

import StepHeader from "../StepHeader";
import { validateUsername } from "../../../utils/validation";

const UsernameStep = ({ username, setUsername, onNext, onBack }) => {
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const validationError = validateUsername(username);

    if (validationError) {
      setError(validationError);
      return;
    }

    onNext();
  }

  return (
    <>
      <StepHeader
        title="Choose a username"
        description="Your username will identify you on the platform."
      />

      <form onSubmit={handleSubmit}>
        <label className="mb-2 block text-sm font-medium text-(--color-subtext)">
          Username
        </label>

        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
          placeholder="Enter your username that match your party vibe"
          autoComplete="username"
          className="w-full rounded-xl border-none px-4 py-3 text-(--color-text) outline-none focus:ring-2 focus:ring-indigo-500/20 disabled:opacity-50"
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
export default UsernameStep;
