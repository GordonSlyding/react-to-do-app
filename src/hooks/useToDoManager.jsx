import React from "react";
import { useState } from "react";

const useToDoManager = () => {
  const [toDos, setToDos] = useState([
    { id: 1, title: "React lernen", isDone: false, createdAt: "23.10.29" },
    { id: 2, title: "Angular lernen", isDone: true, createdAt: "13.10.29" },
    { id: 3, title: "Vue lernen", isDone: false, createdAt: "23.10.29" },
  ]);

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
    const selectedToDoIndex = toDos.findIndex((toDo) => toDo.id === id);
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

  return { toDos, toggleStatus, handleAddToDo, handleDelete, handleUpdate };
};

export default useToDoManager;
