let hsaTeam = ["Barrett", "Matt", "Jody", "Lucian", "Ron", "Ann", "Dan", "Gordon", "Miguel"];
const bCall = document.getElementById('buttonCall');
let counter; 
let ranRetro = [];


function randomNumGen(){
  // var counter = Math.floor((Math.random(hsaTeam) * 8) +0); 
  var counter = Math.floor(Math.random() * hsaTeam.length); 
  console.log(counter)
  return counter
};

function yourUp(){
  document.getElementById("h3").innerHTML = hsaTeam[guessWho] + " You're Up!" ;
  document.getElementById('buttonCall').style.display='none'
};

function retro(){
  if(hsaTeam.length === 0){
    hsaTeam = ranRetro;
    ranRetro = [];
    var guessWho = randomNumGen();
    yourUp();
    ranRetro.push(hsaTeam[guessWho]);
    hsaTeam.splice(guessWho, 1);
  } else {
    var guessWho = randomNumGen();
    yourUp();
    ranRetro.push(hsaTeam[guessWho]);
    hsaTeam.splice(guessWho, 1);
  }
};

bCall.addEventListener('click', function(){
    retro();
    console.log("yes this works");
});


document.getElementById("reset").addEventListener('click', function(){
  counter;
  document.getElementById("h3").innerHTML = "[==================]" ;
  document.getElementById('buttonCall').style.display='inline-block	'
});

