import React from 'react'
import { FC } from 'react';

interface User{
    id: number
    name: string
    username: string
    email: string
    phone: string
    website: string
    age: number

}



const userCard: FC<User>= ({id,name,username,email,phone,website,age}) => {
  return (
    <div>
      <p>
        id:{id}
      </p>
      <p>
        age:{age}

      </p>
      <p>
        phone:{phone}

      </p>
      <p>
        website:{website}

      </p>
      <p>
        username:{username}
      </p>
      <p>
        email:{email}
      </p>
      <p>
        name:{name}
      </p>
    </div>
  )
}

export default userCard
