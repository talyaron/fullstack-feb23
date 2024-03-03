import React from 'react'

const Recipe = () => {
  return (
    <div style={{ borderRadius: "15px", width: "250px", height: "380px", backgroundColor: "white" }}>
      <div style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjMqyOb1GaxR3m28jh8NNrTNEbhIYfKwTAw&usqp=CAU')", width: "250px", height: "150px", borderRadius: "15px 15px 0px 0px" }}></div>
      <p style={{ color: "white", backgroundImage: "linear-gradient(#FDF4E6, #E29F40)", border: "none", marginLeft: "20px", width: "35px", height: "17px", borderRadius: "10px", fontSize: "10px" }}>Food</p>
      <h3 style={{ color: "black", textAlign: "left", marginLeft: "20px" }}>Deliciuos Food</h3>
      <p style={{ color: "black", textAlign: "left", marginLeft: "20px", fontSize: "12px", marginTop: "-10px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, omnis tempore maiores aperiam ad dignissimos culpa!</p>
      <div style={{ display: "flex", height: "40px", marginTop: "40px" }}>
        <div style={{ borderRadius: "50%", width: "40px", height: "40px", backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPqHCJLQImJFX42yUCQDV60g0xwOt1lAbK9A&usqp=CAU')", backgroundSize: "cover", marginLeft: "20px", backgroundPosition: "center" }}></div>
        <div style={{ height: "40px", marginLeft: "5px" }}>
          <p style={{ color: "black", fontSize: "10px", fontWeight: "bold", marginTop: "5px", marginBottom: "0px" }}>Jone Due</p>
          <p style={{ color: "gray", fontSize: "10px", marginTop: "0px" }}>Yesterday</p>
        </div>
      </div>
    </div>
  )
}

export default Recipe