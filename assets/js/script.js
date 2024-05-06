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
