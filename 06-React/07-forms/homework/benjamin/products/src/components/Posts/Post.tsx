import React, { useState, useEffect } from "react";
import { Avatar, Button, Image } from "@nextui-org/react";
import { TbDots } from "react-icons/tb";
import { HeartIcon } from "./icons/HeartIcon";
import { FaRegComment } from "react-icons/fa6";
import { TiArrowForward } from "react-icons/ti";
import { LuSend } from "react-icons/lu";


const Post = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(45);
  useEffect(() => {
    checkNum();
  }, [liked]);

  const checkNum = () => {
    if (liked) {
      setLikes(46);
    } else {
      setLikes(45);
    }
  };

  return (
    <div className="flex flex-col bg-white w-unit-9xl h-unit-9xl rounded-sm shadow-sm items-center justify-between">
      <div className=" flex flex-row w-full h-20 justify-between items-center">
        <div className="flex flex-row w-40 h-full justify-around items-center">
          {/* TODO: give avatar src */}
          <Avatar isBordered className=" ml-1"></Avatar>
          <div className="flex flex-col justify-around">
            <p className=" text-sm font-semibold font-sans text-slate-950">
              Alan Patterson
            </p>
            <p className=" text-gray-600 font-light text-xs">2 hours ago</p>
          </div>
        </div>
        <TbDots
          className=" cursor-pointer"
          size="20px"
          style={{ color: "black", margin: "20px" }}
        ></TbDots>
      </div>
      <p className=" text-gray-950 font-sans ml-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa officiis
        voluptate adipisci vitae perferendis. Vel tenetur voluptates nam
        praesentium voluptate maiores earum, quos omnis perspiciatis voluptatem
        repellat distinctio odit quasi!
      </p>
      <Image
        className=" mt-2 max-h-96 w-full"
        isZoomed
        alt="NextUI Fruit Image with Zoom"
        src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
      />
      <div className="w-full h-12 flex flex-row justify-between ">
        <div className=" h-full w-44 flex flex-row items-center justify-around gap-0">
          <div className=" flex flex-row items-center">
            <Button
              isIconOnly
              radius="full"
              variant="light"
              onPress={() => setLiked((v) => !v)}
            >
              <HeartIcon
                className={liked ? "[&>path]:stroke-transparent" : ""}
                fill={liked ? "red" : "none"}
              />
            </Button>
            <p className=" text-gray-700">{likes}</p>
          </div>
          <div className=" flex flex-row m-0 items-center">
            <FaRegComment
              className=" mr-2 scale-150 hover:bg-blue-400 transition-all ease-in-out cursor-pointer"
              style={{ color: "black" }}
            ></FaRegComment>
            <p className=" text-gray-700">16</p>
          </div>

          <TiArrowForward
            className="scale-150 cursor-pointer"
            style={{ color: "black" }}
          ></TiArrowForward>
        </div>
        <div className=" w-14 h-full bg-white flex flex-col items-center justify-center hover:bg-slate-500 rounded-full transition-all ease-out cursor-pointer">
          <LuSend className="scale-150" style={{color:"black"}}></LuSend>
        </div>
      </div>
    </div>
  );
};

export default Post;
