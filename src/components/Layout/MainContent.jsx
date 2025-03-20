import Button from "./Button";
import ToDoForm from "../ToDo/ToDoForm";
import ToDoList from "../ToDo/ToDoList";
import { useState } from "react";

const MainContent = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Button
        name={showForm ? "Cancel" : "Add Task"}
        onClick={() => {
          setShowForm(!showForm);
        }}
      />
      {showForm && <ToDoForm />}

      <ToDoList />
    </div>
  );
};

export default MainContent;
