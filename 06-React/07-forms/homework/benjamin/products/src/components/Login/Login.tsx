import React, {useState, useEffect , FC} from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Divider } from "@nextui-org/react";

interface LoginProps{
  getUser: (email:string,password:string) => void
}

const Login:FC<LoginProps> = ({getUser}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("")

  const [isVisible, setIsVisible] = React.useState(false);
  const [warningVisible, setWarningVisible] = useState<number | string>(0)
  const toggleVisibility = () => setIsVisible(!isVisible);
  

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if(email && password){
      getUser(email,password)
    }
  
  }


  return (
    <div className=" bg-white w-unit-7xl h-unit-9xl antialiased">
      <p className=" text-gray-400 text-sm font-bold ml-4 p-4">Benjamins App</p>
      <p className="text-3xl text-indigo-500 font-bold ml-8">Login</p>

      <form
        className=" mt-14 ml-8 w-unit-80 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <Input
          isClearable
          type="text"
          variant="bordered"
          color="primary"
          radius="sm"
          placeholder="Email"
          defaultValue="example@gmail.com"
          onClear={() => console.log("input cleared")}
          className="max-w-xs text-gray-950"
          onInput={(ev) => {
            setEmail((ev.target as HTMLInputElement).value)
          }}
        />
        <Input
          variant="bordered"
          placeholder="Password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <FaRegEye className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <FaRegEyeSlash className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs mt-2 text-slate-900"
          onInput={(ev) => {
            setPassword((ev.target as HTMLInputElement).value)
          }}
        />
        <input
          type="submit"
          value="Login"
          className=" rounded-md w-full py-2 mt-3 bg-indigo-500 text-slate-200 font-semibold cursor-pointer"
        />
        <p  className=" mt-2 text-gray-400 font-normal cursor-pointer hover:text-blue-400">
          Forget your password?
        </p>
        <Divider className=" mt-40" />
        <Button
          variant="bordered"
          color="primary"
          fullWidth
          size="lg"
          radius="sm"
          className=" mt-8 font-semibold text-sm"
        >
          Signup
        </Button>
      </form>
    </div>
  );
};

export default Login;
