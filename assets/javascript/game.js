
var wins = 0
window.onload = function game() {
    var answers = ["shark", "sunfish", "octopus", "kelp", "lobster", "plankton", "squid", "whale", "seaweed"];
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var i = 0
    var randomAnswers = answers[Math.floor(Math.random() * answers.length)];
    var wordLength = parseInt(randomAnswers.length)
    var left = 15
    var guessed = []
    var correct = []


    function printword() {
        var word = ""
        document.getElementById("word").innerHTML = ("")
        for (var j = 0; j < randomAnswers.length; j++) {
            if (correct.indexOf(randomAnswers[j]) > -1) {
                word += " " + randomAnswers[j] + " "
            }
            else {
                word += " _ "
            }

            document.getElementById("word").innerHTML = (word)
        }
    }
    printword()


    document.getElementById("already").innerHTML = (("Letters already guessed: ") + (guessed))
    document.getElementById("remaining").innerHTML = (("Number of guesses left: ") + (left))
    document.getElementById("wins").innerHTML = (("Wins: ") + (wins))
    document.getElementById("press").innerHTML = ("Guess a letter to get started!")

    document.onkeyup = function (choice) {
        var userChoice = choice.key.toLowerCase()
        //if the choice is a letter
        if (letters.indexOf(userChoice) !== -1) {
            //if the choice is in the word
            if (randomAnswers.indexOf(userChoice) !== -1) {
                var count = 0
                for (var h = 0; h < randomAnswers.length; h++) {
                    if (randomAnswers.charAt(h) === userChoice) {
                        count++
                    }
                }
                for (var k = 0; k < count; k++) {
                    correct.push(userChoice)
                }
                printword()

                if (correct.length === wordLength) {
                    wins++
                    alert("You Win!")
                    game()
                }
                else {
                }

            }
            //if the choice is not in the word
            else {
                //if the choice is not already in the guessed array
                if (guessed.indexOf(userChoice) == -1) {
                    guessed.push(userChoice)
                    left--
                    document.getElementById("already").innerHTML = (("Letters already guessed: ") + (guessed))
                    document.getElementById("remaining").innerHTML = (("Number of guesses left: ") + (left))
                    //if the max number of guesses has been reached
                    if (guessed.length > 14) {
                        alert("You Loose")
                        game()
                    }
                    else {
                    }
                }
                else {
                }
            }



        }

        else {
            document.getElementById("press").innerHTML = ("Plese select a letter to continue")
        }


    }

}







