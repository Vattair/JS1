const localStorageNotesKey = 'notes';
let notes = [];

document.querySelector('#noteAdd').addEventListener('click', onNewNote);

function onNewNote() {
    let noteTitle = document.querySelector('#noteTitle').value;
    let noteContent = document.querySelector('#noteContent').value;
    let noteColor = document.querySelector('#noteColor').value;
    const note = {
        title: noteTitle,
        content: noteContent,
        colour: noteColor,
        pinned: false,
        createDate: new Date()
    };
    notes.push(note);
    saveNotes();
    renderNotes();
}


function saveNotes(){
    localStorage.setItem(localStorageNotesKey, JSON.stringify(notes));
}
function getNotesFromLS(){
    const notesFromStorage = JSON.parse(localStorage.getItem(localStorageNotesKey));
    notes = notesFromStorage.map( note => {
        note.createDate = new Date(note.createDate);
        return note;
    });
}
function renderNotes(){
    getNotesFromLS();
    const main = document.querySelector('main');
    main.innerHTML = '';
    for (let note of notes) {
        const htmlSection = document.createElement('section');
        const htmlTitle = document.createElement('h1');
        const htmlContent = document.createElement('p');
        const htmlDate = document.createElement('h4');
    
        htmlSection.classList.add('note');
        htmlSection.style.backgroundColor = note.colour;
        htmlTitle.innerHTML = note.title;
        htmlContent.innerHTML = note.content;
        htmlDate.innerHTML = note.createDate.toLocaleString();
    
        htmlSection.appendChild(htmlTitle);
        htmlSection.appendChild(htmlContent);
        htmlSection.appendChild(htmlDate);
        
        main.appendChild(htmlSection);
    }
}