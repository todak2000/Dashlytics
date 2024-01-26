import { faker } from "@faker-js/faker";
import { formatedDate } from "../lib/date.";
import UserIcon from "../svgs/UserIcon";
import { ITable } from "./types";

export const lastOrders = "Last Orders";
export const seeAll = "See All";
export const tableData = () => {
  const data: ITable[] = [];
  for (let i: number = 0; i < 5; i += 1) {
    data.push({
      name: faker.person.fullName(),
      date: formatedDate(),
      amount: faker.number.int({ min: 100, max: 999 }).toString(),
      status: faker.datatype.boolean() ? "Paid" : "Refund",
      avatar: (
        <span className="w-10 h-10 bg-tremor-brand-hover flex flex-row items-center dark:invert justify-center rounded-full mr-2">
          <UserIcon className="h-10 w-10 text-gray-100" />
        </span>
      ),
    });
  }

  return data;
};
