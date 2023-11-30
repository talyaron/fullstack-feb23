import { FC } from "react";

interface NavbarProp {
  name: string;
}

const Navbar:FC<NavbarProp> = ({name}) => {
  return (
    <div>hello {name}</div>
  )
}

export default Navbar
