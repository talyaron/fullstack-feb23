import { FC, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import getDog from "../api/dogApi";
import CardProp from "../components/card/Card";

const BreedList = ["affenpinscher", "akita", "beagle", "boxer", "chihuahua", "dachshund", "husky", "pug"];


const DogsGallery: FC = () => {
    const [dog, setDog] = useState<String[]>()

    const handleGetDog = async () => {
        try {
            const getData = await getDog()

            if (getData) {
                setDog(getData)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handleGetDog()
    }, [])

    return (
        <>
            <Box >
                <Grid container rowSpacing={4} columnSpacing={{ md: 5 }} columns={4}>
                    {BreedList.map((breedName) => (
                        <CardProp key={breedName} breedName={breedName} />
                    ))}
                </Grid>
            </Box>
            {/* {dog && dog.length > 0 && dog.map((breed)=> {return <>{JSON.stringify(breed)}</>})} */}
        </>
    )
}

export default DogsGallery