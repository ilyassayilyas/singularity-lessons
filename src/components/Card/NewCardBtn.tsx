import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NewCardBtns = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/")} colorScheme="blue">
        Cancel
      </Button>
      <Button onClick={() => navigate("/1")} colorScheme="blue">
        Submit
      </Button>
    </div>
  );
};

export default NewCardBtns;
