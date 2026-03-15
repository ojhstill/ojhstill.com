/**
 * Edit these entries to update the "Currently" status widget.
 * The widget cycles through all items automatically.
 */

export interface CurrentlyItem {
  category: 'working' | 'reading' | 'listening';
  label: string;
  value: string;
}

export const currentlyItems: CurrentlyItem[] = [
  { category: 'working', label: 'Building', value: 'Membership platforms at Wattle' },
  { category: 'reading', label: 'Reading', value: "Could Should Might Don't by Nick Foster" },
  { category: 'listening', label: 'Listening to', value: 'James Blake - Trying Times' },
];
