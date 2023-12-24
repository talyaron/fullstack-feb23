import { FC, useEffect, useState } from "react";
import getDog from "../../api/dogApi";
import Card from "../../components/card/Card";
import { Box, Grid } from "@mui/material";

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
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={4}>
                    {BreedList.map((breedName) => (
                        <Card key={breedName} breedName={breedName} />
                    ))}
                </Grid>
            </Box>
            {/* {dog && dog.length > 0 && dog.map((breed)=> {return <>{JSON.stringify(breed)}</>})} */}
        </>
    )
}

export default DogsGallery