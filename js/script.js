console.log("script.js connected!");

let userAnswers = {} // Object to store all answers.

let questionBlocks = document.querySelectorAll(".question-block"); // Select all elements witht he class question-block.

// For loop that itterates through each question block.
// block = All the question blocks 1 - 4.
// index = Selects which question block you are on. Ex. Question 1 = index 0....Question 4 = index 3.
questionBlocks.forEach((block, index) => {
    const answerButtons = block.querySelectorAll('.answer-btn'); // buttons a - d from current question in index
    const questionNumber = index + 1; // Converts to human readaility, ex. index 0 = questionNumber = 1.


    answerButtons.forEach((button) => {
        button.addEventListener('click', function () { // When button is clicked run the code inside.

            answerButtons.forEach((btn) => { //Loops through each button and removes the 'selected' class.
                btn.classList.remove('selected');
            });

            this.classList.add('selected'); // Adds the 'selected' class to the button that was clicked.

            const answer = this.getAttribute('data-answer'); // Gets the value stored in the 'data-answer
            // attribute of the current element and saves
            // it to the varaiable "answer".
            const points = parseInt(this.getAttribute('data-points')); // Gets the character value
            // from "data-points", ex."4",
            // and converts the text to a number.
            // ParseInt() does this parsInt("4") -> 4.

            userAnswers[questionNumber] = { // Stores the question you are on.
                answer: answer,// Stores character of the answer selceted. ex. "c".
                points: points // Stores the value that was assigned to the answer. ex. 4.
            };
            // Testing to see if code block works through having it print results in the console.
            console.log('Question' + questionNumber + ': ' + answer + ' (' + points + ' points)');
        });
    });
});

// This function recieves the answers that were tracked and tallys their points.
function displayResult() {

    const totalQuestions = 4;
    const answeredQuestions = Object.keys(userAnswers).length; // Counts how many questions have been answered.

    if (answeredQuestions < totalQuestions) { // If only a certain number of the questions were answered, 
        // instead of all 4, then send a message promptomh the user
        // to answer all 4 questions.
        alert('Please answer all 4 questions!');
        return;
    }

    let totalPoints = 0;

    for (let questionNum in userAnswers) { // questionNum = Iterator that loops through elements in the 
        // elements in the "userAnswers" object

        totalPoints = totalPoints + userAnswers[questionNum].points;// Adds the point vlaue to the current
        // running total and updates the
        // variable "totalPoints".
    }

    console.log

        //Determines the persons category based on the interval the value of their selection of answers
        // falls within. 
        let resultTitle = ''; // Empty variable to store the result message of the class selected 
                             // based on value of "totalPoints".
        let resultDescription = ''; // Empty variable that stores the description of the class assigned to the user. 

        if (totalPoints >= 4 && totalPoints <= 8) {
            resultTitle = '🛡️ You\'re a TANK!';
            resultDescription = 'You\'re the protector and anchor. You thrive under pressure and naturally put yourself between problems and the people you care about.';
        } else if (totalPoints >= 9 && totalPoints <= 11) {
            resultTitle = '💚 You\'re a SUPPORT!';
            resultDescription = 'You\'re the enabler and multiplier. You make everyone around you better and find fulfillment in helping others succeed.';
        } else if (totalPoints >= 12 && totalPoints <= 16) {
            resultTitle = '⚔️ You\'re a DPS!';
            resultDescription = 'You\'re the achiever and finisher. You\'re competitive, results-driven, and thrive when you can showcase your skills.';
        }


        
    }
