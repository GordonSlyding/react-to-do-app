import React from "react";
import Header from "./components/Layout/Header";
import ToDoProvider from "./context/ToDoProvider";
import MainContent from "./components/Layout/MainContent";

const App = () => {
  return (
    <ToDoProvider>
      <div className="flex flex-col min-h-screen items-center bg-blue-100">
        <Header />
        <MainContent />
      </div>
    </ToDoProvider>
  );
};

export default App;
