import React, { useState } from "react";
import Header from "./components/Layout/Header";
import ToDoItem from "./components/ToDo/ToDoItem";
import Button from "./components/Layout/Button";
import ToDoForm from "./components/ToDo/ToDoForm";
import { ToDoProvider } from "./context/ToDoContext";
import ToDoList from "./components/ToDo/ToDoList";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <ToDoProvider>
      <div className="flex flex-col min-h-screen items-center bg-blue-100">
        <Header />

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
      </div>
    </ToDoProvider>
  );
};

export default App;
