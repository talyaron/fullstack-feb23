import React from 'react'
import Search from '../components/Search'
import Cards from '../components/Cards'

const Home = ({ allBreeds, setAllBreedsToShow, allBreedsToShow }) => {
    return (
        <div>
            {allBreeds ? <Search allBreeds={allBreeds} setAllBreedsToShow={setAllBreedsToShow} /> : <p>nothing here</p>}
            {allBreedsToShow ? <Cards allBreedsToShow={allBreedsToShow} /> : <p>nothing here</p>}
        </div>
    )
}

export default Home