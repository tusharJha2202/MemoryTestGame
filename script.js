const easyQuestions = [
    {
        image: "easy1.jpg",
        questions: [
            { question: "What is the color of the beads in the picture?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Red" },
            { question: "How many flowers are there in the picture?", options: ["One", "Two", "Three", "Four"], answer: "Three" },
            { question: "What is the color of the bird in the picture?", options: ["Green and yellow", "Black and white", "Blue and red", "Orange and brown"], answer: "Green and yellow" },
            { question: "How many sausages are shown in the picture?", options: ["Two", "Three", "Four", "Five"], answer: "Three" },
            { question: "What is the color of the umbrella in the picture?", options: ["Red", "Blue", "Multicolored", "Yellow"], answer: "Multicolored" }
        ]
    },
    {
        image: "easy2.jpg",
        questions: [
            { question: "What is the color of the heart in the picture?", options: ["Yellow", "Blue", "Red", "Pink"], answer: "Red" },
            { question: "How many legs does the ostrich have in the picture?", options: ["Two", "Four", "Three", "One"], answer: "Two" },
            { question: "What is the color of the flag in the picture?", options: ["Green", "Red", "Blue", "Yellow"], answer: "Red" },
            { question: "What is the color of the high heels in the picture?", options: ["Blue", "Yellow", "Pink", "Red"], answer: "Pink" },
            { question: "How many candles are on the cake in the picture?", options: ["Two", "Three", "One", "Zero"], answer: "Zero" }
        ]
    },
    {
        image: "easy3.jpg",
        questions: [
            { question: "What is the color of the coat in the picture?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Blue" },
            { question: "How many balloons are there in the picture?", options: ["Five", "Six", "Seven", "Eight"], answer: "Seven" },
            { question: "What is the color of the rose in the picture?", options: ["Yellow", "Red", "White", "Pink"], answer: "Red" },
            { question: "What animal’s paw print is shown in the picture?", options: ["Bear", "Dog", "Lion", "Tiger"], answer: "Bear" },
            { question: "What type of tool is shown in the picture?", options: ["Saw", "Hammer", "Wrench", "Pliers"], answer: "Saw" }
        ]
    }
];

const hardQuestions = [
    {
        image: "hard1.jpg",
        questions: [
            { question: "What is being sold at the stand?", options: ["Ice cream", "Lemonade", "Milkshake", "Cookies"], answer: "Lemonade" },
            { question: "What is the color of the house in the background?", options: ["Yellow", "Blue", "Pink", "Green"], answer: "Pink" },
            { question: "How many animals are visible in the image?", options: ["Four", "Five", "Six", "Seven"], answer: "Five" },
            { question: "Which animal is wearing a red shirt and hat?", options: ["Fox", "Dog", "Rabbit", "Cat"], answer: "Dog" },
            { question: "What is the rabbit holding?", options: ["A glass of lemonade", "A basket of lemons", "A bunch of flowers", "A lemonade pitcher"], answer: "A basket of lemons" },
            { question: "What is the sign on the stand shaped like?", options: ["A lemon", "A star", "A circle", "A rectangle"], answer: "A lemon" },
            { question: "What is the fox holding in its hand?", options: ["A lemonade pitcher", "A glass of lemonade", "A basket of lemons", "Nothing"], answer: "A lemonade pitcher" },
            { question: "What is the color of the lemonade stand?", options: ["Blue", "Yellow", "Brown", "Green"], answer: "Brown" },
            { question: "What animal is standing to the far right?", options: ["Dog", "Rabbit", "Cat", "Raccoon"], answer: "Rabbit" },
            { question: "How many glasses of lemonade are visible on the stand?", options: ["One", "Two", "Three", "Four"], answer: "Two" }
        ]
    },
    {
        image: "hard2.jpg",
        questions: [
            { question: "What is growing on the tree?", options: ["Apples", "Pears", "Oranges", "Bananas"], answer: "Pears" },
            { question: "What is the boy in the middle holding in his hands?", options: ["Flowers", "Carrots", "Leaves", "Apples"], answer: "Carrots" },
            { question: "What color is the dress of the girl in the image?", options: ["Red", "Pink", "Purple", "Yellow"], answer: "Pink" },
            { question: "What is next to the sunflower in the pot?", options: ["A magnifying glass", "A compass and tools", "A watering can", "A pair of scissors"], answer: "A compass and tools" },
            { question: "What is on the wooden porch steps?", options: ["A toy airplane", "An apple", "A watering can", "Gardening gloves"], answer: " An apple" },
            { question: "What is hanging on the tree?", options: ["A kite", "A pinwheel", "A swing", "A birdhouse"], answer: "A pinwheel" },
            { question: "What symbol is on the boy’s shirt?", options: ["A carrot", "A recycling logo", "A sunflower", "A globe"], answer: "A recycling logo" },
            { question: "What is the child in the background playing with?", options: ["A drone", "A ball", "A toy airplane", "A kite"], answer: "A toy airplane" },
            { question: "What color is the chair near the tree?", options: ["Green", "Yellow", "Brown", "Blue"], answer: "Yellow" },
            { question: "What is the girl looking at?", options: ["Carrots", "Flowers", "The sunflower", "The tree"], answer: "Flowers" }
        ]
    },
    {
        image: "hard3.jpg",
        questions: [
            { question: "What is the chef cooking on the grill?", options: ["Hot dogs", "Burgers", "Vegetables", "Fish"], answer: "Burgers" },
            { question: "What is the man in the red shirt holding?", options: ["Watermelons", "Corn", "Drinks", "Burgers"], answer: "Watermelons" },
            { question: "What is the older man eating?", options: ["Pie", "Corn", "Watermelon", "Burger"], answer: "Corn" },
            { question: "What is the woman in blue carrying on the tray?", options: ["Plates and cutlery", "Drinks and a jug", "Desserts", "Burgers"], answer: "Drinks and a jug" },
            { question: "What game are the kids playing in the bottom right corner?", options: ["Tennis", "Badminton", "Volleyball", "Frisbee"], answer: "Badminton" },
            { question: "What is on the table where the kids are sitting?", options: ["A watermelon", "A pie and a bowl of salad", "Burgers and fries", "Corn and drinks"], answer: "A pie and a bowl of salad" },
            { question: "What is the color of the umbrella?", options: ["Blue and white", "Red and green", "Multicolored", "Yellow and orange"], answer: "Multicolored" },
            { question: "What is the dog doing in the image?", options: ["Eating food", "Sitting near the table", "Chasing a ball", "Drinking water"], answer: "Sitting near the table" },
            { question: "What is the woman in pink holding?", options: ["A tray with burgers", "A bowl of salad", "A pie", "A drink"], answer: "A tray with burgers" },
            { question: "What is lying on the ground near the table?", options: ["A pair of shoes", "A plate", "A ball", "A watermelon slice"], answer: "A watermelon slice" }
        ]
    }
];

let currentLevel = null;
let currentQuestions = [];
let currentImage = null;
let questionIndex = 0;
let score = 0;
let imageTimer = null;
let questionTimer = null;
let selectedAnswers = [];
let correctAnswers = [];

const tickSound = document.getElementById('tick-sound');
const clickSound = document.getElementById('click-sound');
const bgMusic = document.getElementById('bg-music');
const audioControl = document.getElementById('audio-control');
const audioIcon = document.getElementById('audio-icon');

// Start music muted
bgMusic.muted = true;

// Toggle mute/unmute
audioControl.addEventListener('click', () => {
    bgMusic.muted = !bgMusic.muted;
    if (!bgMusic.muted) {
        bgMusic.play().catch(console.error);
        audioIcon.textContent = '🔊'; // Unmute icon
    } else {
        bgMusic.pause();
        audioIcon.textContent = '🔇'; // Mute icon
    }
});

// Start background music
function startBackgroundMusic() {
    bgMusic.loop = true;
    bgMusic.volume = 0.4;
    bgMusic.play().catch(() => console.log('Autoplay restricted. User interaction needed.'));
}

// Stop background music
function stopBackgroundMusic() {
    bgMusic.pause();
    bgMusic.currentTime = 0; // Reset to the beginning
}

// Handle name and age entry
function handleNameEntry() {
    const userName = document.getElementById('user-name').value.trim();
    const userAge = document.getElementById('user-age').value.trim();

    if (!userName) {
        alert("Please enter your name to start the game!");
        return;
    }

    if (!userAge) {
        alert("Please enter your age to start the game!");
        return;
    }

    clickSound.play(); // Play click sound
    localStorage.setItem('userName', userName);
    localStorage.setItem('userAge', userAge);

    // Dynamically update the welcome message
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = `Hello, ${userName}!`;

    document.getElementById('name-entry').style.display = 'none';
    document.getElementById('level-select').style.display = 'block';
}

// Handle level selection
function selectLevel(level) {
    clickSound.play();
    currentLevel = level;

    const questions = level === 'easy' ? easyQuestions : hardQuestions;
    const randomSet = questions[Math.floor(Math.random() * questions.length)];

    currentImage = randomSet.image;
    currentQuestions = randomSet.questions;

    document.getElementById('level-select').style.display = 'none';
    document.getElementById('image-display').style.display = 'block';

    showImage();
}

// Show the image with a timer
function showImage() {
    const progressBar = document.getElementById('progress-bar');
    document.getElementById('game-image').src = `images/${currentImage}`;

    let timeLeft = 30;
    document.getElementById('image-timer').textContent = formatTime(timeLeft);

    stopBackgroundMusic();
    tickSound.play();

    imageTimer = setInterval(() => {
        timeLeft--;
        document.getElementById('image-timer').textContent = formatTime(timeLeft);
        progressBar.style.width = `${(30 - timeLeft) * (100 / 30)}%`;

        if (timeLeft <= 0) {
            clearInterval(imageTimer);
            tickSound.pause();
            tickSound.currentTime = 0;
            transitionToQuestions();
        }
    }, 1000);
}

// Transition to questions after image timer
function transitionToQuestions() {
    startBackgroundMusic();
    document.getElementById('image-display').style.display = 'none';

    const transitionMessage = document.getElementById('transition-message');
    transitionMessage.style.display = 'block';

    setTimeout(() => {
        transitionMessage.style.display = 'none';
        document.getElementById('game-content').style.display = 'block';
        startGame();
    }, 3000);
}

// Format time for display
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`;
}

// Start the game
function startGame() {
    questionIndex = 0;
    score = 0;
    selectedAnswers = [];
    correctAnswers = [];
    displayQuestion();
}

// Display a question
function displayQuestion() {
    if (questionIndex >= currentQuestions.length) {
        endGame();
        return;
    }

    const currentQuestion = currentQuestions[questionIndex];
    document.getElementById('question-text').textContent = currentQuestion.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;
        button.onclick = () => {
            clickSound.play();
            checkAnswer(option);
        };
        optionsContainer.appendChild(button);
    });

    startQuestionTimer();
}

// Start the question timer
function startQuestionTimer() {
    let timeLeft = 10;
    document.getElementById('timer').textContent = timeLeft;
    tickSound.play();

    questionTimer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            tickSound.pause();
            questionIndex++;
            displayQuestion();
        }
    }, 1000);
}

// Check the answer
function checkAnswer(selectedOption) {
    const currentQuestion = currentQuestions[questionIndex];
    selectedAnswers.push(selectedOption);
    correctAnswers.push(currentQuestion.answer);

    clearInterval(questionTimer);

    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    questionIndex++;
    displayQuestion();
}

// Calculate attention level
function calculateAttentionLevel(score, totalQuestions) {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80) return "Excellent 👏 - Highly attentive!";
    if (percentage >= 60) return "Good 😊 - Your attention is decent.";
    if (percentage >= 40) return "Fair 😐 - Needs improvement.";
    return "Poor 😞 - Try focusing more next time.";
}

function endGame() {
    clearInterval(questionTimer);
    tickSound.pause(); // Stop ticking sound at the end
    document.getElementById('game-content').style.display = 'none';
    const resultContainer = document.getElementById('game-result');
    resultContainer.style.display = 'block';

    const totalQuestions = currentQuestions.length;
    const attentionLevel = calculateAttentionLevel(score, totalQuestions);

    // Display score and attention level
    document.getElementById('score-display').textContent = `You scored ${score}/${totalQuestions}!`;

    const attentionMessage = document.createElement('p');
    attentionMessage.textContent = `Your attention level is: ${attentionLevel}`;
    attentionMessage.style.fontWeight = "bold";
    resultContainer.appendChild(attentionMessage); // Append to result container

    // Prepare answers list
    const answerList = document.getElementById('answer-list');
    answerList.innerHTML = ''; // Clear previous answers
    for (let i = 0; i < totalQuestions; i++) {
        const currentQuestion = currentQuestions[i];
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>Question ${i + 1}:</strong> Correct Answer: ${currentQuestion.options[currentQuestion.options.indexOf(correctAnswers[i])]} | Your Answer: ${selectedAnswers[i]}`;
        answerList.appendChild(listItem);
    }

    // Display answers container initially hidden
    const answersContainer = document.getElementById('answers-container');
    answersContainer.style.display = 'none'; // Hide initially

    // Toggle visibility of answers when "View Answers" button is clicked
    const viewAnswersButton = document.getElementById('view-answers-btn');
    viewAnswersButton.addEventListener('click', () => {
        if (answersContainer.style.display === 'none') {
            answersContainer.style.display = 'block'; // Show answers
            viewAnswersButton.textContent = 'Hide Answers'; // Change button text
        } else {
            answersContainer.style.display = 'none'; // Hide answers
            viewAnswersButton.textContent = 'View Answers'; // Change button text
        }
    });

    // Ensure the name bar is visible (if you're using this for the name bar)
    const nameBar = document.getElementById('name-bar');
    if (nameBar) {
        nameBar.style.display = 'block'; // Make sure the name bar is visible
    }
}   

// Restart the game
function restartGame() {
    localStorage.clear();
    location.reload();
}

// Skip the image timer
function skipImageTimer() {
    clearInterval(imageTimer);
    tickSound.pause();
    tickSound.currentTime = 0;
    transitionToQuestions();
}

// Initialize the game
window.onload = () => {
    document.getElementById('footer-bar').style.display = 'block';
    document.getElementById('name-entry').style.display = 'block';
    document.getElementById('level-select').style.display = 'none';
};