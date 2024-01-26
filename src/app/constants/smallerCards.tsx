import { faker } from "@faker-js/faker";
import { AverageSalesIcon, TotalOrderIcon, TotalRefundIcon } from "./images";
import { ICard } from "./types";

export const cardData: ICard[] = [
  {
    name: "Total Order",
    icon: TotalOrderIcon,
    prev: faker.number.int({ min: 599, max: 999 }),
    value: faker.number.int({ min: 599, max: 999 }),
  },
  {
    name: "Total Refund",
    icon: TotalRefundIcon,
    prev: faker.number.int({ min: 500, max: 999 }),
    value: faker.number.int({ min: 500, max: 999 }),
  },
  {
    name: "Average Sales",
    icon: AverageSalesIcon,
    prev: faker.number.int({ min: 599, max: 999 }),
    value: faker.number.int({ min: 599, max: 999 }),
  },
  {
    name: "Total Income",
    icon: TotalRefundIcon,
    prev: faker.number.int({ min: 5999, max: 9999 }),
    value: faker.number.int({ min: 5999, max: 9999 }),
  },
];
