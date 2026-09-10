import React from "react";

const StepHeader = ({ title, description }) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold tracking-tight text-(--color-text) sm:text-3xl">
        {title}
      </h1>

      <p className="mt-2 text-[12px] leading-6 text-(--color-subtext)">
        {description}
      </p>
    </div>
  );
};

export default StepHeader;
