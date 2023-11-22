import React , {FC, useState} from 'react'
import Item from './Item'
import products, { Product } from '../data/products'
import { createArrColorByCategory } from '../util/functions'

interface ItemGalleryProps {
items:Product[]
handleDelete:(ev:any)=>void
}


const ItemGallery:FC<ItemGalleryProps> = ({items , handleDelete}) => {
    const [itemsState , setItemsState] = useState(items)
    const colorByCat =  createArrColorByCategory(items)

    const handleSortByRating = (ev:any)=> {
        switch (ev.target.value) {
            case "highestRating":
                const sortItemsArr = itemsState.filter(item => item.rating > 4)
                setItemsState(sortItemsArr)
                break;

        case "noSorting":
            const originalArray = items
            setItemsState(originalArray)
                break;

        case "byAB":
            const sortItemsArrByAB = products.sort((a, b) => a.title.localeCompare(b.title));
            setItemsState(sortItemsArrByAB)
                break;

            default:
                break;
        }
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
            {itemsState.map(product =>{
                return <Item item={product} handleClick={handleDelete} colorCatArr={colorByCat}/>
            })}
        </div>
            </div>
    )
}

export default ItemGallery