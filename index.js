// Global Var/ QuerySelectors
var randomAnswer = [
'It is certain.',
'It is decidedly so.',
'Without a doubt.',
'Yes - definitely.',
'You may rely on it.',
'As I see it, yes.',
'Most likely.',
'Outlook good.',
'Yes.',
'Signs point to yes.',
'Reply hazy, try again.',
'Ask again later.',
'Better not tell you now.',
'Cannot predict now.',
'Concentrate and ask again.',
"Don't count on it.",
'My reply is no.',
'My sources say no.',
'Outlook not so good.',
'Very doubtful.'
];

var body = document.querySelector('body');
var form = document.querySelector('form');
var eightBall = document.querySelector('.eight-ball')
var questionInput = document.querySelector('textarea')
var messageQuestion = document.querySelector('h6')
var messageAnswer = document.querySelector('h4')
var messageField = document.querySelector('div')
var clearBtn = document.querySelector('.clear-btn')
// Event Listeners
body.addEventListener('click', clickHandler);
// body.addEventListener('keyup', keyupHandler);

// Functions
function clickHandler(event){
    if(event.target.classList.contains('submit-btn')){
      displayMessage();
    }
    if (event.target.classList.contains('clear-btn')){
      clearPage();
    }
};

// function testFunction(){
//   alert('HI!');
// }

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function displayMessage(){
  createMessage();
  eightBall.classList.add('hidden');
  messageField.classList.remove('hidden');
  clearBtn.classList.add('enabled');
  form.reset();
};

function createMessage(){
  messageQuestion.innerText = `"${questionInput.value}"`;
  messageAnswer.innerText = randomAnswer[getRandomIndex(randomAnswer)];
};

function clearPage(){
  eightBall.classList.remove('hidden');
  messageField.classList.add('hidden');
  clearBtn.classList.remove('enabled');
};
