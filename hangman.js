let selectedWord, guessedLetters, mistakes, lives

let library = [
    "economics", "drill", "migration", "prefer", "ball", "basketball",
    "football", "soccer", "relationship", "dancer", "mobile", "government",
    "monster", "duck", "walrus", "dog", "kitty", "puppy", "elephant",
    "manager", "culture", "horseshoe", "identification", "talent", "inappropriate",
    "rapper", "jazz", "country", "apple", "banana", "mango", "pineapple",
    "fizz", "quiz", "jade", "gem", "diamond", "tax", "claim", "clam", "test",
    "program", "hangman","dear","bear","canvas","flask", "update", "spy","sly"
];


function letterButtons() {
    var buttons = '';
    var letters = "abcdefghijklmnopqrstuvwxyz"
    for(var i = 0; i < letters.length; i++){
        var letter = letters[i]
        buttons += '<button class="letter" id="' + letter + '" onClick="guessLetter(\'' + letter + '\')">' + letter + '</button>'

    }
    document.getElementById('button').innerHTML = buttons
}

function guessLetter(chosenLetter) {
    if(guessedLetters.indexOf(chosenLetter) === -1){
        guessedLetters.push(chosenLetter)
        document.getElementById(chosenLetter).setAttribute('disabled',true)
    }

    if(selectedWord.indexOf(chosenLetter) >= 0){
        updateProgress();
        if(complete()){
            winOrLoss('Great Job! You guessed the correct word!')
        }
    }
    else {
        mistakes++
        document.getElementById('guesses').textContent = lives - mistakes
        changeHangmanImg(lives - mistakes)

        if(mistakes === lives){
            winOrLoss('Sorry, your guess is incorrect. The word was ' + selectedWord + '. Try Again!')
        }
    }
}

function winOrLoss(message, type) {

    let element = document.getElementById('message')
    element.textContent = message
    element.type = type
}

function changeHangmanImg(guessesLeft){
    var updateImage = document.querySelector('.hangmanImg img');
    var findImage;
    switch (guessesLeft) {
        case 5:
            findImage = "hangman step by step (1).jpg"
            break
        case 4:
            findImage = "hangman step by step (2).jpg"
            break
        case 3:
            findImage = "hangman step by step (3).jpg"
            break
        case 2:
            findImage = "hangman step by step (4).jpg"
            break
        case 1:
            findImage = "hangman step by step (5).jpg"
            break
        case 0:
            findImage = "hangman step by step (6).jpg"
            break
        default:
            findImage = "hangman step by step.jpg"
    }
    updateImage.src = findImage
}

function updateProgress() {
    var wordGuess = ''
    for (var i = 0; i < selectedWord.length; i++){
        var letter = selectedWord[i]

        if(guessedLetters.indexOf(letter) >= 0){
            wordGuess += letter;
        }
        else{
            wordGuess += " _ "
        }

    }
    document.getElementById('wordProgress').textContent = wordGuess
}

function complete() {
    return selectedWord.split('').every(letter => guessedLetters.includes(letter))
}



function randomWord() {
    selectedWord = library[Math.floor(Math.random() * library.length)]
    guessedLetters = []
    mistakes = 0
    lives = 6
    document.getElementById('guesses').textContent = lives
    document.getElementById('message').textContent = ''
    updateProgress()
    letterButtons()
    changeHangmanImg(lives)
}

window.onload = randomWord;
