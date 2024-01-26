import React from "react";
import ThemeSwitch from "../components/ThemeSwitch";
import { key } from "../lib/uniqueKey";
import AnalyticsIcon from "../svgs/AnalyticsIcon";
import BoxIcon from "../svgs/BoxIcon";
import DashboardIcon from "../svgs/DashboardIcon";
import InfoIcon from "../svgs/InfoIcon";
import LogoIcon from "../svgs/LogoIcon";
import OtherIcon from "../svgs/OtherIcon";
import PowerIcon from "../svgs/PowerIcon";
import SettingIcon from "../svgs/SettingIcon";
import SettingTwoIcon from "../svgs/SettingTwoIcon";
import UserIcon from "../svgs/UserIcon";
import { ISideBar, SvgProps } from "./types";

const applyIconStyles = (IconComponent: React.FC<SvgProps>) => (
  <IconComponent className="hover:text-tremor-brand-hover text-tremor-brand-secondary size-10 my-1" />
);

export const sidebarTopArray: ISideBar[] = [
  {
    id: key(),
    route: "/switch",
    icon: (
      <LogoIcon className="hover:text-tremor-brand-secondary text-tremor-brand-primary dark:text-tremor-brand-inverted size-10 mb-4" />
    ),
  },
  {
    id: key(),
    route: "/",
    icon: (
      <DashboardIcon className="dark:text-[#cccccc] hover:text-tremor-brand-primary text-tremor-brand-hover size-6 my-1" />
    ),
  },
  {
    id: key(),
    route: null,
    icon: applyIconStyles(AnalyticsIcon),
  },
  {
    id: key(),
    route: null,
    icon: applyIconStyles(UserIcon),
  },
  {
    id: key(),
    route: null,
    icon: applyIconStyles(BoxIcon),
  },
  {
    id: key(),
    route: null,
    icon: applyIconStyles(SettingIcon),
  },
  {
    id: key(),
    route: null,
    icon: applyIconStyles(InfoIcon),
  },
  {
    id: key(),
    route: "/switch",
    icon: <ThemeSwitch />,
  },
];

export const sidebarBottomArray: ISideBar[] = [
  {
    id: key(),
    icon: applyIconStyles(OtherIcon),
  },
  {
    id: key(),
    icon: applyIconStyles(SettingTwoIcon),
  },
  {
    id: key(),
    icon: applyIconStyles(PowerIcon),
  },
];
