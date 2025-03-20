import { createContext, useContext } from "react";

/**
 * ToDoContext - Zentraler Context für die ToDo-Daten und Funktionen
 *
 * Dieser Context stellt das Datenmodell und die Funktionen zur Manipulation
 * der ToDo-Liste für die gesamte Anwendung bereit.
 *
 * Die Defaultwerte sind nur Platzhalter und werden vom Provider überschrieben.
 */
const ToDoContext = createContext({
  toDos: [],
  toggleStatus: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
  handleUpdate: () => {},
});

/**
 * useToDoContext - Custom Hook zum einfachen Zugriff auf den ToDoContext
 *
 * Dieser Hook vereinfacht den Zugriff auf die Context-Daten und
 * ermöglicht eine saubere Verwendung in Funktionskomponenten.
 *
 * Beispiel:
 * const { toDos, handleAdd } = useToDoContext();
 */
export function useToDoContext() {
  return useContext(ToDoContext);
}

export default ToDoContext;
