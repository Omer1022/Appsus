import { utilService } from './util-service.js';
import { storageService } from '../../../services/async-storage-service.js';
const NOTES_KEY = 'notes';

_createNotes()

export const noteService = {
    query,
    remove,
    save,
    getEmptyNote,
    get
};

function query() {
    return storageService.query(NOTES_KEY);
}

function get(noteId) {
    return storageService.get(NOTES_KEY, noteId)
}

function remove(noteId) { 
    return storageService.remove(NOTES_KEY, noteId)
}

function save(note) { 
    if (note.id) return storageService.put(NOTES_KEY, note)
    else return storageService.post(NOTES_KEY, note)
 } 

function getEmptyNote() {
    return {
        id: '', title: '', type: '', isPinned: false, info: {}, style: {}
    };
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = [
            {
                id: "n101",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                id: "n104",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "yo yo yo yo"
                }
            },
            {
                id: "n105",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "gaba gaba hey"
                }
            },
            {
                id: "n102",
                type: "note-img",
                isPinned: true,
                info: {
                    url: "https://images.unsplash.com/photo-1656063654604-a454da03642a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                    title: "Bobi and Me"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: "n106",
                type: "note-img",
                isPinned: true,
                info: {
                    url: "https://images.unsplash.com/photo-1656308918259-8ce8f38f0442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=381&q=80",
                    title: "beacon pancacks"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                id: "n103",
                type: "note-todos",
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", doneAt: null },
                        { txt: "Coding power", doneAt: 187111111 }
                    ]
                }
            },
            {
                id: "n1007",
                type: "note-todos",
                info: {
                    label: "wedding stuff",
                    todos: [
                        { txt: "buy tux", doneAt: null },
                        { txt: "sign caitering contract", doneAt: null },
                        { txt: "get cocaine", doneAt: 187111111 }
                    ]
                }
            },

        ];

        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}





