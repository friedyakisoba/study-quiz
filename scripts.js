const questionElement = document.getElementById('question');
const button = document.getElementById('new');

const questions = [
    "What is the capital of your country?",
    "Who is the current president?",
    "What year did your country gain independence?",
    "What is the national anthem of your country?",
    "What are the colors of your country's flag?"
];

function getRandomIndex() {
    return Math.floor(Math.random() * questions.length);
}

function askRandomQuestion() {
    const randomIndex = getRandomIndex();
    questionElement.textContent = questions[randomIndex];
}

button.addEventListener('click', askRandomQuestion);
