// import { useReducer } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Link,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const Board = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Board</h1>
      <UnorderedList>
        <ListItem>
          <Link as={LinkRouter} to="/1">
            Card 1
          </Link>
        </ListItem>
        <ListItem>
          <Link as={LinkRouter} to="/2">
            Card 2
          </Link>
        </ListItem>
        <ListItem>
          <Link as={LinkRouter} to="/3">
            Card 3
          </Link>
        </ListItem>
        <ListItem>
          <Link as={LinkRouter} to="/4">
            Card 4
          </Link>
        </ListItem>
        <ListItem>
          <Link as={LinkRouter} to="/new">
            Card 5
          </Link>
        </ListItem>
      </UnorderedList>
      <Button colorScheme="blue" onClick={() => navigate("/new")}>
        New
      </Button>
    </div>
  );
};

export default Board;
