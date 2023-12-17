import { useEffect, useState } from "react";

const useRatings = (ratings: number) => {
  const [state, setstate] = useState<string[]>();

  const handleCalcRatings = () => {
    if (ratings >= 0 && ratings < 1) {
      setstate(["star_half"]);
    } else if (ratings > 1 && ratings < 1.5) {
      setstate(["star"]);
    } else if (ratings > 1.5 && ratings < 2) {
      setstate(["star", "star_half"]);
    } else if (ratings > 2 && ratings < 2.5) {
      setstate(["star", "star"]);
    } else if (ratings > 2.5 && ratings < 3) {
      setstate(["star", "star", "star_half"]);
    } else if (ratings > 3 && ratings < 3.5) {
      setstate(["star", "star", "star"]);
    } else if (ratings > 3.5 && ratings < 4) {
      setstate(["star", "star", "star", "star_half"]);
    } else if (ratings > 4 && ratings < 4.5) {
      setstate(["star", "star", "star", "star"]);
    } else if (ratings > 4.5 && ratings < 5) {
      setstate(["star", "star", "star", "star", "star_half"]);
    } else {
      setstate(["star", "star", "star", "star", "star"]);
    }
  };
  useEffect(() => {
    handleCalcRatings();
  }, []);

  return { state };
};

export default useRatings;
