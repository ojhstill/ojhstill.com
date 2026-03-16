export interface CurrentlyItem {
  category: 'working' | 'reading' | 'listening';
  label: string;
  value: string;
}

export const currentlyItems: CurrentlyItem[] = [
  {
    category: 'working',
    label: 'Building',
    value:
      import.meta.env.VITE_CURRENTLY_WORKING ??
      'Membership platforms at Wattle',
  },
  {
    category: 'reading',
    label: 'Reading',
    value:
      import.meta.env.VITE_CURRENTLY_READING ??
      "Could Should Might Don't by Nick Foster",
  },
  {
    category: 'listening',
    label: 'Listening to',
    value:
      import.meta.env.VITE_CURRENTLY_LISTENING ?? 'James Blake - Trying Times',
  },
];
