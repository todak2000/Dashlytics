"use client";
import React from "react";
import { SvgProps } from "../constants/types";
const SettingIcon: React.FC<SvgProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 40 40" fill="none" preserveAspectRatio="xMidYMid meet">
        <path
          d="M22.6599 28.01L21.1399 29.53C20.5199 30.15 19.4999 30.15 18.8799 29.53L17.3599 28.01C17.0999 27.75 16.5899 27.54 16.2299 27.54H14.0799C13.1999 27.54 12.4799 26.8199 12.4799 25.9399V23.79C12.4799 23.43 12.2699 22.92 12.0099 22.66L10.4899 21.14C9.8699 20.52 9.8699 19.5 10.4899 18.88L12.0099 17.36C12.2699 17.1 12.4799 16.59 12.4799 16.23V14.08C12.4799 13.2 13.1999 12.48 14.0799 12.48"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.3401 11.9899L18.8601 10.4699C19.4801 9.84988 20.5001 9.84988 21.1201 10.4699L22.6401 11.9899C22.9001 12.2499 23.4101 12.4599 23.7701 12.4599H25.9201C26.8001 12.4599 27.5201 13.18 27.5201 14.06V16.2099C27.5201 16.5699 27.7301 17.0799 27.9901 17.3399L29.5101 18.8599C30.1301 19.4799 30.1301 20.4999 29.5101 21.1199L27.9901 22.6399C27.7301 22.8999 27.5201 23.4099 27.5201 23.7699V25.92C27.5201 26.8 26.8001 27.5199 25.9201 27.5199"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 23L23 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.4945 22.5H22.5035"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.4945 17.5H17.5035"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export default React.memo(SettingIcon);
