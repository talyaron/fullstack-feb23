// FilteredStore.tsx
import React from "react";
import { StoreItem } from "./StoreItem";

type FilteredStoreProps = {
  items: StoreItemProps[];
};

export function FilteredStore({ items }: FilteredStoreProps) {
  // Filter the items based on the highest rating
  const highestRatedItems = items.filter((item) => item.rating === Math.max(...items.map((item) => item.rating)));

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {highestRatedItems.map((item) => (
        <StoreItem key={item.id} {...item} />
      ))}
    </div>
  );
}
