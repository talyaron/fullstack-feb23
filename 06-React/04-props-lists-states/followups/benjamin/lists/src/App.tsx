import { useState } from 'react'
import './App.scss'
import { products } from './util/products'
import Button from "react-bootstrap/Button";
import MyCarousel from "./Components/Carousel/Carousel"
import Badge from 'react-bootstrap/Badge';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';


function App() {
  const [productsArr, setProductsArr] = useState<any[]>(products);
  const [warning, setWarning] = useState("")

  const setBGcolor = (category: string) => {
    const colors = {
      smartphones: '#69e769',
      laptops: '#ff7373',
      fragrances: 'lightyellow',
      skincare: '#bb73bb',
      groceries: '#7777d1',
    };
    return colors[category] || 'grey';

  }

  const filterProducts = (num: number) => {
    setProductsArr(products.filter((product) => {
      return product.rating >= num
    }))
  }

  const handleChangeName = (id: number) => {
    const newTitle = prompt("Enter new Title")
    if(newTitle === ""){
      return
    }
    else{
      setProductsArr(productsArr.map(product => {
        if (product.id === id) {
          return { ...product, title: newTitle }
        }
        else {
          return product
        }
      }))
    }
  }

  const handleRemove = (id:number) => {
    setProductsArr(productsArr.filter(product=>{
      return product.id != id
    }))
  }


  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>My Products</h1>
      <ButtonGroup style={{ marginBottom: "20px"}} aria-label="Basic example">
        <Button onClick={() => filterProducts(4.7)} variant="secondary">4.7+ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg></Button>
        <Button onClick={() => filterProducts(4.4)} variant="secondary">4.4+ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg></Button>
        <Button onClick={() => filterProducts(4)} variant="secondary">4+ <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg></Button>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            choose rating
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => filterProducts(4.1)}>4.1</Dropdown.Item>
            <Dropdown.Item onClick={() => filterProducts(4.2)}>4.2</Dropdown.Item>
            <Dropdown.Item onClick={() => filterProducts(4.3)}>4.3</Dropdown.Item>
            <Dropdown.Item onClick={() => filterProducts(4.4)}>4.4</Dropdown.Item>
            <Dropdown.Item onClick={() => filterProducts(4.5)}>4.5</Dropdown.Item>
            <Dropdown.Item onClick={() => filterProducts(4.6)}>4.6</Dropdown.Item>
            <Dropdown.Item onClick={() => filterProducts(4.7)}>4.7</Dropdown.Item>
            <Dropdown.Item onClick={() => filterProducts(4.8)}>4.8</Dropdown.Item>
            <Dropdown.Item onClick={() => filterProducts(4.9)}>4.9</Dropdown.Item>



          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>

      <div className='productsCont'>
        {productsArr.map(product => {
          const bgColor = setBGcolor(product.category)
          return (
            <div style={{ backgroundColor: bgColor }} className='product' key={product.id}>
              <Badge style={{ textAlign: "center" }} bg="warning">
                {product.rating}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </Badge>
              <Badge style={{ textAlign: "center" }} bg="danger">
                -{product.discountPercentage}%
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                </svg>
              </Badge>
              <Badge onClick={() => {handleRemove(product.id)}} style={{ textAlign: "center" }} bg="secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
              </Badge>
              <h4>{product.title}
                <Badge onClick={() => handleChangeName(product.id)} style={{ textAlign: "center" }} bg="primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                </Badge></h4>
                <p>{warning}</p>

              <h5>{product.category}</h5>
              <MyCarousel
                one={product.images[0]}
                two={product.images[1]}
                three={product.images[2]}
                four={product.images[3]}
                five={product.images[4]}
              ></MyCarousel>
              <h3 className='brand'>{product.brand}</h3>
              <p style={{ fontFamily: "monospace", fontStyle: "italic", fontSize: "12px" }}>{product.description}</p>



            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
