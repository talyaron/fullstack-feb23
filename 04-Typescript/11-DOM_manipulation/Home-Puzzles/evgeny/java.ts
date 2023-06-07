
const input:any = document.querySelector(".input")
 const testdiv:any= document.querySelector(".testdiv")

// console.log(input.value)

   class beer{
    name:string;
    type:string;
    alcVoulume:number;
    country:string;
    constructor(
        name:string,
        type:string,
        alcVoulume:number,
        country:string,){
            this.name=name
            this.type=type
            this.alcVoulume=alcVoulume
            this.country=country
        }
   }

const beers:beer[]=[
    new beer ('carlsberg','pilsner',5.0,'denemark'),
    new beer ('goldstar','lager',4.5,'israel'),
    new beer ('guinness','extra stout',3.9,'irland'),
    new beer ('heineken','lager',4.7,'Netherlands')
]

console.dir(beers)
        
        function showBeer(){

           beers.map(element => {
               if(input.value===element.name){
                   return  testdiv.innerHTML=`
                   <p>name:${element.name}</p>
                   <p>type:${element.type}</p>
                   <p>Alchohol voulume:${element.alcVoulume}</p>
                   <p>country of origin:${element.country}</p>`;
                  }

                try {
                    if(input.value!==element.name) throw new Error ("worng beer selected");
                    if(input.value=null) throw new Error("no input");
                } catch (error) {
                    console.error(error)
                }
           });
            
           
           
            // if(input.value==="goldstar"){
            //     // location.reload() 
            // }
            // if(input.value!=="start"){
            //     testdiv.innerHTML="<h1>no go";
                // testdiv.innerHTML=`<img src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg" alt="">`
            // }
}