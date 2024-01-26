"use client";
import { sidebarBottomArray, sidebarTopArray } from "@/app/constants/sidebar";
import { ISideBar } from "@/app/constants/types";
import { cn } from "@/app/lib/cn";
import { showToast } from "@/app/lib/toast";
import { open, setOpen } from "@/app/store";
import ActiveSideBarIcon from "@/app/svgs/ActiveSideBarIcon";
import { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const SideBar: NextPage = () => {
  const pathname = usePathname();
  const openn = useSelector(open);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(setOpen(!openn));
  };

  return (
    <header
      data-testid="sidebar-wrapper"
      className={cn(
        "sm:block overflow-auto no-scrollbar fixed left-0 top-0 bg-tremor-brand-sidebar dark:invert shadow-tremor-sidebar border-r-[0.77px] border-tremor-icon-border min-h-[100vh] h-full",
        {
          "block z-50": openn,
          hidden: !openn,
        }
      )}
    >
      <div className="max-w-[80px] w-[80px]  mx-auto   h-[95vh] flex flex-col justify-between">
        <div
          data-testid="sidebar-body"
          className="flex flex-col items-center justify-between mt-10"
        >
          <IoIosArrowBack
            onClick={handleToggle}
            className="text-3xl text-tremor-text-primary mb-4 md:hidden"
          />
          {sidebarTopArray.map(({ id, route, icon }: ISideBar) => {
            return (
              <Link
                data-testid="link"
                href={(route && route === "/switch") || !route ? "#" : route}
                onClick={route ? () => null : showToast}
                key={id}
                className="w-full flex-row flex justify-center items-center relative"
              >
                {icon}{" "}
                {route === pathname ? (
                  <ActiveSideBarIcon className="text-tremor-brand-hover w-1 h-6 absolute right-0" />
                ) : null}
              </Link>
            );
          })}
        </div>
        <div
          data-testid="sidebar-body"
          className="flex flex-col items-center justify-between"
        >
          {sidebarBottomArray.map(({ id, icon }: ISideBar) => {
            return (
              <Link onClick={showToast} data-testid="link" href={`/`} key={id}>
                {icon}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default React.memo(SideBar);
