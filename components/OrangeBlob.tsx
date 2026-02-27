import React from "react";

export default function OrangeBlob({
  className = "",
  rad = 384,
}: {
  className?: string;
  rad?: number;
}) {
  return (
    <div
      aria-hidden
      className={`rounded-full bg-[#ffffff] opacity-5 ${className}`}
      //   className={`rounded-full bg-[#DB5928] opacity-90 ${className}`}
      style={{ width: rad, height: rad }}
    />
  );
}
