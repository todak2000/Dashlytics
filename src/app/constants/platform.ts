import { faker } from "@faker-js/faker";
import { IPlatform } from "./types";
export const topPlatforms = "Top Platforms";
const colors = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

export const platformData = () => {
  const data: IPlatform[] = [];
  for (let i: number = 0; i < 5; i += 1) {
    data.push({
      name: faker.person.jobType(),
      color: faker.helpers.arrayElement(colors) as any,
      amount: faker.number.int({ min: 999999, max: 9999999 }),
      percent: faker.number.int({ min: 1, max: 99 }),
    });
  }
  return data;
};
