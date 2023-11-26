import React, { FC } from 'react'

interface NavbarProps {

    navName: string;
}

const Navbar: FC<NavbarProps> = ({ navName }) => {
    return (
        <div>
            <h1>{navName}</h1>
        </div>
    )
}

export default Navbar
