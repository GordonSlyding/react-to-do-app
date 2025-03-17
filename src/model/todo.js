/**
 * In Typescript würde man ein Model als Interface definieren!
 */

/**
 * @typedef {Object} Todo
 * @property {number} id - Eindeutige ID des ToDos
 * @property {string} title - Titel/Beschreibung des ToDos
 * @property {boolean} isDone - Status (erledigt/nicht erledigt)
 * @property {Date} createdAt - Erstellungsdatum
 * @property {string} category - Kategorie des ToDos
 */

export const createToDo = (title, category = "Allgemein") => {
  return {
    id: id,
    title: title,
    category: category,
    createdAt: new Date(),
  };
};
