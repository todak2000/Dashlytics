import { faker } from "@faker-js/faker";

export const salesTrend = "Sales Trends";
export const shortBy = "Short by:";

const months: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const weeks: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const years: string[] = [
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
];

const generateData = (count: number) => {
  const data: any[] = [];
  for (let i: number = 0; i < count; i += 1) {
    if (count === weeks.length) {
      data.push({
        name: weeks[i],
        "Sales Trends": faker.number.int({ min: 99, max: 999 }),
      });
    } else if (count === months.length) {
      data.push({
        name: months[i],
        "Sales Trends": faker.number.int({ min: 99, max: 999 }),
      });
    } else {
      data.push({
        name: years[i],
        "Sales Trends": faker.number.int({ min: 99, max: 999 }),
      });
    }
  }
  return data;
};
export const salesData = (type?: string) => {
  let data;
  switch (type) {
    case "weekly":
      data = {
        name: "weeks",
        values: generateData(7),
      };
      break;
    case "monthly":
      data = {
        name: "months",
        values: generateData(12),
      };
      break;
    case "yearly":
      data = {
        name: "years",
        values: generateData(15),
      };
      break;
    default:
      break;
  }

  return data;
};
