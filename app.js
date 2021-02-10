const changeButton = document.getElementById('name-change-button');
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
const pronounButton = document.getElementById('pronoun-button');
const pronounInput = document.getElementById('pronoun-input');
const pronounDisplay = document.getElementById('pronoun-display');

//below tells button that we need it know if someone clicks it
changeButton.addEventListener('click', () => {
    nameDisplay.textContent = nameInput.value;
    pronounDisplay.textContent = pronounInput.value;
    //clear the input?
    nameInput.value = '';
});





