import React, { useState } from "react";
import Header from "./components/Layout/Header";
import ToDoItem from "./components/ToDo/ToDoItem";
import Button from "./components/Layout/Button";
import ToDoForm from "./components/ToDo/ToDoForm";
import { ToDoProvider } from "./context/ToDoContext";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <ToDoProvider>
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

          <div>{showForm && <ToDoForm />}</div>

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
    </ToDoProvider>
  );
};

export default App;
