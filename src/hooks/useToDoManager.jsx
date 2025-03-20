import { useEffect, useState } from "react";

const useToDoManager = () => {
  // Initialisiere state direkt mit Daten aus localStorage oder Standardwerten
  const [toDos, setToDos] = useState(() => {
    console.log("Lazy Initialization: Versuche Daten zu laden");
    const storedData = localStorage.getItem("myToDos");

    if (storedData) {
      console.log("Gefundene Daten:", storedData);
      return JSON.parse(storedData);
    }

    // Standardwerte als Fallback
    console.log("Verwende Standardwerte");
    return [
      { id: 1, title: "React lernen", isDone: false, createdAt: "23.10.29" },
      { id: 2, title: "Angular lernen", isDone: true, createdAt: "13.10.29" },
      { id: 3, title: "Vue lernen", isDone: false, createdAt: "23.10.29" },
    ];
  });

  // Speichere bei Änderungen an toDos
  useEffect(() => {
    localStorage.setItem("myToDos", JSON.stringify(toDos));
  }, [toDos]);

  const toggleStatus = (id) => {
    // Änderungen am Array-State müssen über den zugehörigen Setter vorgenommen werden.
    // Dieser erwartet eine neue Version des Arrays, um die Immutabilität zu gewährleisten.
    setToDos((oldToDos) =>
      oldToDos.map((toDo) => {
        return toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : toDo;
      })
    );
  };

  const handleAdd = (title) => {
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

  return {
    toDos,
    toggleStatus,
    handleAdd,
    handleDelete,
    handleUpdate,
  };
};

export default useToDoManager;
