/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { isLoading } from "@/app/store";
import { BarChart, Flex, Select, SelectItem, Text, Title } from "@tremor/react";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { salesData, salesTrend, shortBy } from "../../constants/sales";
import { showSalesToast } from "../../lib/toast";
import { key } from "../../lib/uniqueKey";
import SkeletonLoader from "../SkeletonLoader";

const SalesTrend: NextPage = () => {
  const [value, setValue] = useState("weekly");
  const [data, setData] = useState<any>(salesData(value.toLowerCase()));

  useEffect(() => {
    setData(salesData(value.toLowerCase()));
    showSalesToast(data?.values?.length);
  }, [value]);

  const loading = useSelector(isLoading);
  return (
    <>
      <span
        data-testid="sales-wrapper"
        className="flex flex-col md:flex-row md:items-center justify-between"
      >
        {loading ? (
          [
            "h-6 w-[10vw] grow hidden md:flex",
            "h-6 w-[20vw] grow hidden md:flex",
          ].map((i: string) => {
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
            <Title className="bold-xl text-tremor-text-primary dark:invert-0">
              {salesTrend}
            </Title>
            <Flex className="w-[16rem] my-3 md:my-0">
              <Text className="text-tremor-text-primary medium-md">
                {shortBy}
              </Text>
              <Select
                data-testid="sales-select"
                value={value}
                onValueChange={setValue}
                className="w-[10px]"
              >
                {["Weekly", "Monthly", "Yearly"].map((i) => {
                  return (
                    <SelectItem key={key()} value={i}>
                      {i}
                    </SelectItem>
                  );
                })}
              </Select>
            </Flex>
          </>
        )}
      </span>
      {loading ? (
        <SkeletonLoader
          key={key()}
          type="block"
          className="h-full md:h-[35vh] md:mt-6 w-fill grow"
          count={1}
        />
      ) : (
        <BarChart
          data-testid="sales-chart"
          className="mt-6 h-[200px] md:h-[250px]"
          data={data?.values}
          showAnimation
          index="name"
          showLegend={false}
          categories={["Sales Trends"]}
          colors={["emerald"]}
          yAxisWidth={48}
        />
      )}
    </>
  );
};

export default React.memo(SalesTrend);
