// create a animal card component, animal should have type (cat, dog etc), name and age, color the background of the component by the type of the animal (cat = purple, dog = blue, etc);

import React,{FC} from 'react'


interface AnimalCardProps {
    type?: string;
    name?: string;
    age?: number;
    backgroundColor: string;
    borderRadius: string;
    children?: React.ReactNode
}

const AnimalCard:FC <AnimalCardProps> = ({type, name, age , backgroundColor, borderRadius, children}) => {
  return (
    <div style={{backgroundColor, borderRadius }}>
    <p>{type}</p>
    <p>{name}</p>
    <p>{age}</p>
    {children ? children : <p>no children</p>}
    </div>
  )
}

export default AnimalCard