import React, { useState } from "react";
import Header from "./components/Layout/Header";
import ToDoItem from "./components/ToDo/ToDoItem";
import Button from "./components/Layout/Button";
import ToDoForm from "./components/ToDo/ToDoForm";
import useToDoManager from "./hooks/useToDoManager";

const App = () => {
  const { toDos, toggleStatus, handleAddToDo, handleDelete, handleUpdate } =
    useToDoManager();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen items-center bg-blue-100">
      <Header />

      <div>
        <div className="mr-auto mb-4">
          <Button
            name={showForm ? "Cancel" : "Add ToDo"}
            onClick={() => {
              setShowForm(!showForm);
            }}
          ></Button>
        </div>

        <div>{showForm && <ToDoForm onSubmit={handleAddToDo} />}</div>

        <div>
          {toDos.map((toDo) => (
            <ToDoItem
              key={toDo.id}
              id={toDo.id}
              title={toDo.title}
              isDone={toDo.isDone}
              createdAt={toDo.createdAt}
              toggleStatus={toggleStatus}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            ></ToDoItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
