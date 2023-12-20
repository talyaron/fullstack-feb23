import React, { useEffect, useState } from 'react'
import { getAllDogs } from './../API/dogAPI';



const Alldogs = () => {
  const [dogArr, SetDogArr] = useState<any[]>()

  const handleGetDog = async () => {
    const data = await getAllDogs()
    SetDogArr(data)


    // if (getData){ 
    //   SetDog(arr)
    // }
  }

  useEffect(() => {
    handleGetDog()
  }, [])
  return (
    <div>

      {dogArr && dogArr.length > 0 && dogArr.map((breed) => { return <div>{JSON.stringify(breed)}</div> })}
    </div>
  )
}

export default Alldogs
