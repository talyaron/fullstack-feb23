import React, { useEffect, useState } from 'react'
import {getAllDogs} from '../API/dogAPI'
const Dog = () => {

    const[dog,SetDog]= useState<string[]>()

    const handleGetDog=async()=>{ 
      const getData=await getAllDogs()
     
      // if (getData){ 
      //   SetDog(arr)
      // }
    }

    useEffect(()=>{
      handleGetDog()
    },[])
  return (
    <div>
      {dog}
    </div>
  )
}

export default Dog
