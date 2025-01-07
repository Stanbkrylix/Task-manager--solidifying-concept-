import { showTasks } from "./task.js";
import { showCalendar } from "./calendar.js";
import { showCompleted } from "./completed.js";
import { showHistory } from "./history.js";
import { showNotes, closeAndCreateNotes } from "./note.js";

const tabBtn = document.querySelectorAll(".nav-task");
const contentSections = document.querySelector(".content-section");
const noteStorageArray = [];

closeAndCreateNotes(noteStorageArray);
tabBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (btn.classList.contains("task-div")) {
            showTasks(contentSections);
        }

        if (btn.classList.contains("note-div")) {
            showNotes(contentSections);
        }

        if (btn.classList.contains("completed-div")) {
            showCompleted(contentSections);
        }

        if (btn.classList.contains("history-div")) {
            showHistory(contentSections);
        }

        if (btn.classList.contains("calendar-div")) {
            showCalendar(contentSections);
        }
    });
});
