"use client";
import Image from "next/image";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  dashboardEmail,
  dashboardName,
  dashboardText,
} from "../../../app/constants/header";
import {
  DownArrowIcon,
  NotificationIcon,
  SearchIcon,
  TimeIcon,
} from "../../../app/constants/images";
import { formatedDate } from "../../../app/lib/date.";
import { showToast } from "../../../app/lib/toast";
import { open, setOpen } from "../../../app/store";
import UserIcon from "../../../app/svgs/UserIcon";
const DashboardHeader = () => {
  const dispatch = useDispatch();
  const openn = useSelector(open);
  const handleToggle = () => {
    dispatch(setOpen(!openn));
  };
  return (
    <header
      data-testid="header-wrapper"
      className="flex items-center justify-between p-6 bg-tremor-brand-sidebar dark:invert shadow-tremor-sidebar border-b-[0.77px] border-tremor-icon-border"
    >
      <IoIosArrowForward
        onClick={handleToggle}
        className="text-3xl text-tremor-text-primary flex md:hidden"
      />
      {/* <LogoIcon className="hover:text-tremor-brand-secondary flex items-center  text-tremor-brand-primary dark:text-tremor-brand-inverted size-10 sm:hidden" /> */}
      <h5 className=" text-tremor-text-primary">{dashboardText}</h5>
      <div data-testid="header-body" className="flex items-center space-x-4">
        <div data-testid="header-data" className="relative sm:flex hidden">
          <Image
            src={SearchIcon}
            alt="Search Icon"
            className="dark:invert absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 "
            width={27}
            height={27}
            priority
          />
          <input
            type="text"
            className="pl-10 pr-4 py-2 rounded-full text-tremor-text-primary dark:invert dark:text-tremor-brand-secondary focus:outline-none focus:ring-2 focus:ring-tremor-brand-primary border-[0.77px] md:w-[14rem] lg:w-[19rem] md:min-w-[10rem] border-tremor-icon-border"
            placeholder="Search"
          />
        </div>
        <span
          data-testid="header-data"
          className="flex-row space-x-1 sm:flex hidden"
        >
          <Image
            src={TimeIcon}
            alt="Time Icon"
            width={15}
            height={15}
            priority
          />
          <p className="bold-xs  text-tremor-text-primary"> {formatedDate()}</p>
        </span>
        <span
          data-testid="header-data"
          onClick={showToast}
          className="w-10 h-10 hidden md:flex flex-row items-center dark:invert justify-center rounded-full border-[0.77px] border-tremor-icon-border cursor-pointer"
        >
          <Image
            src={NotificationIcon}
            alt="Notification Icon"
            className="dark:invert"
            width={20}
            height={20}
            priority
          />
        </span>
        <span
          data-testid="header-data"
          className="flex flex-row items-center justify-between p-2 dark:invert rounded-full w-[6rem] md:w-[15rem] md:min-w-[14rem] border-[0.77px] border-tremor-icon-border"
        >
          <span className="w-10 h-10 bg-tremor-brand-hover flex flex-row items-center dark:invert justify-center rounded-full">
            <UserIcon className="h-10 w-10 text-gray-100" />
          </span>

          <div className="md:block hidden">
            <p className="regular-lg text-tremor-text-primary dark:invert">
              {dashboardName}
            </p>
            <p className="regular-md text-[#787486] dark:invert">
              {dashboardEmail}
            </p>
          </div>
          <Image
            onClick={showToast}
            src={DownArrowIcon}
            alt="Down Arrow Icon"
            className="dark:invert cursor-pointer"
            width={20}
            height={20}
            priority
          />
        </span>
      </div>
    </header>
  );
};

export default DashboardHeader;
