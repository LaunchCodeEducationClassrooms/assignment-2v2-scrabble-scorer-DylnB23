// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(word) {
  console.log("Let's play some scrabble!\n")
  wordToScore = input.question("Enter a word to score: ");
  
  
};

let simpleScore = function(word){
 
  word = word.toUpperCase();
	let simplePoints = 0;
 for (let i = 0; i < word.length; i++){
  simplePoints+= 1 
 }
return simplePoints
};

let vowelBonusScore = function(word){
 
  word = word.toUpperCase();
  let vowelScore = 0;
  for (let i = 0; i < word.length; i++){
    if (word[i] === 'A' || word[i] === 'E' || word[i] === 'I' || word[i] === 'O' || word[i] === 'U'){
   vowelScore+= 3
  } else {
   vowelScore+= 1
  }
  }
return vowelScore;
};

let scrabbleScore = function(word){
  word = word.toLowerCase();
  let newScore = 0;
  for (i = 0; i < word.length; i++) {
    newScore += newPointStructure[word[i]];
  }
  return newScore;
};

const scoringAlgorithms = [
  {name: 'Simple Score',
  description: 'Each letter is worth 1 point.',
  scoringFunction: simpleScore},
  {name: 'Bonus Vowels',
  description: 'Vowels are 3pts.',
  scoringFunction: vowelBonusScore},
  {name: 'Scrabble',
  description: 'The traditional scoring algorithim.',
  scoringFunction: scrabbleScore}
];

function scorerPrompt(word) {
let number = input.question(`Select a scoring algorithm:\n\n
0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}
Enter 0, 1, or 2: `)

  if (number === '0'){
  console.log (`Score for '${wordToScore}': ${scoringAlgorithms[0].scoringFunction(wordToScore)}`)

  } else if (number === '1'){
  console.log (`Score for '${wordToScore}': ${scoringAlgorithms[1].scoringFunction(wordToScore)}`)

  } else if (number === '2'){
  console.log (`Score for '${wordToScore}': ${scoringAlgorithms[2].scoringFunction(wordToScore)}`)

  }
}

function transform(oldPointStructure) {
  let newPointStructure = {};

  for (pointValue in oldPointStructure) {
    for (let i = 0; i < oldPointStructure[pointValue].length; i++) {
      newPointStructure[oldPointStructure[pointValue][i].toLowerCase()] = Number(pointValue);
    }
  }
  return newPointStructure
};

let newPointStructure = transform(oldPointStructure)


function runProgram() {
  
  initialPrompt();
  scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

