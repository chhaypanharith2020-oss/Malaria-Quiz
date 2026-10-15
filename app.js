// Sample dataset (Can be expanded up to 500 questions)
const quizData = [
    {
        question: "យុវតីអាយុ១៨ឆ្នាំម្នាក់ឡើងកន្ទួលក្រហមនិងពិបាកដកដង្ហើមក្រោយចាក់ថ្នាំប៉េនីស៊ីលីន។ សម្ពាធឈាម 120/60 mm Hg សម្ពាធបេះដូង 155 beats/min, និងដង្ហើម 30 breaths/min។ ការព្យាបាលគឺ៖",
        options: [
            "A. បញ្ចូលអុកស៊ីសែន (Intubation)",
            "B. ថ្នាំ Epinephrine",
            "C. ថ្នាំ Beta blockers",
            "D. ថ្នាំ Iodine",
            "E. បញ្ចូលសារធាតុរាវ (Fluid challenge)"
        ],
        correct: 1, // Index of Option B
        explanation: "That's right! You chose the correct response. Epinephrine is the primary treatment for anaphylaxis."
    },
    {
        question: "What is the normal resting heart rate for healthy adults?",
        options: [
            "A. 30-50 beats/min",
            "B. 60-100 beats/min",
            "C. 120-150 beats/min",
            "D. 160-200 beats/min"
        ],
        correct: 1, // Index of Option B
        explanation: "Correct! A normal resting heart rate for adults ranges from 60 to 100 beats per minute."
    }
];

let currentIndex = 0;
let score = 0;
let hasAnswered = false;

// DOM Elements
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackCard = document.getElementById("feedback-card");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");
const currentIndexDisplay = document.getElementById("current-index");
const totalQuestionsDisplay = document.getElementById("total-questions");
const scoreDisplay = document.getElementById("score-display");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
    hasAnswered = false;
    feedbackCard.classList.add("hidden");
    optionsContainer.innerHTML = "";
    
    const currentQuiz = quizData[currentIndex];
    questionText.textContent = currentQuiz.question;
    currentIndexDisplay.textContent = currentIndex + 1;
    totalQuestionsDisplay.textContent = quizData.length;
    scoreDisplay.textContent = score;

    prevBtn.disabled = currentIndex === 0;

    currentQuiz.options.forEach((option, index) => {
        const div = document.createElement("div");
        div.className = "option-row";
        div.innerHTML = `
            <input type="radio" name="quiz-option" id="opt-${index}" class="mr-3 w-4 h-4 text-blue-600">
            <label for="opt-${index}" class="w-full cursor-pointer text-slate-700">${option}</label>
        `;
        
        div.addEventListener("click", () => handleSelection(index, div));
        optionsContainer.appendChild(div);
    });
}

function handleSelection(selectedIndex, selectedDiv) {
    if (hasAnswered) return;
    hasAnswered = true;

    const currentQuiz = quizData[currentIndex];
    const radioBtn = selectedDiv.querySelector('input[type="radio"]');
    if (radioBtn) radioBtn.checked = true;

    // Show feedback card styles
    feedbackCard.classList.remove("hidden");
    feedbackText.textContent = currentQuiz.explanation;

    if (selectedIndex === currentQuiz.correct) {
        selectedDiv.classList.add("correct");
        feedbackCard.className = "rounded-lg p-4 mb-6 border bg-lime-50 border-lime-500 text-lime-800";
        feedbackTitle.textContent = "✓ Correct";
        score += 10;
        scoreDisplay.textContent = score;
    } else {
        selectedDiv.classList.add("incorrect");
        feedbackCard.className = "rounded-lg p-4 mb-6 border bg-red-50 border-red-500 text-red-800";
        feedbackTitle.textContent = "✕ Incorrect";
        
        // Highlight the correct answer row automatically
        const rows = optionsContainer.children;
        rows[currentQuiz.correct].classList.add("correct");
    }
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < quizData.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        alert("Quiz finished! Final score: " + score);
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
});

// Initial Setup
loadQuestion();
