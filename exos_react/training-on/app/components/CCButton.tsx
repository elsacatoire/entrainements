'use client';

import type React from "react";

type ButtonProps = {
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = "primary",
  disabled = false,
  children,
}) => {
  const variantClasses =
    variant === "primary" 
    ? "bg-lime-500 hover:hover:bg-lime-600 text-gray-900" 
    : "bg-gray-900 hover:hover:bg-gray-800 text-lime-500 border-2 border-lime-600";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded font-semibold w-full ${variantClasses} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};
