import React, { useState, useEffect, FC } from "react";
import { Avatar, Button, Image } from "@nextui-org/react";
import { TbDots } from "react-icons/tb";
import { HeartIcon } from "./icons/HeartIcon";
import { FaRegComment } from "react-icons/fa6";
import { TiArrowForward } from "react-icons/ti";
import { LuSend } from "react-icons/lu";

interface PostProps {
  firstName: string,
  lastName: string,
  body: string | null
}

const Post: FC<PostProps> = ({firstName, lastName,body}) => {
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
          <Avatar src="data:image/jpeg;base64,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" isBordered className=" ml-4"></Avatar>
          <div className="flex flex-col justify-around">
            <p className=" text-sm font-semibold font-sans text-slate-950">
              {firstName} {lastName}
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
        {body}
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
        <div className=" w-10 h-full mr-4 h-10 bg-white flex flex-col items-center justify-center hover:bg-slate-500 rounded-full transition-all ease-out cursor-pointer">
          <LuSend className="scale-150" style={{ color: "black" }}></LuSend>
        </div>
      </div>
    </div>
  );
};

export default Post;
