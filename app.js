// Sample dataset (Can be expanded up to 500 questions)
const quizData = [
    {
       question: "1. DOC – តើប្រភេទឯកសារទាំងបីមានអ្វីខ្លះដែលត្រូវរក្សាទុក?\nDOC – what are the three types of documentation to retain?",
    options: [
      "A. ឯកសារ, កំណត់ត្រា, របាយការណ៍",
      "B. បញ្ជីសម្រង់ទិន្នន័យ, កំណត់ត្រា, របាយការណ៍",
      "C. កំណត់ត្រា, របាយការណ៍, គោលការណ៍ណែនាំ",
      "D. ឯកសារ, ទម្រង់, ក្រដាស"
    ],
    correct: 0, // Index of Option A
    explanation: "Correct! The three primary types of documentation to retain under standard guidelines are documents, records, and reports (ឯកសារ, កំណត់ត្រា, របាយការណ៍)."
  },
  {
    question: "2. POR – តើវិធានការបង្ការណាមួយខាងក្រោម ដែល មិនចាំបាច់ (NOT required) ត្រូវអនុវត្តនៅក្នុងភូមិដែលមាន ហានិភ័យនៃការនាំចូលជំងឺគ្រុនចាញ់ខ្ពស់ (High-importation risk) ប៉ុន្តែមានសក្តានុពលនៃការចម្លងទាប (Low receptivity)?\nPOR – Which of the following preventive intervention is NOT required in high-importation risk, low receptivity villages?",
    options: [
      "A. ធ្វើការស្រាវជ្រាវនៅតាមច្រកចេញចូល",
      "B. ចែកមុងជ្រលក់ថ្នំាដល់ក្រុមហានិភ័យខ្ពស់",
      "C. ផ្តល់ថ្នាំលេបបង្ការសម្រាប់ក្រុមប្រឈមខ្ពស់",
      "D. អប់រំសុខភាព SBC"
    ],
    correct: 2, // Index of Option C
    explanation: "Correct! Mass chemoprophylaxis or targeted drug administration is generally not required in areas with low receptivity due to the low potential for local transmission."
  },
  {
    question: "3. POR – តើចំណាត់ថ្នាក់ករណីអ្វីខ្លះដែលត្រូវផ្តល់ថ្នាំលេបសមូលហភាព ឬដល់ក្រុមគោលដៅ (MDA ឬ TDA) ដើម្បីជាអន្តរាគមន៍ឆ្លើយតប?\nPOR – In which of the following case classification is conduct TDA or MDA considered for response intervention?",
    options: [
      "A. បន្ទាប់ពីមានករណីនាំចូលនៅក្នុងសក្តានុពលចម្លងទាប",
      "B. បន្ទាប់ពីមានករណីរាយការណ៍នៅក្នុងសក្តានុពលចម្លងទាប",
      "C. បន្ទាប់ពីមានករណីឆ្លងតាមឈាមនៅក្នុងសក្តានុពលចម្លងខ្ពស់",
      "D. បន្ទាប់ពីមានចំណាត់ថ្នាក់ករណីឆ្លងពីករណីនាំចូល ឬករណីឆ្លងនៅនឹងកន្លែងនៅក្នុងសក្តានុពលចម្លងខ្ពស់ ទាប និងគ្មាន។"
    ],
    correct: 3, // Index of Option D
    explanation: "Correct! Response interventions such as TDA/MDA are initiated following confirmed local transmission classifications (introduced or indigenous)."
  },
  {
    question: "4. POR – តើអ្នកណាទទួលខុសត្រូវក្នុងការចុះធ្វើការអង្កេត និងចំណាត់ថ្នាក់ករណីជំងឹគ្រុនចាញ់ឡើងវិញ?\nPOR – Who is responsible for conducting full Case Investigation and Case Classification?",
    options: [
      "A. VMW/MMW",
      "B. ក្រុមឆ្លើយតប ឬក្រុមឆ្លើយតបបន្ទាន់ជំងឺគ្រុនចាញ់",
      "C. ក្រុមឆ្លើយតបបន្ទាន់ជំងឺគ្រុនចាញ់ ថ្នាក់ស្រុកប្រតិបត្តិ",
      "D. មណ្ឌលសុខភាព"
    ],
    correct: 2, // Index of Option C
    explanation: "Correct! The Operational District (OD) Malaria Rapid Response Team is tasked with executing complete case investigations and classifications."
  },
  {
    question: "5. តើយើងចាត់ថ្នាក់ករណីលាប់ឡើងវិញនៃជំងឺគ្រុនចាញ់ប្រភេទ P.vivax និងP.ovale រយៈពេលប៉ុន្មាន?\nWhat is the time cut-off to classify a P. vivax and P. ovale case as a relapse case?",
    options: [
      "A. 12 ខែ",
      "B. 6 ខែ",
      "C. 3 ខែ",
      "D. 9 ខែ"
    ],
    correct: 0, // Index of Option A
    explanation: "Correct! The standard clinical timeline cut-off to classify a recurrent P. vivax or P. ovale infection as a relapse is 12 months."
  },
  {
    question: "6. តើរយៈពេលប៉ុន្មានថ្ងៃមុនពេលចេញរោគសញ្ញាដំបូង ដែលជារយៈពេលទំនងជាឆ្លងមេរោគ គ្រុនចាញ់ P. vivax?\nHow many days prior to the onset of symptoms is the likely period of infection for a P. vivax case?",
    options: [
      "A. 12-17 ថ្ងៃ",
      "B. 9-14 ថ្ងៃ",
      "C. 7-12 ថ្ងៃ",
      "D. 10-18 ថ្ងៃ"
    ],
    correct: 0, // Index of Option A
    explanation: "Correct! The standard expected incubation period determining the likely timeframe of infection for P. vivax spans between 12 to 17 days before symptoms show."
  },
  {
    question: "7. ករណីដែលកើតចេញពីការចម្លងក្នុងស្រុក អាចត្រូវបានចាត់ថ្នាក់ជាពីរគឺ \"ករណីឆ្លងនៅនឹងកន្លែង (Indigenous)\" ឬ \"ករណីឆ្លងពីករណីនាំចូល (Introduced)\"។ តើអ្វីទៅជា “ករណីឆ្លងពីករណីនាំចូល”?\nA case from local transmission can be classified as either indigenous or introduced. What is an introduced case?",
    options: [
      "A. ករណីចម្លងក្នុងស្រុក ដែលមានទំនាក់ទំនងទៅនឹងករណីនាំចូល",
      "B. ករណីក្នុងស្រុក ដែលមានទំនាក់ទំនងទៅនឹងករណីលាប់/រើកើតឡើងវិញ",
      "C. ករណីក្នុងស្រុក ដែលមានទំនាក់ទំនងទៅនឹងករណីឆ្លងតាមឈាម",
      "D. ករណីក្នុងស្រុក ដែលមិនមានទំនាក់ទំនងទៅនឹងករណីនាំចូល"
    ],
    correct: 0, // Index of Option A
    explanation: "Correct! An introduced case represents local transmission that can be directly traced back and linked to an imported case."
  },
  {
    question: "8. តើ “ករណីឆ្លងនៅនឹងកន្លែង” មាននិយមន័យដូចម្តេច?\nWhich of the following best defines an indigenous case?",
    options: [
      "A. ករណីជំងឺគ្រុនចាញ់ដែលឆ្លងមកពីក្រៅប្រទេស ហើយត្រូវបានរកឃើញរោគវិនិច្ឆ័យបន្ទាប់ពីត្រឡប់មកវិញ។",
      "B. ករណីជំងឺគ្រុនចាញ់ដែលមានទំនាក់ទំនងផ្ទាល់ទៅនឹងករណីនាំចូលនៅក្នុងសហគមន៍។",
      "C. ជាការឆ្លងនៅក្នុងស្រុកដោយគ្មានភស្តុតាងនៃករណីនាំចូល និងគ្មានទំនាក់ទំនងផ្ទាល់ទៅនឹងការឆ្លងពីករណីនាំចូល។",
      "D. ករណីជំងឺគ្រុនចាញ់ដែលត្រូវបានរកឃើញតាមរយៈការធ្វើរោគវិនិច្ឆ័យនៅតាមមូលដ្ឋានសុខាភិបាល។"
    ],
    correct: 2, // Index of Option C
    explanation: "Correct! An indigenous case means local transmission without clear evidence of outside importation or direct epidemiological links to an introduced index case."
  },
  {
    question: "9. តើអ្នកកំណត់រក “រយៈពេល”ទំនងជាឆ្លងមេរោគយ៉ាងដូចម្តេច?\nHow do you calculate the likely period of infection?",
    options: [
      "A. ថ្ងៃចេញរោគសញ្ញាចុងក្រោយ ដកនឹង រយៈពេលសម្ងំនៃមេរោគ",
      "B. ថ្ងៃចេញរោគសញ្ញាដំបូង ដកនឹង រយៈពេលសម្ងំនៃមេរោគ",
      "C. ថ្ងៃធ្វើរោគវិនិច្ឆ័យ ដកនឹង រយៈពេលសម្ងំនៃមេរោគ",
      "D. ថ្ងៃចេញរោគសញ្ញាចុងក្រោយ ដកនឹង ថ្ងៃធ្វើរោគវិនិច្ឆ័យ"
    ],
    correct: 1, // Index of Option B
    explanation: "Correct! The likely period of infection is calculated by subtracting the parasite's incubation period from the first date of symptom onset."
  },
  {
    question: "10. តើការធ្វើចំណាត់ថ្នាក់ករណីណាមួយខាងក្រោម ដែលតម្រូវឱ្យមានការចុះស្រាវជ្រាវរកជំងឺគ្រុនចាញ់តាមខ្នងផ្ទះ និងការព្យាបាល (RACDT)?\nWhich of the following case classification may require Reactive Case Detection and Treatment (RADCT)?",
    options: [
      "A. ករណីឆ្លងពីករណីនាំចូល",
      "B. ករណីឆ្លងតាមឈាម",
      "C. ករណីនាំចូល",
      "D. ករណីឆ្លងនៅនឹងកន្លែង, ករណីឆ្លងពីករណីនាំចូល, ករណីនាំចូល, ករណីលាប់/រើកើតឡើងវិញ"
    ],
    correct: 3, // Index of Option D
    explanation: "Correct! All of these confirmed classifications can trigger localized Reactive Case Detection and Treatment (RACDT) actions to disrupt transmission chains."
  },
  {
    question: "11. តើចំណាត់ថ្នាក់ករណីអ្វីខ្លះ ដែលត្រូវធ្វើការអង្កេតសំបុកចម្លង?\nWhich case classifications may be eligible for foci investigation?",
    options: [
      "A. ករណីនាំចូល and ករណីឆ្លងពីករណីនាំចូល",
      "B. ករណីនាំចូល, ករណីឆ្លងពីករណីនាំចូល, ករណីលាប់/ករណីរើកើតឡើងវិញ",
      "C. ករណីឆ្លងនៅនឹងកន្លែង, ករណីឆ្លងពីករណីនាំចូល, និងករណីឆ្លងតាមឈាម",
      "D. ករណីឆ្លងនៅនឹងកន្លែង, ករណីឆ្លងពីករណីនាំចូល, ករណីលាប់/រើកើតឡើងវិញ"
    ],
    correct: 2, // Index of Option C
    explanation: "Correct! Indigenous, introduced, and blood-induced infections satisfy the criteria needed to launch a full focus investigation."
  },
  {
    question: "12. តើនៅពេលណាដែលសំបុកចម្លងសកម្ម (Active foci) នឹងត្រូវចាត់ថ្នាក់ឡើងវិញទៅជាសំបុកចម្លងសំណល់តែមិនសកម្ម (Residual non-active)?\nWhen will the active foci will be reclassified into residual non-active?",
    options: [
      "A. មិនមានការរកឃើញករណីឆ្លងក្នុងស្រុក ក្នុងរយៈពេល ១២ ខែកន្លងមកនេះ",
      "B. មិនមានការរកឃើញករណីនាំចូល ក្នុង រយៈពេល ១២ ខែកន្លងមកនេះ",
      "C. មិនមានការរកឃើញករណីលាប់/រើកើតឡើងវិញ ក្នុងរយៈពេល ១២ ខែកន្លងមកនេះ",
      "D. មិនមានការរកឃើញករណីឆ្លងតាមឈាម ក្នុងរយៈពេល ១២ ខែកន្លងមកនេះ"
    ],
    correct: 0, // Index of Option A
    explanation: "Correct! An active focus changes status to a residual non-active focus once zero local transmission cases are detected for 12 consecutive months."
  },
  {
    question: "13. តើគោលបំណងចម្បងនៃចំណាត់ថ្នាក់ភូមិនៅក្នុងការទប់ស្កាត់ការកកើតជំងឺគ្រុនចាញ់ឡើងវិញគឺជាអ្វី?\nWhat is the main purpose of stratification in the Prevention of Re-establishment (POR)?",
    options: [
      "A. ដើម្បីកំណត់តំបន់ដែលមានអត្រាមរណៈភាពដោយសារជំងឺគ្រុនចាញ់ខ្ពស់បំផុត។",
      "B. ដើម្បីកំណត់តំបន់ដែលមានចំនួនប្រជាជនច្រើនបំផុត។",
      "C. ដើម្បីកំណត់ភូមិហានិភ័យដែលកើតជំងឺគ្រុនចាញ់ឡើងវិញពីការឆ្លងពីករណីនាំចូល (Re-introduction) និងការកកើតជំងឺគ្រុនចាញ់ឡើងវិញ (Re-establishment) ដោយយោងតាមសក្តានុពលចម្លង និងហានិភ័យនៃការនាំចូល។",
      "D. ដើម្បីវាយតម្លៃប្រសិទ្ធភាពនៃថ្នាំគ្រុនចាញ់។"
    ],
    correct: 2, // Index of Option C
    explanation: "Correct! Stratification tracks down risk zones according to receptive vulnerability and importation parameters to systematically stop the parasite from re-establishing."
  },
  {
    question: "14. តើពេលណា OD គ្រប់លក្ខខ័ណ្ឌចាប់ផ្តើមស្នើសុំវិញ្ញាបនបត្រលុបបំបាត់ជំងឺគ្រុនចាញ់ថ្នាក់ក្រោមជាតិ?\nWhen is an OD eligible for starting the SNV process?",
    options: [
      "A. បន្ទាប់ពីគ្មានករណីឆ្លងនៅនឹងកន្លែងរយៈពេល៣៦ខែ",
      "B. បន្ទាប់ពីគ្មានករណីរយៈពេល១២ខែ",
      "C. បន្ទាប់ពីអនុវត្ត POR",
      "D. ចម្លើយ A & C ត្រឹមត្រូវ"
    ],
    correct: 3, // Index of Option D
    explanation: "Correct! An Operational District becomes eligible once it logs 36 months free of indigenous transmission while successfully deploying POR measures."
  },
  {
    question: "15. តើពេលណា ខេត្ត គ្រប់លក្ខខ័ណ្ឌចាប់ផ្តើមស្នើសុំវិញ្ញាបនបត្រលុបបំបាត់ជំងឺគ្រុនចាញ់ថ្នាក់ក្រោមជាតិ?\nWhen is a Province eligible for starting the SNV process?",
    options: [
      "A. បន្ទាប់ពីគ្មានករណីរយៈពេល៣៦ខែ",
      "B. បន្ទាប់ពីខេត្តគ្មានករណីឆ្លងនៅនឹងកន្លែង រយៈពេល៣៦ខែ និងបានអនុវត្ត POR",
      "C. បន្ទាប់ពីអនុវត្ត POR",
      "D. បន្ទាប់ពីគ្មានករណីរយៈពេល១២ខែ"
    ],
    correct: 1, // Index of Option B


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
