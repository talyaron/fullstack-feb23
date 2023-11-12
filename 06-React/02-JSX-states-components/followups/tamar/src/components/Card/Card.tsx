import React from 'react'
import './card.scss'

const Card = () => {
  return (
    <div className='rupper'>
      <img className='headImg'></img>
      <div className='articleConteiner'>
        <button className=''></button>
        <h1>Article title</h1>
        <p className='articleP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, repudiandae doloribus porro consequuntur reiciendis officiis deserunt vero quaerat quae, possimus culpa quas facilis numquam veritatis expedita perferendis enim sunt amet?</p>
      </div>
      <footer>
        <img className='userImg'></img>
        <h4 className='name'>user name</h4>
        <h4 className='time'>time</h4>
      </footer>
    </div>
  )
}

export default Card
