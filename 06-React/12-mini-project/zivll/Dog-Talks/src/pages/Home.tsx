import Cards from '../components/Cards'
import Search from '../components/Search'
interface Breed {
    name: string
}
const Home = ({ allBreeds, setAllBreedsToShow, allBreedsToShow }: { allBreeds: Breed[] | undefined, setAllBreedsToShow: React.Dispatch<React.SetStateAction<Breed[]>>, allBreedsToShow: Breed[] }) => {
    return (
        <div>
            {allBreeds ? <Search allBreeds={allBreeds} setAllBreedsToShow={setAllBreedsToShow} /> : <p>nothing here</p>}
            {allBreedsToShow ? <Cards allBreedsToShow={allBreedsToShow} /> : <p>nothing here</p>}
        </div>
    )
}

export default Home