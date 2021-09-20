import { CloseCircleOutlined } from "@ant-design/icons";
import { FC } from "react";
import { Task } from "./Task";
import store, { ToDoType } from "../store/index";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

const WrapperTask = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 10px;
  margin-bottom: 5px;
`;

export const TaskContainer: FC = observer(() => {
  const filterTasks = (): ToDoType[] => {
    if (store.filter === "all") {
      return store.todos;
    } else {
      return store.filtredTodos;
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {filterTasks().map((todo) => {
        return (
          <WrapperTask
            style={{ background: todo.isComplete ? "#1dd41d63" : "white" }}
            key={todo.id}
            onClick={() => store.completedToDo(todo.id)}
          >
            <Task>{todo.todo}</Task>
            <CloseCircleOutlined
              style={{ color: "red" }}
              onClick={() => store.removeToDo(todo.id)}
            />
          </WrapperTask>
        );
      })}
    </div>
  );
});
