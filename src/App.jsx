import React from "react";
import H from "module";
import Header from "./components/Layout/Header";
import ToDoItem from "./components/ToDo/ToDoItem";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen items-center bg-blue-100">
      <Header />
      <ToDoItem></ToDoItem>
    </div>
  );
};

export default App;
