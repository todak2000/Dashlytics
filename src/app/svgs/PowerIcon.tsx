"use client";
import React from "react";
import { SvgProps } from "../constants/types";
const PowerIcon: React.FC<SvgProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 40 40" fill="none" preserveAspectRatio="xMidYMid meet">
        <path
          d="M14.56 22.5599L12 19.9999L14.56 17.4399"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.2398 20H12.0698"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.2398 20H20.2798"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.01 14.48C27.25 15.84 28 17.71 28 20C28 25 24.42 28 20 28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 12C21.05 12 22.05 12.17 22.97 12.49"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export default React.memo(PowerIcon);
