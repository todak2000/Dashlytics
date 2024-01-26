"use client";
import { seeAll } from "@/app/constants/other";
import { platformData, topPlatforms } from "@/app/constants/platform";
import { IPlatform } from "@/app/constants/types";
import { currencyFormatter } from "@/app/lib/currencyFormater";
import { key } from "@/app/lib/uniqueKey";

import { Flex, ProgressBar, Text, Title } from "@tremor/react";
import { NextPage } from "next";
import React from "react";

const PlatformTable: NextPage = () => {
  return (
    <>
      <span className="flex flex-row items-center justify-between ">
        <Title
          data-testid="platform-title"
          className="bold-xl text-tremor-text-primary dark:invert-0"
        >
          {topPlatforms}
        </Title>
        <Title
          data-testid="platform-title"
          className="medium-lg text-tremor-brand-primary dark:invert-0"
        >
          {seeAll}
        </Title>
      </span>
      <div
        data-testid="platform-body"
        className="overflow-auto h-[300px] no-scrollbar"
      >
        {platformData().map(({ name, color, amount, percent }: IPlatform) => {
          return (
            <Flex key={key()} className="flex-col" data-testid="platform-data">
              <span className="w-full flex flex-row mt-3">
                <Text className="bold-xl text-[#22242c]">{name}</Text>
              </span>
              <ProgressBar value={percent} color={color} className="my-3 h-3" />
              <Flex className="regular-xl text-[#525252]">
                <Text>{currencyFormatter.format(Number(amount))}</Text>
                <Text>+{percent}%</Text>
              </Flex>
            </Flex>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(PlatformTable);
