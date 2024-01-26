"use client";
import { Card, Flex, Text } from "@tremor/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import SalesTrend from "./components/BarChart/SalesTrend";
import DashboardHeader from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import OrderTable from "./components/Table/OrderTable";
import PlatformTable from "./components/Table/PlatformTable";
import {
  TrendDownIcon,
  TrendDownTwoIcon,
  TrendUpIcon,
  TrendUpTwoIcon,
} from "./constants/images";
import { cardData } from "./constants/smallerCards";
import { cn } from "./lib/cn";
import { currencyFormatter } from "./lib/currencyFormater";
import { key } from "./lib/uniqueKey";
import { open } from "./store";
export default function Home() {
  const openn = useSelector(open);
  return (
    <Flex className="bg-tremor-brand-sidebar items-start dark:bg-black min-h-screen h-[100vh] ">
      <SideBar />
      <main
        className={cn(
          "w-full md:w-[calc(100vw-80px)] absolute right-0 overflow-auto border-l-[0.77px] border-tremor-icon-border"
        )}
      >
        <DashboardHeader />
        <div className="flex flex-col md:flex-row gap-3 h-full min-h-[calc(100vh-111px)] bg-tremor-brand-sidebar dark:invert p-6">
          <div className="w-full md:w-7/12 flex flex-col gap-3  h-half md:h-full md:min-h-[calc(100vh-111px)] ">
            <Card className="h-[375px] dark:invert">
              <SalesTrend />
            </Card>
            <Card className="h-[375px] dark:invert">
              <OrderTable />
            </Card>
          </div>
          <div className="w-full md:w-5/12 flex flex-col gap-3 h-half md:h-full md:min-h-[calc(100vh-111px)] ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 dark:invert">
              {cardData.map(({ name, icon, prev, value }) => {
                return (
                  <Card key={key()} className="h-[180px] p-3">
                    <Flex>
                      <Image
                        src={icon}
                        alt="Card Icons"
                        width={40}
                        height={40}
                        priority
                      />
                      <Image
                        src={prev > value ? TrendDownTwoIcon : TrendUpTwoIcon}
                        alt="Card Icons"
                        width={104}
                        height={32}
                        priority
                      />
                    </Flex>
                    <Text className="medium-xl text-[#898989] my-2">
                      {name}
                    </Text>
                    <h4 className="h4 text-[#3A3F51]">
                      {name === "Total Income"
                        ? currencyFormatter.format(Number(value))
                        : value}
                    </h4>
                    <Flex className="my-2">
                      <span
                        className={cn(
                          "w-[70px] h-[24px] rounded-full  flex flex-row  items-center justify-center medium-sm dark:bg-transparent",
                          {
                            "text-[#ED544E] bg-[#fbe1df]  dark:border-[#ED544E] border-[0.5px]":
                              prev > value,
                            "text-tremor-brand-primary bg-[#e6f8f4] dark:border-tremor-brand-primary border-[0.5px]":
                              prev <= value,
                          }
                        )}
                      >
                        <Image
                          className="mr-1"
                          src={prev > value ? TrendDownIcon : TrendUpIcon}
                          alt="Card Icons"
                          width={12}
                          height={12}
                          priority
                        />{" "}
                        {Math.abs(((value - prev) / prev) * 100).toFixed(0)}%
                      </span>
                      <Text className="regular-md text-[#606060]">
                        vs previous month
                      </Text>
                    </Flex>
                  </Card>
                );
              })}
            </div>
            <Card className="h-[375px] dark:invert">
              <PlatformTable />
            </Card>
          </div>
        </div>
      </main>
    </Flex>
  );
}
