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
                title: noteModalTitle.value,
                description: noteModalDescription.value,
            };

            noteStorageArray.push(noteObject);
            noteModalTitle.value = "";
            noteModalDescription.value = "";
            noteModal.classList.add("hidden");
            renderNotes(noteCardsSection, noteStorageArray);

            console.log(noteStorageArray);
            console.log(noteCardsSection);
        }
    });
};

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

    renderNotes(noteCardsSection, noteStorageArray);
};

function renderNotes(noteCardsSection, noteStorageArray) {
    noteCardsSection.innerHTML = "";
    noteStorageArray.forEach((cardData) => {
        noteCardsSection.innerHTML += `
            <div class="note-card" data-id="1">
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

export { showNotes, closeAndCreateNotes };
