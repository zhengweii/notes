const fs = require("fs");
const chalk = require("chalk");

// Helper function
const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e) {
        return [];
    }
};

// Helper function
const saveNote = function(notesArr) {
    fs.writeFileSync("notes.json", JSON.stringify(notesArr));
};

const addNote = function(noteTitle, noteContent) {
    const notes = loadNotes();

    if (notes.find(note => note.noteTitle === noteTitle)) {
        console.log(chalk.red.bold("Title has been taken. Please use another title"));
    }
    else {
        const newNote = {
            noteTitle,
            noteContent
        };

        notes.push(newNote);
        saveNote(notes);
        console.log(chalk.green.bold("Successfully added note"));
    }
};

const readNote = (noteTitle) => {
    const notes = loadNotes();
    const note = notes.find(note => note.noteTitle === noteTitle);

    if (note) {
        console.log(note.noteContent);
    }
    else {
        console.log(chalk.red.bold("No such note exists"));
    }
};

const showAllNotes = function() {
    const notes = loadNotes();

    notes.forEach(note => console.log("Title: " + note.noteTitle));
};

const deleteNote = function(noteTitle) {
    const notes = loadNotes();

    if (notes.find(note => note.noteTitle === noteTitle)) {
        const noteIndex = notes.findIndex(note => note.noteTitle === noteTitle);
        notes.splice(noteIndex, 1);
        saveNote(notes);
        console.log(chalk.green.bold("Successfully deleted note"));
    }
    else {
        console.log(chalk.red.bold("No such note exists"));
    }
};

module.exports = {
    addNote,
    readNote,
    showAllNotes,
    deleteNote
};
