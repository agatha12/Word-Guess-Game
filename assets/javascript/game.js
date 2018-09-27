

document.onkeyup = function(choice){
    var keyChoice = choice.key;
    var userChoice = keyChoice.toLowerCase();
    console.log(userChoice);
    var i = 20;
    var alreadyGuessed = [userChoice];
    if (userChoice === "o") {
        document.getElementById("letter1").innerHTML = "O ";
        document.getElementById("letter4").innerHTML = "O ";
    }
    else if (userChoice === "c") {
        document.getElementById("letter2").innerHTML = "C ";
    }
    else if (userChoice === "t") {
        document.getElementById("letter3").innerHTML = "T ";
    }
    else if (userChoice === "p") {
        document.getElementById("letter5").innerHTML = "P ";
    }
    else if (userChoice === "u") {
        document.getElementById("letter6").innerHTML = "U ";
    }
    else if (userChoice === "s") {
        document.getElementById("letter7").innerHTML = "S";
    }
    else {
        document.getElementById("remaining").innerHTML = ("Number of guesses remaining: " + (i));
        document.getElementById("already").innerHTML = ("Letters already guessed: " + alreadyGuessed);
        

    }
    
}

// // for (userChoice = 0; userChoice < cars.length; i++) { 
// }

    
