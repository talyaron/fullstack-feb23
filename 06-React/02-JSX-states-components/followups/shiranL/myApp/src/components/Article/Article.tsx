import React from 'react'

const Article = () => {
    const reactLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
  return (
    <>
       <section>
        <div className='square' style={ {background:'black', height:'500px', width:'500px', color:'white'}} >
          <div className='logo'>
            <img id='myLogo' src={reactLogo} alt='react logo' />
          </div>
          <div className='heder'>
            <p>React</p>
          </div>
          <div className='text'>
            <p>React is a free and open-source front-end JavaScript library for building user interfaces or UI components.</p>
          </div>
        </div>
       
      </section>
    </>
  )
}

export default Article
