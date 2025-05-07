import React, { useEffect, useState } from "react";

interface Step {
  id: number;
  label: string;
  description: string;
}

interface AnimatedProcessProps {
  steps: Step[];
  delay?: number;
  loop?: boolean;
}

const AnimatedProcess: React.FC<AnimatedProcessProps> = ({
  steps,
  delay = 2000,
  loop = true,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (steps.length <= 1) return;

    const interval = setInterval(() => {
      setActiveStep((current) => {
        if (current === steps.length - 1) {
          return loop ? 0 : current;
        }
        return current + 1;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [steps, delay, loop]);

  return (
    <div className="my-8">
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-1 bg-gray-200 rounded-full"></div>
        {steps.map((step, index) => (
          <div key={step.id} className="relative pl-8 pb-8">
            <div
              className={`absolute left-0 top-0 w-3 h-3 rounded-full transform -translate-x-1 
              ${
                activeStep === index
                  ? "bg-blue-600 ring-4 ring-blue-100"
                  : "bg-gray-400"
              }`}
            ></div>
            <div
              className={`transition-all duration-500 ${
                activeStep === index ? "opacity-100" : "opacity-50"
              }`}
            >
              <h4
                className={`text-lg font-medium mb-1 ${
                  activeStep === index ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {step.label}
              </h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedProcess;
