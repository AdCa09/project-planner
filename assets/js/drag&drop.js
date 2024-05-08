document.addEventListener("DOMContentLoaded", function () {
    const taskContainer = document.querySelector(".app-container");

    // Écouteurs d'événements pour le drag and drop
    const sections = document.querySelectorAll(".app-container section");

    sections.forEach(section => {
        section.addEventListener("dragover", function (event) {
            event.preventDefault();
        });

        section.addEventListener("drop", function (event) {
            event.preventDefault();
            const draggedTask = document.querySelector(".dragging");

            // Déplacer la tâche dans la section cible
            if (draggedTask) {
                section.appendChild(draggedTask);
            }
        });
    });

    // Ajouter des gestionnaires d'événements pour le démarrage et la fin du glissement
    taskContainer.addEventListener("dragstart", function (event) {
        const taskElement = event.target.closest(".task");
        if (taskElement) {
            taskElement.classList.add("dragging");
        }
    });

    taskContainer.addEventListener("dragend", function (event) {
        const taskElement = event.target.closest(".task");
        if (taskElement) {
            taskElement.classList.remove("dragging");
        }
    });
});
