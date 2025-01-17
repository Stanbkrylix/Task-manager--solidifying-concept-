import { v4 as uuid } from "uuid";

let editing = false;

const closeAndCreateNotes = function (noteStorageArray) {
    const cancelNoteBtn = document.querySelector(".note-cancel-btn");
    const createNoteBtn = document.querySelector(".note-create-btn");
    const noteModal = document.querySelector(".note-modal");

    cancelNoteBtn.addEventListener("click", (e) => {
        if (!noteModal.classList.contains("hidden")) {
            noteModal.classList.add("hidden");
        }
    });

    createNoteBtn.addEventListener("click", (e) => {
        const noteModalTitle = document.querySelector(".note-modal-title");
        const noteModalDescription = document.querySelector(
            ".note-modal-description"
        );
        const noteCardsSection = document.querySelector(".note-cards-section");

        if (noteModalTitle.value !== "" && noteModalDescription.value !== "") {
            const noteObject = {
                id: uuid(),
                title: noteModalTitle.value,
                description: noteModalDescription.value,
            };

            noteStorageArray.push(noteObject);
            noteModalTitle.value = "";
            noteModalDescription.value = "";
            noteModal.classList.add("hidden");
            renderNotes(noteCardsSection, noteStorageArray);
            deleteNotes(noteStorageArray);

            console.log(noteStorageArray);
            console.log(noteCardsSection);
        }
    });
};

// whenever there is a renderNotes a delete notes need to be there
function deleteNotes(noteStorageArray) {
    // const noteCardsSection = document.querySelector(".note-cards-section");
    const noteCardDeleteBtn = document.querySelectorAll(
        ".note-card-delete-btn"
    );

    if (!noteCardDeleteBtn) return; // if no delete button exists

    noteCardDeleteBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            // The closest method ensures that any click within the button element is treated as simply a button click
            if (e.target.closest("button") === btn) {
                const cardToDelete = btn.parentElement.parentElement;
                const id = cardToDelete.dataset.id;

                const findArrayObject = noteStorageArray.find(
                    (cardObject) => cardObject.id === id
                );

                const indexToDelete = noteStorageArray.indexOf(findArrayObject);
                noteStorageArray.splice(indexToDelete, 1);
                cardToDelete.remove();

                console.log(cardToDelete);
                console.log(id);

                console.log(noteStorageArray);
            }
        });
    });
}

function disableAllBtn() {
    const noteCardEditBtn = document.querySelectorAll(".note-card-edit-btn");
    const noteCardDeleteBtn = document.querySelectorAll(
        ".note-card-delete-btn"
    );
    const addNewNote = document.querySelector(".add-note-btn");

    addNewNote.disabled = true;

    noteCardEditBtn.forEach((btn) => {
        btn.disabled = true;
    });

    noteCardDeleteBtn.forEach((btn) => {
        btn.disabled = true;
    });
}

function enableAllBtn() {
    const noteCardEditBtn = document.querySelectorAll(".note-card-edit-btn");
    const noteCardDeleteBtn = document.querySelectorAll(
        ".note-card-delete-btn"
    );
    const addNewNote = document.querySelector(".add-note-btn");

    addNewNote.disabled = false;

    noteCardEditBtn.forEach((btn) => {
        btn.disabled = false;
    });

    noteCardDeleteBtn.forEach((btn) => {
        btn.disabled = false;
    });
}

function editNotes(noteStorageArray) {
    const editButton = document.querySelectorAll(".note-card-edit-btn");
    // const noteCardsSection = document.querySelector(".note-cards-section");
    // const just

    editButton.forEach(function (btn) {
        btn.addEventListener("click", (e) => {
            if (editing) return;

            if (e.target.closest("button") === btn) {
                editing = true;

                const cardToEdit = btn.parentElement.parentElement;
                const positionOfCard = cardToEdit.dataset.id;
                const cardSelected = noteStorageArray.find(
                    (cardObject) => cardObject.id === positionOfCard
                );
                const indexOfCard = noteStorageArray.indexOf(cardSelected);

                cardToEdit.classList.toggle("make-card-big");
                cardToEdit.innerHTML = "";
                cardToEdit.innerHTML = editHtml(cardSelected);
                disableAllBtn();

                cancelEdit(noteStorageArray);
                // editCard()

                console.log(cardToEdit);
                console.log(positionOfCard);
                console.log(indexOfCard);
            }
        });
    });
}

function cancelEdit(noteStorageArray) {
    const noteCancelEditBtn = document.querySelector(".note-cancel-edit-btn");

    noteCancelEditBtn.addEventListener("click", (e) => {
        const noteCardsSection = document.querySelector(".note-cards-section");
        const parent = e.target.parentElement.parentElement.parentElement;
        console.log(parent);
        editing = false;

        enableAllBtn();
        renderNotes(noteCardsSection, noteStorageArray);
        deleteNotes(noteStorageArray);
        editNotes(noteStorageArray);
    });
}

const showNotes = function (contentSection, noteStorageArray) {
    contentSection.innerHTML = "";
    contentSection.innerHTML = regenerateHtml();

    const addNewNote = document.querySelector(".add-note-btn");
    const noteModal = document.querySelector(".note-modal");
    const noteCardsSection = document.querySelector(".note-cards-section");

    addNewNote.addEventListener("click", (e) => {
        if (noteModal.classList.contains("hidden")) {
            noteModal.classList.remove("hidden");
        }
    });

    console.log(noteStorageArray);
    renderNotes(noteCardsSection, noteStorageArray);
    deleteNotes(noteStorageArray);
    editNotes(noteStorageArray);
    // cancelEdit();
};

function renderNotes(noteCardsSection, noteStorageArray) {
    // const noteCardsSection = document.querySelector(".note-cards-section");
    noteCardsSection.innerHTML = "";
    noteStorageArray.forEach((cardData) => {
        noteCardsSection.innerHTML += `
            <div class="note-card" data-id="${cardData.id}">
                <h2 class="card-title">${cardData.title}</h2>
                <p class="card-content">
                    ${cardData.description}
                </p>

                <div class="note-card-btns">
                    <button class="note-card-delete-btn">
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                    <button class="note-card-edit-btn">
                        <span class="material-symbols-outlined">edit</span>
                    </button>
                </div>
            </div>
       
       `;
    });
}

function regenerateHtml() {
    return `
    <div class="note-section">
            <div class="note-tab">
                <h2 class="note-h2">Notes</h2>
                <button class="add-note-btn">
                    <span class="material-symbols-outlined">add</span>
                    <p>New Note</p>
                    
                </button>
            </div>

            <div class="note-cards-section">

                <div class="note-card" data-id="1">
                    <h2 class="card-title">Animals</h2>
                    <p class="card-content">
                        Animals are amazing creatures which lives among us; some
                        of them make our lives better and safer because they
                        keep population of animals which carry diseases which
                        can protentially be dangerous to humans
                    </p>

                    <div class="note-card-btns">
                        <button class="note-card-delete-btn">
                            <span class="material-symbols-outlined">delete</span>
                        </button>
                        <button class="note-card-edit-btn">
                            <span class="material-symbols-outlined">edit</span>
                        </button>
                    </div>
                </div>


              
            </div>
        </div>
    
    `;
}

function editHtml(cardSelected) {
    return `
         <div class="note-edit-content">
                    <input
                        type="text"
                        class="note-edit-title"
                        placeholder="Note edit Title"
                        value ="${cardSelected.title}"
                    />
                    <textarea
                        name=""
                        id=""
                        class="note-edit-description"
                        placeholder="Note edit Description"
                          
                        rows="11"
                        cols="5"
                    > ${cardSelected.description}</textarea>

                    <div class="note-edit-btns">
                        <button class="note-cancel-edit-btn">Cancel Edit</button>

                        <button class="note-create-edit-btn">Edit Note</button>
                    </div>
                </div>
    `;
}

export { showNotes, closeAndCreateNotes, deleteNotes };
