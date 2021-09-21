import { Button, Input } from "antd";
import { FC, useState } from "react";
import store from "../store/index";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  display: block;
  margin: 10px 0;
`;

export const InputTask: FC = observer(() => {
  const [text, setText] = useState<string>("");

  const addTodo = () => {
    if (text !== "") {
      store.addToDo(text);
    }
    setText("");
  };

  return (
    <InputContainer>
      <Input
        placeholder="Add to do"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Button
        style={{ margin: "10px 0" }}
        onClick={addTodo}
        type="primary"
        block
      >
        Add To Do
      </Button>
      <Button
        style={{ margin: "5px 0" }}
        onClick={() => store.removeAll()}
        type="primary"
        block
        danger
      >
        Delete all
      </Button>
    </InputContainer>
  );
});
