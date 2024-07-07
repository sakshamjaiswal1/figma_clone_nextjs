"use client";
import CursorSVG from "@/public/assets/CursorSVG";
import React from "react";

const Cursor = ({
  color,
  x,
  y,
  message,
}: {
  color: string;
  x: number;
  y: number;
  message: string;
}) => {
  return (
    <div
      className="pointer-events-none absolute left-0 top-0"
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      <CursorSVG color={color} />
      {message && (
        <div
          className="absolute left-2 top-5 px-4 py-2 text-sm leading-relaxed text-white rounded-[20px]"
          style={{ backgroundColor: color }}
        >
          <p className="whitespace-nowrap " >{message}</p>{" "}
        </div>
      )}
    </div>
  );
};

export default Cursor;
