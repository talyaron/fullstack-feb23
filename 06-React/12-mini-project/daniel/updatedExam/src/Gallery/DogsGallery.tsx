import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import getDog from "../api/dogApi";
import CardProp from "../components/card/Card";
import TopBar from "../components/appBar/TopBar";
import SearchBtn from "../components/search/SearchBtn";

const BreedList = ["affenpinscher", "akita", "beagle", "boxer", "chihuahua", "dachshund", "husky", "pug"];


const DogsGallery = () => {
    const [dog, setDog] = useState<string[]>();
    const [searchTerm, setSearchTerm] = useState<string>("")

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

    const filteredBreedList = BreedList.filter((breed)=>
    breed.toLowerCase().startsWith(searchTerm.toLowerCase()));

    return (
        <>
        <TopBar />
        <SearchBtn setSearchTerm={setSearchTerm} />
            <Box >
                <Grid container rowSpacing={4} columnSpacing={{ md: 5 }} columns={4}>
                    {filteredBreedList.map((breedName) => (
                        <CardProp key={breedName} breedName={breedName} />
                    ))}
                </Grid>
            </Box>
            {/* {dog && dog.length > 0 && dog.map((breed)=> {return <>{JSON.stringify(breed)}</>})} */}
        </>
    )
}

export default DogsGallery