import { Overviews, Processed, Rate, Titles } from './interfaces';

export type StatisticsProps = {
  mockOverviews: Overviews[];
};
export type MainOverviewProps = {
  mockOverviews: Overviews[];
  mockProcessed: Processed[];
  mockRate: Rate[];
};
export type RateProps = {
  rate: number;
  status: string;
};
export type StatusOverviewProps = {
  status: string;
  text: string;
};

export type BackBtnProps = {
  path: string;
};

export type ChartProps = {
  mockProcessed: Processed[];
  mockRate: Rate[];
};
export type ListChatProps = {
  titles: Titles[];
};
export type ItemChatProps = {
  item: Titles;
};
export type ListOverviewProps = {
  titles: Titles[];
};
export type ItemOverviewProps = {
  item: Titles;
};
