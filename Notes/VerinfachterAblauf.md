# ToDo App: Schritt-für-Schritt Leitfaden

Sehr gut! Einen Leitfaden zum Selbstimplementieren zu haben ist viel wertvoller für deinen Lernprozess. Hier ist mein Vorschlag für einen schrittweisen Aufbau deiner ToDo-App mit Tailwind CSS:

## Schritt 1: Grundgerüst & erste Komponente

**Aufgabe:** Erstelle die `App.jsx` Komponente mit einem einfachen Header und einem Container für deine ToDo-App.

**Leitfragen:**

- Wie kannst du Tailwind CSS für ein ansprechendes Layout nutzen?
- Welche Container-Elemente (div, main, etc.) eignen sich?

**Tipps:**

- Nutze Tailwind-Klassen wie `container`, `mx-auto`, `p-4`, etc.
- Verwende eine angemessene Typografie mit `text-2xl`, `font-bold`, etc.

## Schritt 2: ToDo-Datenstruktur & State

**Aufgabe:** Implementiere einen lokalen State in App.jsx für ToDos.

**Leitfragen:**

- Welche Datenstruktur eignet sich für deine ToDos?
- Wie initialisierst du den State mit einigen Beispiel-ToDos?

**Tipps:**

- `useState` mit einem Array von ToDo-Objekten
- Jedes ToDo sollte `id`, `title`, `isDone` und ggf. weitere Felder haben

## Schritt 3: ToDos anzeigen

**Aufgabe:** Erstelle eine `ToDoList`-Komponente, die alle ToDos anzeigt.

**Leitfragen:**

- Wie übergibst du die ToDos von App an ToDoList?
- Wie kannst du über die ToDos iterieren und sie anzeigen?

**Tipps:**

- Verwende `map` zum Durchlaufen des Arrays
- Tailwind-Klassen für Listendarstellung: `divide-y`, `list-none`, etc.

## Schritt 4: Einzelne ToDo-Komponente

**Aufgabe:** Erstelle eine `ToDoItem`-Komponente für ein einzelnes ToDo.

**Leitfragen:**

- Welche Props benötigt diese Komponente?
- Wie stellst du den Status (erledigt/offen) visuell dar?

**Tipps:**

- Props wie `title`, `isDone`, evtl. auch eine `id`
- Verwende bedingte Klassen `${todo.isDone ? "line-through text-gray-500" : ""}`

## Schritt 5: Neue ToDos hinzufügen

**Aufgabe:** Implementiere ein Formular zum Hinzufügen neuer ToDos.

**Leitfragen:**

- Wie erfasst du Benutzereingaben in React?
- Wie kannst du den ToDo-State erweitern?

**Tipps:**

- Nutze `useState` für das Eingabefeld
- Implementiere eine `addTodo`-Funktion in App.jsx und übergib sie als Prop

## Schritt 6: ToDos löschen

**Aufgabe:** Füge eine Möglichkeit hinzu, ToDos zu löschen.

**Leitfragen:**

- Welche Funktion brauchst du in App.jsx?
- Wie übergibst du die Funktion an die entsprechenden Komponenten?

**Tipps:**

- Eine `deleteTodo`-Funktion mit `filter`
- Verwende ein Lösch-Icon mit Tailwind-Styling

## Schritt 7: Status ändern (erledigt/offen)

**Aufgabe:** Ermögliche es, den Status eines ToDos zu ändern.

**Leitfragen:**

- Wie aktualisierst du ein einzelnes Objekt im Array?
- Wie gestaltest du die Benutzeroberfläche für diese Aktion?

**Tipps:**

- Implementiere `toggleTodo` mit `map`
- Nutze eine Checkbox oder ein anklickbares Element

## Schritt 8: Filtern von ToDos

**Aufgabe:** Füge eine Filterfunktion hinzu (Alle/Aktiv/Erledigt).

**Leitfragen:**

- Welchen zusätzlichen State brauchst du für den aktiven Filter?
- Wie filterst du die anzuzeigenden ToDos abhängig vom Filterstatus?

**Tipps:**

- Nutze einen weiteren `useState` für den aktuellen Filter
- Erstelle eine `getFilteredTodos`-Funktion

## Refactoring-Phase

Nachdem die grundlegenden Funktionen implementiert sind:

**Aufgabe:** Verschiebe die ToDo-Logik in einen Custom Hook.

**Leitfragen:**

- Welche Funktionen und States gehören in den Hook?
- Wie kannst du den Hook in deiner App verwenden?

**Tipps:**

- Erstelle `useTodos.js` mit allen relevanten Funktionen
- Nutze den Hook in App.jsx anstelle der direkten State-Verwaltung

---

Möchtest du mit Schritt 1 beginnen? Du könntest ein einfaches Layout mit Tailwind erstellen und dann darauf aufbauen. Oder hast du Fragen zu einem bestimmten Teil des Leitfadens?
