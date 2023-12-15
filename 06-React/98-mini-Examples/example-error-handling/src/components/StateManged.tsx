import { useEffect, useState } from "react";
import SomeErrorScreen from "./SomeErrorScreen";

const StateManged = () => {
  const [hasError, setHasError] = useState(false);

  const handleGetSomething = async () => {
    try {
      // do something like fetching some data
      throw new Error("error"); // this will get you to the "catch" section.
    } catch (error) {
      console.error(error);
      setHasError(true); // notice the changed state.
    }
  };

  useEffect(() => {
    handleGetSomething();
  }, []);

  if (hasError) return <SomeErrorScreen />; // you can pass the error to show it on screen.
  //this will result in a diffrent component entirely if there is an error.
  return <div> render the data you fetched here</div>;
};

export default StateManged;
