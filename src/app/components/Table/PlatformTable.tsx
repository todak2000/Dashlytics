"use client";
import { seeAll } from "../../../app/constants/other";
import { platformData, topPlatforms } from "../../../app/constants/platform";
import { IPlatform } from "../../../app/constants/types";
import { currencyFormatter } from "../../../app/lib/currencyFormater";
import { key } from "../../../app/lib/uniqueKey";

import { isLoading } from "@/app/store";
import { Flex, ProgressBar, Text, Title } from "@tremor/react";
import { NextPage } from "next";
import React from "react";
import { useSelector } from "react-redux";
import { showToast } from "../../lib/toast";
import SkeletonLoader from "../SkeletonLoader";

const PlatformTable: NextPage = () => {
  const loading = useSelector(isLoading);
  return (
    <>
      <span className="flex flex-row items-center justify-between ">
        {loading ? (
          ["h-6 w-[100px] grow", "h-6 w-[100px] grow"].map((i: string) => {
            return (
              <SkeletonLoader
                key={key()}
                type="block"
                className={i}
                count={1}
              />
            );
          })
        ) : (
          <>
            <Title
              data-testid="platform-title"
              className="bold-xl text-tremor-text-primary dark:invert-0"
            >
              {topPlatforms}
            </Title>
            <Title
              data-testid="platform-title"
              onClick={showToast}
              className="medium-lg cursor-pointer text-tremor-brand-primary dark:invert-0"
            >
              {seeAll}
            </Title>
          </>
        )}
      </span>
      <div
        data-testid="platform-body"
        className="overflow-auto h-[300px] no-scrollbar"
      >
        {loading
          ? [...Array(6)].map((_) => {
              return (
                <Flex
                  key={key()}
                  className="flex-col"
                  data-testid="platform-data"
                >
                  <span className="w-full flex flex-row mt-3">
                    <SkeletonLoader
                      type="block"
                      className="h-4 w-[100px] grow"
                      count={1}
                    />
                  </span>
                  <SkeletonLoader
                    type="block"
                    className=" w-[90vw] md:w-[40vw] my-1 h-3 grow"
                    count={1}
                  />
                  <Flex className="regular-xl text-[#525252]">
                    {["h-4 w-[100px] grow", "h-4 w-[50px] grow"].map(
                      (i: string) => {
                        return (
                          <SkeletonLoader
                            key={key()}
                            type="block"
                            className={i}
                            count={1}
                          />
                        );
                      }
                    )}
                  </Flex>
                </Flex>
              );
            })
          : platformData().map(
              ({ name, color, amount, percent }: IPlatform) => {
                return (
                  <Flex
                    key={key()}
                    className="flex-col"
                    data-testid="platform-data"
                  >
                    <span className="w-full flex flex-row mt-3">
                      <Text className="bold-xl text-[#22242c]">{name}</Text>
                    </span>
                    <ProgressBar
                      value={percent}
                      color={color}
                      className="my-3 h-3"
                    />
                    <Flex className="regular-xl text-[#525252]">
                      <Text>{currencyFormatter.format(Number(amount))}</Text>
                      <Text>+{percent}%</Text>
                    </Flex>
                  </Flex>
                );
              }
            )}
      </div>
    </>
  );
};

export default React.memo(PlatformTable);
