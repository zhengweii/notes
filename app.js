const yargs = require("yargs");

// Local imports
const notes = require("./notes");

yargs.command(
    "add",
    "Adds a new note",
    {
        noteTitle: {
            alias: "t",
            describe: "Title of note to be added",
            demandOption: true,
            type: "string"
        },
        noteContent: {
            alias: "c",
            describe: "Contents of note to be added",
            demandOption: true
        }
    },
    function(argv) {
        notes.addNote(argv.noteTitle, argv.noteContent);
    });

yargs.command(
    "read",
    "Reads an existing note",
    {
        noteTitle: {
            alias: "t",
            describe: "Title of note to be read",
            demandOption: true,
            type: "string"
        }
    },
    function(argv) {
        notes.readNote(argv.noteTitle);
    });

yargs.command(
    "showAll",
    "Shows all the saved notes",
    function() {
        notes.showAllNotes();
    });

yargs.command(
    "delete",
    "Deletes an existing note",
    {
        noteTitle: {
            alias: "t",
            describe: "Title of note to be deleted",
            demandOption: true,
            type: "string"
        }
    },
    function(argv) {
        notes.deleteNote(argv.noteTitle);
    });

yargs.parse();
