import { ReactElement } from "react";

export interface SvgProps {
  className?: string;
}

export interface ITable {
  avatar: ReactElement;
  name: string;
  date: string;
  amount: string;
  status: string;
}

export interface IPlatform {
  name: string;
  color:
    | "slate"
    | "gray"
    | "zinc"
    | "neutral"
    | "stone"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose"
    | undefined;
  amount: number;
  percent: number;
}
export interface ISideBar {
  id: string;
  icon: ReactElement;
  route?: string | null;
}

export interface ICard {
  name: string;
  icon: string;
  prev: number;
  value: number;
}

export interface ISales {
  value: number;
  type: string;
}
