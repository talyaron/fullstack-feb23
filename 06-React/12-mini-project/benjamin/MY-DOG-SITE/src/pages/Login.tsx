import React, { useState } from "react";
import {
  Card,
  Input,
  CardHeader,
  CardBody,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (ev: any) => {
    try {
      ev.preventDefault();
      if (name) {
        console.log(name);
        const response = await fetch("http://localhost:3001/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ username: name }),
        });
        if (response.ok) {
          console.log("Logged in successfully");
          navigate("/homePage");
        } else {
          console.error("Failed to log in");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div className=" h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className=" text-zinc-300 font-extrabold text-8xl mt-8 mb-14 text-center">
          Welcome to the best dogs lover's site{" "}
          <span className=" text-sky-900">out there</span>!
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Card
          shadow="sm"
          radius="lg"
          isHoverable={true}
          isBlurred={true}
          className=" w-96 h-fit"
        >
          <CardHeader>Log in With Your username</CardHeader>
          <CardBody>
            <form onSubmit={handleLogin}>
              {" "}
              <Input
                onInput={(ev) => {
                  setName((ev.target as HTMLInputElement).value);
                }}
                type="text"
                label="Name"
                placeholder="Enter your full name"
              />
              <div>
                <Button className=" mt-2" onPress={onOpen} color="secondary">
                  Why username?
                </Button>
                <Modal
                  backdrop="opaque"
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  radius="2xl"
                  classNames={{
                    body: "py-6",
                    backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                    base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
                    header: "border-b-[1px] border-[#292f46]",
                    footer: "border-t-[1px] border-[#292f46]",
                    closeButton: "hover:bg-white/5 active:bg-white/10",
                  }}
                >
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          What we use the username for?
                        </ModalHeader>
                        <ModalBody>
                          <p>
                            If you ever used this username, you will find your
                            messages and comments by it. <br />
                            if you never used a username, you will login with
                            it.
                          </p>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="foreground"
                            variant="light"
                            onPress={onClose}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
              <Button className=" mt-2" color="secondary" type="submit">
                submit
              </Button>
            </form>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
