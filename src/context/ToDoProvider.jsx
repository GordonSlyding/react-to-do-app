import React from "react";
import ToDoContext from "./ToDoContext"; // Importiere den Context aus der neuen Datei
import useToDoManager from "../hooks/useToDoManager";

/**
 * ToDoProvider - Provider-Komponente für den ToDoContext
 *
 * Diese Komponente bindet den useToDoManager-Hook an den ToDoContext und
 * stellt die Daten und Funktionen allen Kind-Komponenten zur Verfügung.
 *
 * Der ToDoProvider sollte die gesamte Anwendung oder den relevanten
 * Teil der Komponentenhierarchie umschließen.
 *
 * Beispiel:
 * <ToDoProvider>
 *   <App />
 * </ToDoProvider>
 */

const ToDoProvider = ({ children }) => {
  //   // Der useToDoManager-Hook enthält die gesamte Logik zur Verwaltung der ToDos
  const toDoManager = useToDoManager();

  return (
    <ToDoContext.Provider
      value={{
        toDos: toDoManager.toDos,
        toggleStatus: toDoManager.toggleStatus,
        handleAdd: toDoManager.handleAdd,
        handleDelete: toDoManager.handleDelete,
        handleUpdate: toDoManager.handleUpdate,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
