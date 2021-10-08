const greeting = [
"Hello",
"Greetings",
"Salutations",
"Good day",
"What's up",
"Good morning",
"Hi",
"How do you do",
]

const message = [
"Have you seen my duck?",
"What a beautiful day in the neighborhood!",
"You look nice today.",
"OK love you byeeeee!",
"Why are you looking at me like that?",
"Would you like to try some delicious seaweed?",
"I want chips!",
"Don't come over here!"
]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const randGreet = greeting[getRandomInt(greeting.length)];
const randMessage = message[getRandomInt(message.length)];


// this code for user input 
// copied from https://www.codecademy.com/articles/getting-user-input-in-node-js
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
readline.question('Who are you?  ', name => {
  console.log(`${randGreet}, ${name}! ${randMessage}`);
  readline.close();
});