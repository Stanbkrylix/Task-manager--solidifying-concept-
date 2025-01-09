import { showTasks } from "./task.js";
import { showCalendar } from "./calendar.js";
import { showCompleted } from "./completed.js";
import { showHistory } from "./history.js";
import { showNotes, closeAndCreateNotes } from "./note.js";
import { v4 as uuid } from "uuid";

const tabBtn = document.querySelectorAll(".nav-task");
const contentSections = document.querySelector(".content-section");

// with some mock data
const noteStorageArray = [
    {
        id: uuid(),
        title: "Lion",
        description:
            "The lion is known as the king of the jungle and is a large carnivorous feline native to Africa and parts of Asia.",
    },
    {
        id: uuid(),
        title: "Elephant",
        description:
            "Elephants are the largest land animals on Earth, known for their intelligence, strong social bonds, and iconic trunks.",
    },
    {
        title: "Penguin",
        description:
            "Penguins are flightless birds primarily found in the Southern Hemisphere, especially in Antarctica, known for their distinctive black and white plumage.",
    },
    {
        title: "Dolphin",
        description:
            "Dolphins are highly intelligent marine mammals known for their playful behavior, echolocation abilities, and social nature.",
    },
];

closeAndCreateNotes(noteStorageArray);
tabBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (btn.classList.contains("task-div")) {
            showTasks(contentSections);
        }

        if (btn.classList.contains("note-div")) {
            showNotes(contentSections, noteStorageArray);
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
