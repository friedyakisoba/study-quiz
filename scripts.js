let currentQuestions = [];
let userAnswers = [];

async function fetchQuestions() {
    try {
        // Fetch the JSON File 
        const response = await ('questions.json');
        // Parse the JSON File
        const questions = await response.json();
        return question;
    } catch (error){
        // Error handling
        console.error('Error fetching questions:', error);
        
    }
}

// Random Question Generator (5 for debugging | 10 for final)
function getRandomQuestions(questionSet) {
    // shuffles the question
    const shuffled =questionSet.sort(()=> 0.5 - Math.random());
    // returns the first five questions
    return shuffled.slice(0, 5);
}



const questionElement = document.getElementById('question');
const button = document.getElementById('new');


function getRandomIndex() {
    return Math.floor(Math.random() * questions.length);
}

function askRandomQuestion() {
    const randomIndex = getRandomIndex();
    questionElement.textContent = questions[randomIndex];
}

button.addEventListener('click', askRandomQuestion);







