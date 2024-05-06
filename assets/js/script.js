document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("taskSubmit");
  submitButton.addEventListener("click", function () {
    const name = document.getElementById("taskName");
    const description = document.getElementById("taskDescription");
    const select = document.getElementById("taskStatus");
    const dateChoice = document.getElementById("taskDueDate");
    const toDo = document.getElementById("toDo");

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

    // Contenu HTML de la tâche
    taskElement.innerHTML = `
      <h2>${name.value}</h2>
      <p>Description: ${description.value}</p>
      <p>Statut: ${select.options[select.selectedIndex].text}</p>
      <p>Date d'échéance: ${dateChoice.value} in ${diffDay} days</p>
    `;

    // Création d'un bouton "Delete" pour la tâche
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      // Supprime la tâche parente de ce bouton
      taskElement.remove();
    });

    // Ajout du bouton "Delete" à la tâche
    taskElement.appendChild(deleteButton);

    // Ajout de la tâche à l'élément "toDo"
    toDo.appendChild(taskElement);

    // Message d'alerte
    alert("Great, your task has been created!");

    // Réinitialisation des valeurs des champs du formulaire
    name.value = "";
    description.value = "";
    select.value = "null";
  });
});
