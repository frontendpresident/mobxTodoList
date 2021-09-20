import { FC } from "react";
import styled from "styled-components";
import { TaskContainer } from "./components/TaskContainer";
import { InputTask } from "./components/InputTask";
import { FilterOptions } from "./components/FilterOptions";

const ToDoListContainer = styled.div`
  width: 100%;
  padding: 24px 20px;
  border: 1px solid black;
`;

const ToDoTitle = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
  color: white;
  background-color: #8080809e;
`;

const ToDoList: FC = () => {
  return (
    <ToDoListContainer>
      <ToDoTitle>ToDo List</ToDoTitle>
      <TaskContainer />
      <InputTask />
      <FilterOptions />
    </ToDoListContainer>
  );
};

export default ToDoList;
