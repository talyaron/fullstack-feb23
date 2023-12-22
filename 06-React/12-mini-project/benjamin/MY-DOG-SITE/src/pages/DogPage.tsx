import React, { useContext, useEffect, useState } from "react";
import { DogContext } from "../context/dogContext";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import io from "socket.io-client";
import { motion } from "framer-motion";

const DogPage = () => {
  const { dog } = useContext(DogContext);
  const [img, setImg] = useState();
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [user, setUser] = useState<string>("");

  const getUserFromCookie = async () => {
    try {
      console.log("getting your name");
      const response = await fetch("http://localhost:3001/getUsername", { credentials: 'include' });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const {username} = data
      setUser(username);
    } catch (error) {
      console.error("Error during fetching username:", error);
    }
};

  useEffect(() => {
    getUserFromCookie();
  }, []);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  const getImage = async () => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${dog.name}/images/random`
    );
    const imageData = await response.json();
    setImg(imageData.message);
  };
  useEffect(() => {
    getImage();
  }, []);

  useEffect(() => {
    const newSocket = io("http://localhost:3001");
    setSocket(newSocket);
    newSocket.on("received message", (message) => {
      if (message.name === dog.name) {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    });

    return () => {
      newSocket.disconnect();
    };
  }, [dog.name]); // Add dog.name as a dependency

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputElement = document.getElementById("input") as HTMLInputElement;
    if (socket && inputElement && inputElement.value) {
      const message = {
        name: dog.name,
        text: inputElement.value,
      };
      socket.emit("chat message", message);
      console.log("Message sent:", message);
      setMessages((prevMessages) => [...prevMessages, message]);
      inputElement.value = "";
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row justify-end items-center gap-40">
      <Card className=" h-fit w-fit">
        <CardHeader>
          {" "}
          <h1 className=" text-8xl">{dog.name}</h1>
        </CardHeader>
        <CardBody>
          <img className=" h-2/3 w-full" src={img} alt="" />
        </CardBody>
      </Card>
      <div className=" w-1/4 h-full bg-white rounded-lg ml-40">
        <ul id="messages"></ul>
        <form id="form" onSubmit={handleSubmit}>
          <input id="input" />
          <button type="submit">Send</button>
        </form>
        <ul>
          {messages.map((message, index) => (
            <motion.div
              key={index} // Moved the key prop here
              variants={{
                initial: { opacity: 0, y: 200 },
                view: { opacity: 1, y: 0 },
              }}
              initial="initial"
              whileInView="view"
            >
              <Card className=" text-2xl">
                <p className=" text-sm text-green-500">{user}</p>
                <li>{message.text}</li>
              </Card>
            </motion.div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DogPage;
