// Your code here

//initialization and declaraction of maniplation of DOM
const character = document.getElementById("character-bar");
const container = document.getElementById("detailed-info")
const animalName = document.getElementById("name");
const image = document.getElementById("image");
const form = document.getElementById("votes-form")
const animalVotes = document.getElementById("vote-count");
const input = document.getElementById("votes");
const resetVotes = document.getElementById('reset-btn');

resetVotes.style.cursor = 'pointer';

let currentAnimal;
//adding event listener on the form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    currentAnimal.votes += parseInt(e.target.votes.value);
    showAnimal(currentAnimal);
});

//adding event listener on the reset button
resetVotes.addEventListener('click', () => {
    currentAnimal.votes = 0;
    showAnimal(currentAnimal);
})

function showAnimal(animal){
    animalName.innerHTML = animal.name;
    image.src = animal.image;
    animalVotes.innerHTML = animal.votes;
}

//DOM render functions
function renderCharacters(animal) {
    const spanElement = document.createElement('span')
    spanElement.innerHTML = animal.name;
    spanElement.style.cursor = 'pointer';
    character.appendChild(spanElement)
    spanElement.addEventListener('click', () => {
        currentAnimal = animal;
        showAnimal(animal);
})
}

//fetch requests
//get fetch for all character resources
function getCharacters() {
    fetch('http://localhost:3000/characters/')
    .then(response => response.json())
    .then(animals.forEach(renderCharacters))
}


//Initial Render
//get data and render our characters to the DOM

function initialize() {
    getCharacters();
}
initialize()