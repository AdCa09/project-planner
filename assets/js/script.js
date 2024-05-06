document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("taskSubmit");
  submitButton.addEventListener("click", function () {
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

    const currentDate = new Date();
    const dateChoiceValue = dateChoice.value;
    const dateChoiceDate = new Date(dateChoiceValue);
    const diffMili = dateChoiceDate.getTime() - currentDate.getTime();
    const diffDay = Math.ceil(diffMili / (1000 * 60 * 60 * 24));

    // Création d'un nouvel élément pour la tâche
    const taskElement = document.createElement("div");
    taskElement.innerHTML = `
      <h2>${name.value}</h2>
      <p>Description: ${description.value}</p>
      <p>Statut: ${select.options[select.selectedIndex].text}</p>
      <p>Date d'échéance: ${dateChoice.value} in ${diffDay} days</p>
    `;

    // Création d'un bouton Delete pour la tâche
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      // Supprime la tâche parente de ce bouton
      taskElement.remove();
    });

    taskElement.appendChild(deleteButton);

    // Sélection de la liste appropriée en fonction du statut de la tâche
    let taskList;
    switch (select.value) {
      case "toDo":
        taskList = document.getElementById("toDo");
        break;
      case "doing":
        taskList = document.getElementById("doing");
        break;
      case "done":
        taskList = document.getElementById("done");
        break;
      default:
        alert("Invalid task status");
        return;
    }

    // Ajout de la tâche à la liste appropriée
    taskList.appendChild(taskElement);

    // Message d'alerte
    alert("Great, your task has been created!");

    // Réinitialisation des valeurs des champs du formulaire
    name.value = "";
    description.value = "";
    select.value = "null";
  });
});

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

  

