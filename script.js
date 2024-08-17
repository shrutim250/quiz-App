function createBubbles() {
    const numberOfBubbles = 30; // Increased number of bubbles
    const container = document.body; // Use the whole body for bubbles

    for (let i = 0; i < numberOfBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Set random size and position
        const size = Math.random() * 100 + 30; // Larger bubbles with size between 30px and 130px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.top = `${Math.random() * 100}vh`; // Random position within the viewport height
        bubble.style.left = `${Math.random() * 100}vw`; // Random position within the viewport width
        
        // Set animation duration and delay
        bubble.style.animationDuration = `${Math.random() * 10 + 10}s`; // Random duration between 10s and 20s
        bubble.style.animationDelay = `-${Math.random() * 10}s`; // Random delay up to 10s
        
        container.appendChild(bubble);
    }
}

// Call the function to create bubbles
createBubbles();
      
       
       document.addEventListener('DOMContentLoaded', () => {
            const questions = [
                {
                    question: "Inside which HTML element do we put the JavaScript?",
                    options: ["<javascript>","<script>","<js>","<scripting>"],
                    correctAnswer: "<script>"
                },
                {
                    question: "Where is the correct place to insert a JavaScript?",
                    options: ["Body Section", "Head Section", "Both", "None"],
                    correctAnswer: "Body Section"
                },
                {
                    question:"The external JavaScript file must contain the <script> tag.",
                    options:["True","False","Not Sure","Depends on the User"],
                    correctAnswer:"False"
                }
            ];
        
            let currentQuestionIndex = 0;
            let score = 0; // Track the score
            let answeredQuestions = 0; // Track the number of answered questions
        
            const questionElement = document.getElementById('question');
            const optionButtons = document.querySelectorAll('.option-btn');
            const nextButton = document.getElementById('next-btn');
            const submitButton = document.getElementById('submit-btn');
            const resultContainer = document.getElementById('result-container');
        
            function loadQuestion() {
                const currentQuestion = questions[currentQuestionIndex];
                questionElement.textContent = currentQuestion.question;
        
                optionButtons.forEach((button, index) => {
                    button.textContent = currentQuestion.options[index];
                    button.classList.remove('correct', 'incorrect'); // Reset button styles
                });
        
                // Hide the Submit button initially
                submitButton.style.display = 'none';
            }
        
            function handleOptionClick(event) {
                const buttonText = event.target.textContent.trim();
                const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        
                optionButtons.forEach(btn => btn.classList.remove('correct', 'incorrect')); // Reset styles
        
                if (buttonText === correctAnswer) {
                    event.target.classList.add('correct');
                    score++; // Increment score for correct answer
                } else {
                    event.target.classList.add('incorrect');
                }
        
                answeredQuestions++; // Increment answered questions count
        
                // Show submit button if all questions are answered
                if (answeredQuestions === questions.length) {
                    submitButton.style.display = 'inline-block'; // Show submit button
                    nextButton.style.display = 'none'; // Hide Next Question button
                }
                else {
                    nextButton.style.display = 'inline-block'; // Show Next Question button
                }
            }
        
            function handleNextQuestion() {
                currentQuestionIndex = (currentQuestionIndex + 1) % questions.length; // Move to the next question, loop back if at end
                loadQuestion();
            }
        
            function FinalQuestion() {
                const totalQuestions = questions.length;
                const resultMessage = score === totalQuestions
                    ? 'You passed the test!'
                    : 'You did not pass the test.';
        
                resultContainer.innerHTML = `
                    <h2>Quiz Over!</h2>
                    <p>${resultMessage}</p>
                    <p>Your score is ${score}/${totalQuestions}.</p>
                `;
                resultContainer.style.display = 'block'; // Show the result container
            }
        
            function submitQuiz() {
                if (answeredQuestions === questions.length) {
                    FinalQuestion(); // Call FinalQuestion function to show results
                } else {
                    alert('Quiz Over: Some questions were not answered.');
                }
            }
        
            optionButtons.forEach(button => {
                button.addEventListener('click', handleOptionClick);
            });
        
            nextButton.addEventListener('click', handleNextQuestion);
            submitButton.addEventListener('click', submitQuiz);
        
            loadQuestion(); // Load the first question
        });
        
    