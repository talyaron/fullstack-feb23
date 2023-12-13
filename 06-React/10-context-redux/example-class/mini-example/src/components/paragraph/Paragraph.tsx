import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

const Paragraph = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <p>hello from Paragraph {user ? user.name :  null}</p>
    </div>
  );
};

export default Paragraph;
