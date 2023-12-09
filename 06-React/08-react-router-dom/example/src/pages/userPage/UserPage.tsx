import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const UserPage = () => {
    const {id} = useParams()

    useEffect(() => {
        console.log(id)
    },[id])
    
  return (
    <div>UserPage</div>
  )
}

export default UserPage