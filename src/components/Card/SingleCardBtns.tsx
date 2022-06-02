import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SingleCardBtns = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/")} colorScheme="blue">
        Delete
      </Button>
      <Button colorScheme="blue">Save</Button>
    </div>
  );
};

export default SingleCardBtns;
