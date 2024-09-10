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

function showQuestions () {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    questionElement.textContent = "Citizenship Quiz";

    // clear any previous questions and choices
    choicesElement.innerHTML = '';
    userAnswers = [];

}


function gradeQuiz() {
    // setting a counter for the correct answer
    let correctCount = 0;
    // reference for the feedback container
    const feedbackElement = document.getElementById('feedback');
    // Clears the previous feedback given
    feedbackElement.innerHTML = ''

    currentQuestions.forEach((q, index) => {
        const correctAnswer = q.correctAnswer;
        const userAnswer = userAnswers[index];

        if (userAnswer === correctAnswer) {
            correctCount++
        }   
    });

   feedbackElement.textContent `'You got ${correctCount} out of ${correctQuestions.length} correct. `; 
}







