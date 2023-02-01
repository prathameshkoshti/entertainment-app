import React from "react";

export default function Button({ children, restProps, className }) {
  return (
    <button className={`button ${className}`} {...restProps}>
      {children}
    </button>
  );
}
