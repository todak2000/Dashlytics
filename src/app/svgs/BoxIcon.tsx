"use client";
import React from "react";
import { SvgProps } from "../constants/types";
const BoxIcon: React.FC<SvgProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 40 40" fill="none" preserveAspectRatio="xMidYMid meet">
        <path
          d="M11.1699 15.4401L19.9999 20.55L28.7699 15.47"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 29.61V20.54"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.3901 17.1701C10.3901 15.7901 11.3801 14.1101 12.5901 13.4401L17.9301 10.4701C19.0701 9.84006 20.9401 9.84006 22.0801 10.4701L27.4201 13.4401C28.6301 14.1101 29.6201 15.7901 29.6201 17.1701V22.8201C29.6201 24.2001 28.6301 25.8801 27.4201 26.5501L22.0801 29.5201C20.9401 30.1501 19.0701 30.1501 17.9301 29.5201L12.5901 26.5501C11.3801 25.8801 10.3901 24.2001 10.3901 22.8201V22.0001"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.9998 21.24V17.58L18.9297 14.07L17.8798 13.47L15.5098 12.1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export default React.memo(BoxIcon);
