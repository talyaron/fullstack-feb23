import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import "./dogPage.scss"

const dogPage = () => {
  const [type , setType] = useState(useParams().type)
  const [imgUrl, setImgUrl] = useState(useLocation().state.imgUrl)
  return (
    <div className='dogPageDiv'>
      <div className="mainDiv">
        <h3>{type}</h3>
        <img src={imgUrl} alt="dog" />
      </div>
      <div className="commentsDiv">
        comments
      </div>
    </div>
  )
}

export default dogPage