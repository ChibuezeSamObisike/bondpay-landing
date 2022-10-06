import React from "react";

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: {
  children: any;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  if (variant === "secondary") {
    return (
      <button {...props} className={`secondary-bg ${className}`}>
        {children}
      </button>
    );
  }
  if (variant === "primary") {
    return (
      <button {...props} className={`primary-bg ${className}`}>
        {children}
      </button>
    );
  }
  return (
    <button {...props} className={`primary-bg ${className}`}>
      {children}
    </button>
  );
}
