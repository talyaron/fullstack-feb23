import { categories } from "../util/categories";

export const categorysColor = (category: string) => {
  const categorysColor = categories.find((c) => c.category === category);
  if (categorysColor === undefined) return;
  return categorysColor.color;
};
