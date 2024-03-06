import { FC } from 'react'

interface NavbarProps {
    header: string
}

const Navbar: FC<NavbarProps> = ({ header }) => {
    return (
        <div>
            <h2 style={{ backgroundColor: "ThreeDFace", borderRadius: "0px 0px 10px 10px" }}>{header}</h2>
        </div>
    )
}

export default Navbar