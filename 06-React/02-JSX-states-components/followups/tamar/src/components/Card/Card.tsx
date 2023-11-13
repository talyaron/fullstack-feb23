//import React from 'react'
import './card.scss'

const Card = () => {
  return (
    <div className='rupper'>
      <img className='headImg'></img>
      <div className='articleConteiner'>
        <button className='articleBtn'>topic</button>
        <h3 className='articleH'>Article title</h3>
        <p className='articleP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, repudiandae doloribus porro consequuntur reici</p>
      </div>
      <footer className='articleFooter'>
        <img className='userImg'></img>
        <div className='h5rupper'>
        <h5 className='name'>user name</h5>
        <h5 className='time'>time</h5></div>
      </footer>
    </div>
  )
}

export default Card
