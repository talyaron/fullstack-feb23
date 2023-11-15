const Photo = ()=> {
    return(
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5uJIoxIfq7XlHxA9bXVEWmatNDLdphYIojg&usqp=CAU" alt="image" />
    )
  }
  

  export default Photo


// ---------------------Notes--------------------------
  //Export statement:
  //Default- Export statement:export default function Button() {}	Import statement:import Button from './Button.js';
  //Named-   Export statement:export function Button() {}           Import statement:import { Button } from './Button.js';  

/* When you write a default import, you can put any name you want after import. 
For example, you could write import Banana from './Button.js' instead and it would still provide you with the same default export.
In contrast, with named imports, the name has to match on both sides. That’s why they are called named imports! */