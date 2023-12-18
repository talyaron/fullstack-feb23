import Card from './Card'
interface Breed {
    name: string
}
const Cards = ({ allBreedsToShow }: { allBreedsToShow: Breed[] | undefined }) => {
    return (
        <div className='cards'>
            {allBreedsToShow ? allBreedsToShow.map((breed: Breed) => { return (<Card key={breed.name} title={breed.name} />) }) : <p>nothing here</p>}
        </div>
    )
}

export default Cards