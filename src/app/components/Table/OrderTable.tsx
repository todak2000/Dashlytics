/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { key } from "@/app/lib/uniqueKey";
import { isLoading } from "@/app/store";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { ViewIcon } from "../../../app/constants/images";
import { lastOrders, seeAll, tableData } from "../../../app/constants/other";
import { cn } from "../../../app/lib/cn";
import { currencyFormatter } from "../../../app/lib/currencyFormater";
import { showToast } from "../../../app/lib/toast";
import SkeletonLoader from "../SkeletonLoader";

const OrderTable: NextPage = () => {
  const loading = useSelector(isLoading);

  return (
    <>
      <span className="flex flex-row items-center justify-between">
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
              data-testid="order-title"
              className="bold-xl text-tremor-text-primary dark:invert-0"
            >
              {lastOrders}
            </Title>
            <Title
              data-testid="order-title"
              onClick={showToast}
              className="medium-lg cursor-pointer text-tremor-brand-primary dark:invert-0"
            >
              {seeAll}
            </Title>
          </>
        )}
      </span>
      <Table
        data-testid="order-table"
        className="mt-5 overflow-y-auto max-h-[260px] no-scrollbar"
      >
        {loading ? (
          [...Array(6)].map((_) => {
            return (
              <SkeletonLoader
                key={key()}
                type="block"
                className="h-8 w-full my-1 grow"
                count={1}
              />
            );
          })
        ) : (
          <>
            <TableHead>
              <TableRow className="medium-lg text-tremor-brand-secondary">
                {["Name", "Date", "Amount", "Status", "Invoice"].map(
                  (i: string) => {
                    return (
                      <TableHeaderCell
                        key={key()}
                        data-testid="order-table-header"
                      >
                        {i}
                      </TableHeaderCell>
                    );
                  }
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData()?.map(({ avatar, date, amount, status, name }) => (
                <TableRow key={name} data-testid="order-table-row">
                  <TableCell className="flex flex-row items-center medium-lg text-[#3A3F51] dark:invert">
                    {avatar}{" "}
                    {name.length > 11 ? `${name.substring(0, 11)}..` : name}
                  </TableCell>
                  <TableCell className="regular-lg text-[#737373]">
                    <Text>{date}</Text>
                  </TableCell>
                  <TableCell className="medium-lg text-tremor-brand-hover">
                    <Text> {currencyFormatter.format(Number(amount))}</Text>
                  </TableCell>
                  <TableCell
                    className={cn({
                      "regular-lg text-tremor-brand-primary": status === "Paid",
                      "regular-lg text-tremor-brand-tertiary":
                        status === "Refund",
                    })}
                  >
                    {status}
                  </TableCell>
                  <TableCell className="regular-md  text-tremor-brand-hover dark:invert">
                    <span
                      className="flex flex-row items-center cursor-pointer"
                      onClick={showToast}
                    >
                      <Image
                        src={ViewIcon}
                        alt="Icons"
                        className="mx-1"
                        width={16}
                        height={16}
                        priority
                      />
                      <Text>{`View`}</Text>
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        )}
      </Table>
    </>
  );
};

export default React.memo(OrderTable);
