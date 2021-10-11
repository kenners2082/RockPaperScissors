  let userResponse = '';
  let compResponse = '';

const compArray = [
  "Rock",
  "Paper",
  "Scissors"
];

//random string from array
function randomizer(){
  let randomCompResponse = compArray[Math.floor(Math.random()*compArray.length)];
  return randomCompResponse;
  };
//plays game
function playGameFunc(userResponse, compResponse) {
  compResponse = randomizer();
  getUserResponse =document.getElementById("userResponse");
  userResponse = getUserResponse.value;
  //console.log(getUserResponse.value);
  console.log(compResponse);
  document.getElementById("comp-results").innerHTML = 'Computer Plays >> ' + compResponse;
  if (userResponse === compResponse) {
    document.getElementById("results").innerHTML = 'It\'s a tie! Try again :)';
    return 'It\'s a tie! Try again :)';
  } else if (userResponse === 'Rock' && compResponse === 'Scissors') {
    document.getElementById("results").innerHTML = 'You Win!!';
    //return 'You win!';
  } else if (userResponse === 'Scissors' && compResponse === 'Paper') {
        document.getElementById("results").innerHTML = 'You Win!!';
    //return 'You win!';
  } else if (userResponse === 'Paper' && compResponse === 'Rock') {
        document.getElementById("results").innerHTML = 'You Win!!';
    //return 'You win!';
  } else {
        document.getElementById("results").innerHTML = 'You Lose :(';
        return 'You Lose :(';
  }
};

playGameFunc(userResponse, compResponse);



