import React from 'react'
interface Breed {
    name: string
}
const Search = ({ allBreeds, setAllBreedsToShow }) => {
    const handleSearchInput = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const searchedBreed = allBreeds.filter(breed => breed.name.toLowerCase().includes((ev.target as HTMLInputElement).value))

        console.log(searchedBreed);
        setAllBreedsToShow(searchedBreed);
    }
    return (
        <div>
            <form onInput={handleSearchInput}>
                <input type="search" name="search" id="search" placeholder='search breed' />
            </form>
        </div>
    )
}

export default Search