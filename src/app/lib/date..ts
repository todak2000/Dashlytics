import { faker } from "@faker-js/faker";

export const formatedDate = () => {
  const date = faker.date.birthdate();

  const options: any = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return formattedDate;
};
