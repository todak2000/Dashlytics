"use client";
import React from "react";
import { SvgProps } from "../constants/types";
const SettingTwoIcon: React.FC<SvgProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 40 40" fill="none" preserveAspectRatio="xMidYMid meet">
        <path
          d="M23 20C23 18.34 21.66 17 20 17C18.34 17 17 18.34 17 20C17 21.66 18.34 23 20 23C20.41 23 20.81 22.92 21.17 22.76"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.8799 28.5799L15.9699 29.2099C16.7599 29.6799 17.7799 29.3999 18.2499 28.6099L18.3599 28.4199C19.2599 26.8499 20.7399 26.8499 21.6499 28.4199L21.7599 28.6099C22.2299 29.3999 23.2499 29.6799 24.0399 29.2099L25.7699 28.2199C26.6799 27.6999 26.9899 26.5299 26.4699 25.6299C25.5599 24.0599 26.2999 22.7799 28.1099 22.7799C29.1499 22.7799 30.0099 21.9299 30.0099 20.8799V19.1199C30.0099 18.0799 29.1599 17.2199 28.1099 17.2199C27.0999 17.2199 26.4199 16.8199 26.1799 16.1899C25.9899 15.6999 26.0699 15.0599 26.4699 14.3699C26.9899 13.4599 26.6799 12.2999 25.7699 11.7799L24.9599 11.3199"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.64 11.5801C20.74 13.1501 19.26 13.1501 18.35 11.5801L18.24 11.3901C17.78 10.6001 16.76 10.3201 15.97 10.7901L14.24 11.7801C13.33 12.3001 13.02 13.4701 13.54 14.3801C14.45 15.9401 13.71 17.2201 11.9 17.2201C10.86 17.2201 10 18.0701 10 19.1201V20.8801C10 21.9201 10.85 22.7801 11.9 22.7801C13.71 22.7801 14.45 24.0601 13.54 25.6301"
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
export default React.memo(SettingTwoIcon);
