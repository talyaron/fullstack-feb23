import { FC } from "react"
import { Paper, Typography, Box, Avatar } from "@mui/material";

export interface ProductType {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number}
}


export interface ProductCardPorps {
    product:ProductType
}



const ProductCard:FC<ProductCardPorps> = ({product}) => {
  return (
    <Paper  elevation={23}
    sx={{display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems: "center",
    padding: 5,
    gap: 4,
    width: "50vw",
    height: "60vh",
    marginBottom: "20px"
    }}>

            <Avatar sx={{width: '110px', height: '130px', backgroundColor:'white'}}><img src={product.image} alt={product.title} /></Avatar>
        <Typography variant="h6"><span>Title</span>: {product.title}</Typography>
        <Box sx={{gap:15}}>
            <Typography><span>ID</span>: {product.id}</Typography>
            <Typography><span>Price</span>: {product.price}</Typography>
            <Typography><span>Category</span>: {product.category}</Typography>
            <Typography><span>Rating.count</span>: {product.rating.count}</Typography>
            <Typography><span>Rating.rate</span>: {product.rating.rate}</Typography>
            <Typography><span>Description</span>: {product.description}</Typography>
        </Box>

    </Paper>
  )
}

export default ProductCard

  