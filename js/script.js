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

