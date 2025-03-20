import { createContext } from "react";
import useToDoManager from "../hooks/useToDoManager";
import { useContext } from "react";

/**
 * Erklärung/ Plan:
 *  Wir wollen eine Wrapper Komponente, die uns erlaubt,
 *  Daten und Funktionen über alle beinhaltenen Kinder-Komponente darauf Zugriff zu geben.
 *  Das hat den Vorteil, das Prop-Drilling vermieden wird, Props allgemein in den Komponenten auf
 *  das Wichtigste reduziert wird und außerdem wird der Code im Allgemeinen klarer und cleaner
 *
 *  1: Dazu benötigen wir ein React-Hook namens: useContext(), der das Bereitstellen aller Daten und Funktionen
 *  ermöglicht. Um das zu benutzen, müssen wir ein Context überhaupt erst erstellen. Dieser nimmt als Parameter
 *  Standartwerte UND Funktionen als Properties aber diese wollen wir durch den Manager zur Verfügung stellen,
 *  deshalb sind sie zunächst leer. Da wir nicht ein Hook nicht im Äüßersten Scope definieren können als Abhängigkeit
 *  benötigt man eine Wrapper Komponente
 *
 *  2: Nun erstellen wir den Wrapper, der als eigentliche Komponente später genutzt wird.
 *  Wir nutzen als erstes den custome Hook toDoManager und geben seine benötigte Funktion im
 *  Provider des ToDo-Contexts als Value für die Property.
 *
 *  3: Zuletzt exportieren wir alles
 *
 *  Mögliche Implementierung:
 * 
*      // in der App.jsx:
*      import { ToDoProvider } from './context/ToDoContext';

      const App = () => {
        return (
          <ToDoProvider>
            {hier andere Komponenten}
            </ToDoProvider>
          );
        }


*    // In einer Komponente (z.B. ToDoEdit.jsx)

    const ToDoEdit = ({  andere Props  }) => {
      const { handleUpdate } = useContext(ToDoContext);
      
      // Jetzt kannst du handleUpdate direkt verwenden
      // ...
    }
 */

// 1. Definiere den ToDoContext mit einem Standardwert
const ToDoContext = createContext({
  toDos: [],
  toggleStatus: () => {},
  handleAddToDo: () => {},
  handleDeleteToDo: () => {},
  handleUpdate: () => {},
});

// 2. Erstelle die Wrapper-Provider-Komponente, die den ToDoContext bereitstellt
export const ToDoProvider = ({ children }) => {
  // Hier die Custom Hook verwenden wichtig!!! (Grund überhaupt für den Wrapper)
  const toDoManager = useToDoManager();

  return (
    <ToDoContext.Provider
      value={{
        toDos: toDoManager.toDos,
        toggleStatus: toDoManager.toggleStatus,
        handleAdd: toDoManager.handleAddToDo,
        handleDelete: toDoManager.handleDelete,
        handleUpdate: toDoManager.handleUpdate,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

// 2.5. Zusatz: useToDoContext => erspart 1 Import und ist noch cleaner:
export const useToDoContext = () => {
  return useContext(ToDoContext);
};

// 3. Exportiere den ToDoContext für die Verwendung in anderen Komponenten
export default ToDoContext;
