document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('taskSubmit');
    submitButton.addEventListener("click", function() {
        const name = document.getElementById('taskName');
        const description = document.getElementById('taskDescription');
        const select = document.getElementById('taskStatus');
        const date = document.getElementById('taskDueDate');

        //Vérification des champs, si ils sont tous remplis
        if (name.value.trim() === '' || description.value.trim() === '' || select.value === 'null' || date.value.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        //Nouvelle section avec les valeurs
        let newSection = document.createElement('section');
        newSection.innerHTML = `
            <h2>${name.value}</h2>
            <p>Description: ${description.value}</p>
            <p>Statut: ${select.options[select.selectedIndex].text}</p>
            <p>Date d'échéance: ${date.value}</p>
        `;
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
        // Supprime la section parente de ce bouton
            newSection.remove();
        });
        newSection.appendChild(deleteButton);
        // Ajoute la nouvelle section à la fin du corps
        document.body.appendChild(newSection);

        // Réinitialise les valeurs des champs du formulaire
        name.value = '';
        description.value = '';
        select.value = 'null';
        date.value = 'today';
    });
});
