import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { FC } from "react"


interface CardProps {
  imgSrc: string,
  alt: string,
  breedName: string,
  paragraph: string
}


const DogCard: FC<CardProps> = ({ imgSrc, alt, breedName, paragraph }) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imgSrc}
        title={alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {breedName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {paragraph}
        </Typography>
      </CardContent>

    </Card>
    // <>
    // <img src={imgSrc} alt={alt} />
    // <h1>{breedName}</h1>
    // <p>{paragraph}</p>    
    // </>
  )
}

export default DogCard