


(function() {
//array of car manufacturers 
var car_manuf = ['audi', 'porsche', 'bmw', 'mercedes', 'saab', 'lincoln', 'vw', 'bentley', 'lamborgini', 'fiat', 'ferrari', 'maserati', 'cheverolet', 'toyota', 'nissan', 'mercury', 'pontiac']

//used to hold random word
var random_word;
var allowedGuesses;

var wrongGuesses;

var  currentWord = {
	name: this.name
};

var win = 0;
var loss=0;
var correctArr = [];

//used to target random generated word in html
var carElement = document.getElementById('random-word');
//used to target letters used on html
var lettersGuessedElement = document.getElementById('guessed');
var remainingChances = document.getElementById('remaining')
var winElement = document.getElementById('win');
var lossElement = document.getElementById('loss');
var correctKey = [];
var wrongKey = [];

//random word generator function
function randomGen (arr) {
	ranNum = Math.floor((Math.random() * (arr.length - 1)));
	return arr[ranNum]
}

function initalize() {
	currentWord.name = randomGen(car_manuf);
	allowedGuesses = currentWord.name.length + 3;

	for(var i = 0; i < currentWord.name.length; i++) {
		correctKey.push('_')
	}
	carElement.innerHTML= correctKey.join(" ")
	remainingChances.innerHTML = allowedGuesses;
}




function userGuesses(letterGuessed) {
	allowedGuesses--;
	remainingChances.innerHTML = allowedGuesses
	 if (currentWord.name.indexOf(letterGuessed) === -1) {
    	wrongKey.push(letterGuessed);
    	lettersGuessedElement.innerHTML = wrongKey.join(', ');
  } else {
    for (var i = 0; i < currentWord.name.length; i++) {
      if (currentWord.name[i] === letterGuessed) {
        correctKey[i] = letterGuessed;
        correctArr.push(correctKey[i]);
      }
    }

    carElement.innerHTML = correctKey.join(' ');
  }
}




function checkWin() {
  if (correctKey.indexOf('_') === -1) {
    alert('You Won!');
    wrongKey=[];
    lettersGuessedElement.innerHTML = "";
    correctKey=[];
    correctArr = [];
    win++
    winElement.innerHTML = 'Wins: ' + win;
    initalize()
  } else if (allowedGuesses === 0) {
    alert('You Lost!');
    wrongKey = [];
    lettersGuessedElement.innerHTML ="";
    correctKey=[];
    loss++;
    lossElement.innerHTML = 'Loss: ' + loss;
    initalize();
  }
}



document.onkeyup = function (event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  if(wrongKey.indexOf(letterGuessed) != -1 || correctArr.indexOf(letterGuessed) != -1 ) {
    alert('you have already selected that key')
  }
    else {
  userGuesses(letterGuessed);
  checkWin();

    }

};



initalize();

})();



