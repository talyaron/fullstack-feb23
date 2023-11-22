import React, { FC } from 'react'
import products from '../data/products'
import {getRandomPastelColor} from '../util/functions'


interface ItemProps{
    item:{
        id: number;
        title: string;
        description: string;
        price: number;
        rating: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
    }
    // backgroundColor: ()=>string;
    handleClick : (ev:any)=> void;
    colorCatArr:{category:string, randomColor:string}[]
}



const Item:FC<ItemProps> = ({item , handleClick, colorCatArr}) => {

    const getColorByCategory=()=>{
        const color = colorCatArr.find(cat => cat.category === item.category)?.randomColor;
        return color;
    }
    
    
  return (
    <div className='itemDiv' style={{backgroundColor: getColorByCategory()}}>
        <img src={item.images[0]}></img>
        <div className='titleAndPrice'>
            <h3 className='title'>{item.title}</h3>
            <p className='price'>{item.price}$</p>   
        </div>
        <p className='description'>{item.description}</p>
        <div className="rating"> <p className="rating" style={{fontSize:"12px"}}>User rating: {item.rating}</p></div>

        <button onClick={handleClick} value={item.id}>Delete</button>
    </div>
    )
}

export default Item