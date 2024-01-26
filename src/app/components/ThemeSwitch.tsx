/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "../lib/cn";
import DarkModeIcon from "../svgs/DarkModeIcon";
import LightModeIcon from "../svgs/LightModeIcon";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTheme("light");
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white w-[46px] h-[92px] rounded-full flex flex-col justify-center items-center my-1">
      <button
        data-testid="light-theme-button"
        disabled={theme === "light"}
        onClick={() => setTheme("light")}
        aria-label="Switch to Light Theme"
        type="button"
      >
        <LightModeIcon
          className={cn(" size-8 my-1", {
            "text-tremor-brand-primary hover:text-tremor-brand-hover":
              theme === "light",
            "hover:text-tremor-brand-hover text-tremor-brand-secondary ":
              theme === "dark",
          })}
        />
      </button>
      <button
        data-testid="dark-theme-button"
        disabled={theme === "dark"}
        aria-label="Switch to Dark Theme"
        onClick={() => setTheme("dark")}
        type="button"
      >
        <DarkModeIcon
          className={cn(" size-8 my-1", {
            "text-tremor-brand-inverted hover:text-tremor-brand-hover":
              theme === "dark",
            "hover:text-tremor-brand-hover text-tremor-brand-secondary ":
              theme === "light",
          })}
        />
      </button>
    </div>
  );
};

export default ThemeSwitch;
