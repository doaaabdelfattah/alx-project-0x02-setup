// components/Button.tsx
import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  children,
  shape = "rounded-md",
  size = "medium",
}) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`text-white ${sizeClasses[size]} ${shape} hover:bg-slate-900 bg-slate-800`}
    >
      {children}
    </button>
  );
};

export default Button;
