import { Button } from "antd";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import styled from "styled-components";
import store from "../store/index";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 10px;
  margin-bottom: 5px;
`;

export const FilterOptions: FC = observer(() => (
  <Wrapper>
    <Button onClick={() => store.allTasks()}>All tasks</Button>
    <Button onClick={() => store.filtredCompleted()}>Completed tasks</Button>
    <Button onClick={() => store.filtredUncompleted()}>Uncompleted</Button>
  </Wrapper>
));
