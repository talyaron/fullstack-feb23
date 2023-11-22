import { useState } from 'react'
import './App.scss'
import ItemGallery from './component/itemGallery'
import products from './data/products'

function App() {
  const [itemsArr, setItemsArr] = useState(products)
 const handleDelete = (ev:any) => {
  const newArr = itemsArr.filter(item => item.id != ev.target.value)
  setItemsArr(newArr)
 }
  return (
    <>
     <ItemGallery items={itemsArr} handleDelete={handleDelete}></ItemGallery>
    </>
  )
}

export default App
