import React, { FC } from 'react';
import Item from './Item';
import { Product } from '../data/products';
import { createArrColorByCategory } from '../util/functions';

interface ItemGalleryProps {
  items: Product[];
  handleDelete: (itemId: number) => void;
}

const ItemGallery: FC<ItemGalleryProps> = ({ items, handleDelete }) => {
  const [itemsState, setItemsState] = React.useState(items);
  const colorByCat = createArrColorByCategory(items);

  console.log(itemsState)
    const handleSortByRating = (ev:any)=> {
        const value = ev.target.value;
        let sortedItems = [...items];
    
        switch (value) {
          case "highestRating":
            sortedItems = sortedItems.filter(item => item.rating > 4);
            break;
          case "noSorting":
             sortedItems = items
            setItemsState(sortedItems);
                break;
          break;
          case "byAB":
            sortedItems = sortedItems.sort((a, b) => a.title.localeCompare(b.title));
            break;
          default:
            break;
        }

        setItemsState(sortedItems);
    }
    return (
        <div className='wrapper'>
          <label htmlFor="selectBox">
            sort item by:  
            <select className='selectBox' onChange={handleSortByRating}>
              <option value="noSorting">no sorting</option>
              <option value="highestRating">highest rating</option>
              <option value="byAB">according to A-B</option>
            </select>
          </label>
          <div className='itemGalleryDiv'>
            {itemsState.map(product => {
              return <Item key={product.id} item={product} handleClick={handleDelete} colorCatArr={colorByCat} />;
            })}
          </div>
        </div>
      );
    };
    
    export default ItemGallery;