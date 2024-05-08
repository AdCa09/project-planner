document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour charger les tâches depuis le stockage local
  function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
      addTaskToDOM(task);
    });
  }

  // Fonction pour enregistrer les tâches dans le stockage local
  function saveTasksToLocalStorage() {
    const tasks = Array.from(document.querySelectorAll('.task')).map(taskElement => ({
      name: taskElement.querySelector('h3').textContent,
      description: taskElement.querySelector('p').textContent.replace('Description: ', ''),
      dueDate: taskElement.querySelector('.due-date').textContent.split(" in ")[0],
      status: taskElement.parentNode.id
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Charger les tâches depuis le stockage local au chargement de la page
  loadTasksFromLocalStorage();

  const submitButton = document.getElementById("taskSubmit");
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const name = document.getElementById("taskName");
    const description = document.getElementById("taskDescription");
    const select = document.getElementById("taskStatus");
    const dateChoice = document.getElementById("taskDueDate");

    // Vérification des champs, s'ils sont tous remplis
    if (
      name.value.trim() === "" ||
      description.value.trim() === "" ||
      select.value === "null" ||
      dateChoice.value.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Créer un objet tâche
    const task = {
      name: name.value,
      description: description.value,
      dueDate: dateChoice.value,
      status: select.value
    };

    // Ajouter la tâche au DOM
    addTaskToDOM(task);

    // Enregistrer les tâches dans le stockage local
    saveTasksToLocalStorage();

    alert("Great, your task has been created!");

    // Réinitialisation des valeurs des champs du formulaire
    name.value = "";
    description.value = "";
    select.value = "null";
  });

  // Fonction pour ajouter une tâche au DOM
  function addTaskToDOM(task) {
    // Création d'un nouvel élément pour la tâche
    const taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.classList.add("darkmode"); // Ajout de la classe "darkmode"
    taskElement.draggable = true;

    // Créer les éléments enfants avec leur contenu
    taskElement.innerHTML = `
    <h3>${task.name}</h3>
    <p>Description: ${task.description}</p>
    <p class="due-date">${task.dueDate}</p>
    `;

    // Ajouter la classe darkmode à tous les éléments enfants
    taskElement.querySelectorAll("*").forEach(function (element) {
      element.classList.add("darkmode");
    });

    // Création d'un bouton Delete pour la tâche
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      // Supprime la tâche parente de ce bouton
      taskElement.remove();
      // Enregistrer les tâches dans le stockage local après suppression
      saveTasksToLocalStorage();
    });

    taskElement.appendChild(deleteButton);

    // Sélection de la liste appropriée en fonction du statut de la tâche
    let taskList = getContainerByStatus(task.status);
    taskList.appendChild(taskElement);
  }

  // Fonction pour trier les tâches par date d'échéance
  const sortByDueDateButton = document.getElementById("sortByDueDate");
  sortByDueDateButton.addEventListener("click", () => {
    const statuses = ["toDo", "doing", "done"];

    statuses.forEach((status) => {
      const container = getContainerByStatus(status);
      const tasks = Array.from(container.querySelectorAll(".task"));

      tasks.sort((taskElement1, taskElement2) => {
        const dueDateText1 = taskElement1.querySelector(".due-date");
        const dueDateText2 = taskElement2.querySelector(".due-date");

        if (dueDateText1 && dueDateText2) {
          const dueDate1 = new Date(dueDateText1.textContent.split(" in ")[0]);
          const dueDate2 = new Date(dueDateText2.textContent.split(" in ")[0]);
          return dueDate1 - dueDate2;
        } else if (!dueDateText1 && dueDateText2) {
          // Si seulement la première tâche n'a pas de date, la placer après
          return 1;
        } else if (dueDateText1 && !dueDateText2) {
          // Si seulement la deuxième tâche n'a pas de date, la placer avant
          return -1;
        } else {
          return 0; // Si aucune des tâches n'a de date, conserver l'ordre actuel
        }
      });

      // Réinsérer les tâches triées dans la section
      tasks.forEach((taskElement) => {
        container.appendChild(taskElement);
      });
    });
  });

  // Fonction pour sélectionner le conteneur en fonction du statut de la tâche
  function getContainerByStatus(status) {
    switch (status) {
      case "toDo":
        return document.getElementById("toDo");
      case "doing":
        return document.getElementById("doing");
      case "done":
        return document.getElementById("done");
      default:
        return null;
    }
  }

  // On cible les boutons
  const buttonAll = document.getElementById("displayAll");
  const buttonToDo = document.getElementById("displayToDo");
  const buttonDoing = document.getElementById("displayDoing");
  const buttonDone = document.getElementById("displayDone");

  const toDoSection = document.getElementById("toDo");
  const doingSection = document.getElementById("doing");
  const doneSection = document.getElementById("done");

  // Events listeners pour créer le filtre
  buttonToDo.addEventListener("click", () => {
    doingSection.style.display = "none";
    doneSection.style.display = "none";
    toDoSection.style.display = "flex";
    toDoSection.style.gridColumnStart = 2;
  });

  buttonDoing.addEventListener("click", () => {
    toDoSection.style.display = "none";
    doneSection.style.display = "none";
    doingSection.style.display = "flex";
    doingSection.style.gridColumnStart = 2;
  });

  buttonDone.addEventListener("click", () => {
    toDoSection.style.display = "none";
    doingSection.style.display = "none";
    doneSection.style.display = "flex";
    doneSection.style.gridColumnStart = 2;
  });

  buttonAll.addEventListener("click", () => {
    toDoSection.style.display = "flex";
    doingSection.style.display = "flex";
    doneSection.style.display = "flex";
    toDoSection.style.gridColumnStart = 1;
    doneSection.style.gridColumnStart = 3;
  });
});
