var choice = ["rock", "paper", "scissor"];
var start = false;
var compchosenChoice;

function compChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    compchosenChoice = choice[randomNumber];
    if (start == true) {
        displayCompChoice(compchosenChoice);
    }
}

function displayCompChoice(compchosenChoice) {
    $(".comp-option").text("Computer Chooses " + compchosenChoice);
}

function userClick() {
    var chances = 3; // Set the number of chances

    function playRound() {
        $(".option").click(function () {
            var userChoice = this.id;
            start = true;
            console.log(userChoice);
            produce_sound();
            compChoice();
            animatePress(userChoice);
            scoreKeeper(userChoice, compchosenChoice);

            chances--;
            if (chances === 0) {
                // Display the result after three rounds
                result(comp, user);
                chances = 3; // Reset the chances for the next game
            } else {
                // Display a message for the next round
                $("h1").text("Round " + (3 - chances));
            }
        });
    }

    playRound();
}

var comp = 0;
var user = 0;

function scoreKeeper(userChoice, compchosenChoice) {
    if (userChoice != compchosenChoice) {
        if (
            (userChoice == "rock" && compchosenChoice == "scissor") ||
            (userChoice == "scissor" && compchosenChoice == "paper") ||
            (userChoice == "paper" && compchosenChoice == "rock")
        ) {
            user += 1;
        } else if (
            (compchosenChoice == "rock" && userChoice == "scissor") ||
            (compchosenChoice == "scissor" && userChoice == "paper") ||
            (compchosenChoice == "paper" && userChoice == "rock")
        ) {
            comp += 1;
        }
    }

    $(".ur-score-display").text("Your Score : " + user);
    $(".comp-score-display").text("Computer Score : " + comp);
}

function result(comp, user) {
    if (comp > user) {
        $("h1").text("YOU LOOSE :(");
    } else if (user > comp) {
        $("h1").text("YOU WON !!!!");
    } else {
        $("h1").text("It's a TIE !!");
    }
}

function produce_sound() {
    var sound = new Audio("./click_sound.mp3");
    sound.play();
}

userClick();
compChoice();

function animatePress(key) {
    $("#" + key).addClass("pressed");

    setTimeout(function () {
        $("#" + key).removeClass("pressed");
    }, 100);
}

