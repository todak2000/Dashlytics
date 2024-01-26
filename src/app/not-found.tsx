/* eslint-disable import/no-extraneous-dependencies */
import type { Metadata } from "next";
import LogoIcon from "./svgs/LogoIcon";
export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <main>
      <section data-testid="notfound-wrapper" className="bg-white">
        <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-black">
          <LogoIcon
            data-testid="logo"
            className="hover:text-tremor-brand-secondary text-tremor-brand-primary size-52"
          />
          <h1 className="mt-8 text-4xl md:text-6xl">Page Not Found</h1>
          <a href="/">Back to home</a>
        </div>
      </section>
    </main>
  );
}