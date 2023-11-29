import React ,{ FC } from 'react'

interface AnimalCardProps {
    type : string,
    breed : string,
    name : string,
    age : number,
}

const AnimalCard:FC<AnimalCardProps> = ({type,breed,name,age} ) => {
      // Define a mapping of background colors for different animal types
  const backgroundColors: Record<string, string> = {
    dog: 'brown', 
    cat: 'green', 
    parrot: 'orange',
    mongoose: 'red',
    snake: 'purple'
  };

  // Get the background color based on the animal type
  const backgroundColor = backgroundColors[type] || '#ffffff'; // Default to white if type not found
    return (
        <div style={{border: "1px solid blue",
                     borderRadius: "5px",
                     backgroundColor}}>
            <h1>{name}</h1>
            <p>{type}</p>
            <p>Breed: {breed}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export default AnimalCard