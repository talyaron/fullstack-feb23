import React, { useContext, useEffect, useState } from "react";
import { DogContext } from "../context/dogContext";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
const DogPage = () => {
  const { dog } = useContext(DogContext);
  const [img, setImg] = useState();
  const getImage = async () => {
    const response = await fetch(
        `https://dog.ceo/api/breed/${dog.name}/images/random`
      );
      const imageData = await response.json();
      setImg(imageData.message)
  }
  useEffect(() => {
    getImage();
  },[])
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row justify-end items-center gap-40">
      <Card className=" h-fit w-fit">
        <CardHeader> <h1 className=' text-8xl'>{dog.name}</h1></CardHeader>
        <CardBody><img className=" h-2/3 w-full" src={img} alt="" /></CardBody>
      </Card>
      <div className=" w-1/4 h-full bg-white rounded-lg ml-40"></div>
    </div>
  );
};

export default DogPage;
