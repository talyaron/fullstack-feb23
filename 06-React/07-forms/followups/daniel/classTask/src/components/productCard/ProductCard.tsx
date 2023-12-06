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
    <Paper elevation={6}
    sx={{display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems: "center",
    padding: 5,
    gap: 3,
    width: "20vw"
    }}>

        <Avatar>{product.title}</Avatar>
        <Typography variant="h5">{product.description}</Typography>
        <Box>
            <Typography>{product.id}</Typography>
            <Typography>{product.price}</Typography>
            <Typography>{product.category}</Typography>
            <Typography>{product.image}</Typography>
            <Typography>{product.rating.count}</Typography>
            <Typography>{product.rating.rate}</Typography>
        </Box>

    </Paper>
  )
}

export default ProductCard

  