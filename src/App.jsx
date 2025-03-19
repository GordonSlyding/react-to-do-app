import React, { useState, useEffect } from "react";
import Header from "./components/Layout/Header";
import ToDoItem from "./components/ToDo/ToDoItem";
import Button from "./components/Layout/Button";
import ToDoForm from "./components/ToDo/ToDoForm";

const App = () => {
  // States
  const [toDos, setToDos] = useState([
    { id: 1, title: "React lernen", isDone: false, createdAt: "23.10.29" },
    { id: 2, title: "Angular lernen", isDone: true, createdAt: "13.10.29" },
    { id: 3, title: "Vue lernen", isDone: false, createdAt: "23.10.29" },
  ]);

  const [showForm, setShowForm] = useState(false);

  const toggleStatus = (id) => {
    // Um Änderung am Array State zu machen, muss man das über den Setter machen und diese erwartet eine neue Version des Arrays um Immutibilität zu bewahren

    setToDos((oldToDos) =>
      oldToDos.map((toDo) => {
        return toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : toDo;
      })
    );
  };

  const handleAddToDo = (title) => {
    const date = new Date();

    const currentTimeDate = date.toLocaleString();

    const newId = Math.max(...toDos.map((toDo) => toDo.id)) + 1;
    const newToDo = {
      id: newId,
      title: title,
      isDone: false,
      createdAt: currentTimeDate,
    };

    // Ersetze altes arrays durch ein neues aktualisiertes
    setToDos([...toDos, newToDo]);
  };

  const handleDelete = (id) => {
    setToDos((oldToDos) => oldToDos.filter((todo) => todo.id !== id));
  };

  const handleUpdate = (id, newTitle) => {
    const selectedToDoIndex = toDos.findIndex((toDo) => toDo.id == id);
    const newToDo = {
      ...toDos[selectedToDoIndex],
      title: newTitle,
    };

    setToDos((oldToDos) =>
      oldToDos.map((oldToDo, index) =>
        index == selectedToDoIndex ? newToDo : oldToDo
      )
    );
  };

  useEffect(() => {
    console.log(
      "Aktualisierte ToDos:",
      toDos.map((todo) => {
        return todo.title + "| isDone: " + todo.isDone;
      })
    );
  }, [toDos]); // Läuft bei jeder Änderung von toDos

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
