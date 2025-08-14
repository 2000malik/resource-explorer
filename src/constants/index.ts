export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

export const statusOptions = ["alive", "dead", "unknown"];

export const sortOptions = [
  { value: "asc", label: "Name A → Z" },
  { value: "desc", label: "Name Z → A" },
];