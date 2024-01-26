"use client";
import React from "react";
import { SvgProps } from "../constants/types";
const InfoIcon: React.FC<SvgProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 40 40" fill="none" preserveAspectRatio="xMidYMid meet">
        <path
          d="M20 16V21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14C10.75 15.67 10 17.75 10 20C10 25.52 14.48 30 20 30C25.52 30 30 25.52 30 20C30 14.48 25.52 10 20 10C18.57 10 17.2 10.3 15.97 10.85"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.9946 24H20.0036"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export default React.memo(InfoIcon);
