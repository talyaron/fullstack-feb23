import { FC, useEffect, useState } from "react";
import { getBreedImage } from "../../api/dogApi";
import DogCard from "./DogCard";
import { Box, Grid, Paper, styled } from "@mui/material";

interface CardProps {
    breedName: string;
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));


const Card: FC<CardProps> = ({ breedName }) => {
    const [imgSrc, setImgSrc] = useState<string>("");
    const [paragraph, setParagraph] = useState<string>("");


    const handleGetImg = async () => {
        try {
            const data = await getBreedImage(breedName);
            const breedImage = data.message;
            setImgSrc(breedImage);
            setParagraph(randomParagraph)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handleGetImg()
    }, [breedName])

    const randomParagraph = () => {
        const loremVariations = [
            "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid!",
            "Lorem ipsum dolor sit amet consectetur.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ];

        const seed = breedName.charCodeAt(0) + breedName.charCodeAt(breedName.length - 1);
        const randomIndex = seed % loremVariations.length
        return loremVariations[randomIndex];
    };

    return (
        <>
            <Grid item xs={1} >
                <Item>
                    <DogCard imgSrc={imgSrc} alt={breedName} breedName={breedName} paragraph={paragraph} />
                </Item>
            </Grid>

        </>
    )
}

export default Card