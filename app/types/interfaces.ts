export interface Processed {
  day: string;
  value: number;
}
export interface Rate {
  day: string;
  value: number;
}
export interface Overviews {
  id: number;
  title: string;
  status: string;
  time: string;
  success_rate: number;
  rate: number;
}
export interface Titles {
  id: string;
  title: string;
  description: string[];
}
export interface SuggestionArr {
  id: number;
  value: string;
}
export interface Messages {
  body: string;
  id: number;
}
