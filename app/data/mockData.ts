import { Overviews, Processed, Rate, SuggestionArr, Titles } from '../types/interfaces';

export const mockProcessed: Processed[] = [
  { day: 'Sun', value: 25 },
  { day: 'Mon', value: 50 },
  { day: 'Wed', value: 75 },
  { day: 'Thu', value: 100 },
  { day: 'Fri', value: 125 },
  { day: 'Sat', value: 150 },
];
export const mockProcessedId: Processed[] = [
  { day: 'Sun', value: 150 },
  { day: 'Mon', value: 125 },
  { day: 'Wed', value: 100 },
  { day: 'Thu', value: 75 },
  { day: 'Fri', value: 50 },
  { day: 'Sat', value: 25 },
];

export const mockRate: Rate[] = [
  { day: 'Sun', value: 25 },
  { day: 'Mon', value: 50 },
  { day: 'Wed', value: 100 },
  { day: 'Thu', value: 75 },
  { day: 'Fri', value: 50 },
  { day: 'Sat', value: 75 },
];
export const mockRateId: Rate[] = [
  { day: 'Sun', value: 75 },
  { day: 'Mon', value: 25 },
  { day: 'Wed', value: 25 },
  { day: 'Thu', value: 75 },
  { day: 'Fri', value: 100 },
  { day: 'Sat', value: 75 },
];

export const mockOverviews: Overviews[] = [
  {
    id: 1,
    title: 'Invoice reminers',
    status: 'running',
    time: '13.04.24 10:30',
    success_rate: 22,
    rate: 55,
  },
  {
    id: 11,
    title: 'Invoice reminers',
    status: 'running',
    time: '13.04.24 10:30',
    success_rate: 22,
    rate: 55,
  },
  {
    id: 111,
    title: 'Invoice reminers',
    status: 'running',
    time: '13.04.24 10:30',
    success_rate: 22,
    rate: 55,
  },
  {
    id: 2,
    title: 'Payroll',
    status: 'audit mode',
    time: '13.04.24 11:30',
    success_rate: 33,
    rate: 33,
  },
  {
    id: 3,
    title: 'Debt collection',
    status: 'needs attention',
    time: '13.04.24 12:30',
    success_rate: 44,
    rate: 44,
  },
  {
    id: 4,
    title: 'Invoice reminers',
    status: 'running',
    time: '13.04.24 12:30',
    success_rate: 77,
    rate: 11,
  },
  {
    id: 5,
    title: 'Payroll',
    status: 'audit mode',
    time: '13.04.24 12:30',
    success_rate: 90,
    rate: 55,
  },
  {
    id: 6,
    title: 'Debt collection',
    status: 'needs attention',
    time: '13.04.24 12:30',
    success_rate: 10,
    rate: 66,
  },
];
export const mockOverviewsId: Overviews[] = [
  {
    id: 2,
    title: 'Payroll',
    status: 'audit mode',
    time: '13.04.24 11:30',
    success_rate: 33,
    rate: 77,
  },
  {
    id: 22,
    title: 'Payroll',
    status: 'audit mode',
    time: '13.04.24 11:30',
    success_rate: 33,
    rate: 77,
  },
  {
    id: 222,
    title: 'Payroll',
    status: 'audit mode',
    time: '13.04.24 11:30',
    success_rate: 33,
    rate: 77,
  },
  {
    id: 1,
    title: 'Invoice reminers',
    status: 'running',
    time: '13.04.24 10:30',
    success_rate: 22,
    rate: 77,
  },
  {
    id: 4,
    title: 'Invoice reminers',
    status: 'running',
    time: '13.04.24 12:30',
    success_rate: 77,
    rate: 33,
  },

  {
    id: 3,
    title: 'Debt collection',
    status: 'needs attention',
    time: '13.04.24 12:30',
    success_rate: 44,
    rate: 88,
  },

  {
    id: 5,
    title: 'Payroll',
    status: 'audit mode',
    time: '13.04.24 12:30',
    success_rate: 90,
    rate: 55,
  },
  {
    id: 6,
    title: 'Debt collection',
    status: 'needs attention',
    time: '13.04.24 12:30',
    success_rate: 10,
    rate: 66,
  },
];
export const suggestion: SuggestionArr[] = [
  { id: 1, value: 'Suggestion' },
  { id: 2, value: 'Example text' },
  { id: 3, value: 'Lorem ipsum dolor sit amet.' },
  { id: 4, value: 'Alias rem aperiam repudiandae?' },
  { id: 5, value: 'Non voluptate sit' },
  { id: 6, value: 'Assumenda sint laboriosam quidem' },
];

export const titles: Titles[] = [
  {
    title: 'Data Extraction from Sales Spreadsheet',
    description: [
      'The system monitors the Sales Spreadsheet for all new entries and once per day (08:00 CET) generates the new invoices',
      'It extracts necessary details - customer ID, price. purchase amounts, Country of Origin, Tax ID, Currency and date.',
      'It extracts necessary details - customer ID, price. purchase amounts, Country of Origin, Tax ID, Currency and date.',
    ],
    id: '11111',
  },
  {
    title: 'Retrieving Email Addresses from Hubspot',
    description: [
      'The system monitors the Sales Spreadsheet for all new entries and once per day (08:00 CET) generates the new invoices',
      'It extracts necessary details - customer ID, price. purchase amounts, Country of Origin, Tax ID, Currency and date.',
      'It extracts necessary details - customer ID, price. purchase amounts, Country of Origin, Tax ID, Currency and date.',
    ],
    id: '22222',
  },
  {
    title: 'Invoice Generation in ERP System',
    description: [
      'The system monitors the Sales Spreadsheet for all new entries and once per day (08:00 CET) generates the new invoices',
      'It extracts necessary details - customer ID, price. purchase amounts, Country of Origin, Tax ID, Currency and date.',
      'It extracts necessary details - customer ID, price. purchase amounts, Country of Origin, Tax ID, Currency and date.',
    ],
    id: '33333',
  },
  {
    title: 'Emailing Invoices to Customers',
    description: [
      'The system monitors the Sales Spreadsheet for all new entries and once per day (08:00 CET) generates the new invoices',
      'It extracts necessary details - customer ID, price. purchase amounts, Country of Origin, Tax ID, Currency and date.',
      'It extracts necessary details - customer ID, price. purchase amounts, Country of Origin, Tax ID, Currency and date.',
    ],
    id: '44444',
  },
  {
    title: 'Logging and Confirmation Notifications',
    description: [
      'The system monitors the Sales Spreadsheet for all new entries and once per day (08:00 CET) generates the new invoices',
      'It extracts necessary details - customer ID, price. purchase amounts, Country of Origin, Tax ID, Currency and date.',
      'It extracts necessary details - customer ID, price. purchase amounts, Country of Origin, Tax ID, Currency and date.',
    ],
    id: '55555',
  },
];
