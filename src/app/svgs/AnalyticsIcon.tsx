"use client";
import React from "react";
import { SvgProps } from "../constants/types";
const AnalyticsIcon: React.FC<SvgProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 40 40" fill="none" preserveAspectRatio="xMidYMid meet">
        <path
          d="M10 20.98V23C10 28 12 30 17 30H23C28 30 30 28 30 23V17C30 12 28 10 23 10H17C12 10 10 12 10 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.17 20L18.7 19.3L15.5 22.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.5 17.5L22.99 19.01L22 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.5 17.5H24.5V19.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export default React.memo(AnalyticsIcon);
