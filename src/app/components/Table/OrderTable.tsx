"use client";
import { ViewIcon } from "@/app/constants/images";
import { lastOrders, seeAll, tableData } from "@/app/constants/other";
import { cn } from "@/app/lib/cn";
import { currencyFormatter } from "@/app/lib/currencyFormater";
import { showToast } from "@/app/lib/toast";
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

const OrderTable: NextPage = () => {
  return (
    <>
      <span className="flex flex-row items-center justify-between">
        <Title
          data-testid="order-title"
          className="bold-xl text-tremor-text-primary dark:invert-0"
        >
          {lastOrders}
        </Title>
        <Title
          data-testid="order-title"
          className="medium-lg text-tremor-brand-primary dark:invert-0"
        >
          {seeAll}
        </Title>
      </span>
      <Table
        data-testid="order-table"
        className="mt-5 overflow-y-auto max-h-[260px] no-scrollbar"
      >
        <TableHead>
          <TableRow className="medium-lg text-tremor-brand-secondary">
            <TableHeaderCell data-testid="order-table-header">
              Name
            </TableHeaderCell>
            <TableHeaderCell data-testid="order-table-header">
              Date
            </TableHeaderCell>
            <TableHeaderCell data-testid="order-table-header">
              Amount
            </TableHeaderCell>
            <TableHeaderCell data-testid="order-table-header">
              Status
            </TableHeaderCell>
            <TableHeaderCell data-testid="order-table-header">
              Invoice
            </TableHeaderCell>
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
                  "regular-lg text-tremor-brand-tertiary": status === "Refund",
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
      </Table>
    </>
  );
};

export default React.memo(OrderTable);
