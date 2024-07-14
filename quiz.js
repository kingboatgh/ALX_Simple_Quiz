

// Define a function named checkAnswer.....

function checkAnswer() {

    // Declare a variable named correctAnswer = string value "4"

    let correctAnswer = "4";

    // Use document.querySelector to select the checked radio button by its name attribute name="quiz"

    let userAnswer = document.querySelector('input[name="quiz"]:checked');


    // checking for a radio button checked.............

    if (userAnswer) {
        // Access the value property of the selected radio button to get the user’s answer
        userAnswer = userAnswer.value;

        // if statement to compare userAnswer with correctAnswer
        if (userAnswer === correctAnswer) {
            // If correct,  textContent of the element with ID feedback = "Correct! Well done."
            document.getElementById('feedback').textContent = "Correct! Well done.";
            
    } else {
            // If incorrect, textContent of the element with ID feedback = "That's incorrect. Try again!"
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }

    } 
    
}


// select the “Submit Answer” button by its ID, "submit-answer"
let submitAnswer = document.getElementById('submit-answer');


submitAnswer.addEventListener('click', checkAnswer);
