"use client";
import React from "react";
import { SvgProps } from "../constants/types";
const ActiveSideBarIcon: React.FC<SvgProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 3 21" fill="none" preserveAspectRatio="xMidYMid meet">
        <path
          d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V0.388889V21V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"
          fill="#0D062D"
        />
      </svg>
    </div>
  );
};
export default React.memo(ActiveSideBarIcon);
