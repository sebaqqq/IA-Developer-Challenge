import React from "react";

interface CardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  gradient?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  icon,
  children,
  gradient = false,
}) => {
  return (
    <div
      className={`rounded-xl shadow-md overflow-hidden ${
        gradient ? "bg-gradient-to-br from-blue-50 to-purple-50" : "bg-white"
      }`}
    >
      <div className="p-6">
        <div className="flex items-start mb-4">
          <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">{icon}</div>
          <h3 className="ml-4 text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Card;
