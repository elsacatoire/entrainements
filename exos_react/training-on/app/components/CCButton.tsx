'use client';

import type React from "react";

type ButtonProps = {
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  iconOnly?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = "primary",
  disabled = false,
  children,
  type = "button",
  iconOnly = false
}) => {
  const variantClasses =
    variant === "primary" 
    ? "bg-lime-500 hover:hover:bg-lime-600 text-gray-900" 
    : "bg-gray-900 hover:hover:bg-gray-800 text-lime-500 border-2 border-lime-600";

  const sizeClasses = iconOnly
    ? "w-10 flex items-center justify-center rounded-xl"
    : "w-full rounded-md"

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${sizeClasses} font-semibold px-4 py-2 ${variantClasses} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};
