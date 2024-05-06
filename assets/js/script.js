document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("taskSubmit");
    submitButton.addEventListener("click", function () {
      const name = document.getElementById("taskName");
      const description = document.getElementById("taskDescription");
      const select = document.getElementById("taskStatus");
      const dateChoice = document.getElementById("taskDueDate");
  
      // Vérification des champs, s'ils sont tous remplis
      if (
        //trim utilisé pour supprimé les espaces blancs
        name.value.trim() === "" ||
        description.value.trim() === "" ||
        select.value === "null" ||
        dateChoice.value.trim() === ""
      ) {
        alert("Please fill in all fields");
        return;
      }

    // compte à rebours
      const currentDate = new Date();
  
      const dateChoiceValue = dateChoice.value;
      const dateChoiceDate = new Date(dateChoiceValue);
  
      const diffMili = dateChoiceDate.getTime() - currentDate.getTime();
      //Math.ceil pour l'arrondissement à l'unité supérieur
      const diffDay = Math.ceil(diffMili / (1000 * 60 * 60 * 24));
    // fin compte à rebours 

    // Nouvelle section avec l'implémentations des valeurs et du  compte à rebours

      let newSection = document.createElement("section");
      newSection.innerHTML = `
        <h2>${name.value}</h2>
        <p>Description: ${description.value}</p>
        <p>Statut: ${select.options[select.selectedIndex].text}</p>
        <p>Date d'échéance: ${dateChoice.value} in ${diffDay} days</p>
      `;
      //Création button delete pour les tasks
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {

    // Supprime la section parente de ce bouton
        newSection.remove();
      });
      newSection.appendChild(deleteButton);
      // Ajoute la nouvelle section à la fin du corps
      document.body.appendChild(newSection);
      alert("Great, your task has been created!");
  
      // Réinitialise les valeurs des champs du formulaire
      name.value = "";
      description.value = "";
      select.value = "null";
    });
  });
  