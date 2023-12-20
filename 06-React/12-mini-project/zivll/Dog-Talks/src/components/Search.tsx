import React from 'react'
interface Breed {
    name: string
}
const Search = ({ allBreeds, setAllBreedsToShow }: { allBreeds: Breed[] | undefined, setAllBreedsToShow: React.Dispatch<React.SetStateAction<Breed[]>> }) => {
    const handleSearchInput = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (allBreeds === undefined) throw new Error("get method not implemented")
        const searchedBreed = allBreeds.filter(breed => breed.name.toLowerCase().includes((ev.target as HTMLInputElement).value))

        console.log(searchedBreed);
        setAllBreedsToShow(searchedBreed);
    }
    return (
        <div>
            <form onInput={handleSearchInput} className='search-bar'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="search-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                <input type="search" name="search" id="search" placeholder='What are you looking for?' />
            </form>
        </div>
    )
}

export default Search