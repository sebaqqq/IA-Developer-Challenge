import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  withAccent?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = "left",
  withAccent = true,
}) => {
  const alignmentClasses = alignment === "center" ? "text-center mx-auto" : "";

  return (
    <div
      className={`mb-8 ${alignmentClasses} ${
        alignment === "center" ? "max-w-2xl" : ""
      }`}
    >
      {withAccent && (
        <div
          className={`h-1 w-16 bg-blue-600 mb-4 ${
            alignment === "center" ? "mx-auto" : ""
          }`}
        ></div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mb-3">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-gray-500">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
