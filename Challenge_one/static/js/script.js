//callenge one your age in days


function ageInDays(){
    var birthYear = prompt("what year were you born good sir...?");
    var age_in_days = (2018 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('your are ' + age_in_days + 'days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
    document.getElementById('ageInDays').remove();
}

function genCat(){
    var image = document.createElement('img');
    var div  = document.getElementById('flex-cat-gen');
    image.src = "https://i.imgur.com/EcZibMp.gif";
    div.appendChild(image);
}

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomToRpsInt());
    console.log('computer Choice: ', botChoice);
    
    result = decideWinner(humanChoice,botChoice);
    console.log(result);

    message = finalMsg(result); // won or lost {'msg':, 'you won':, 'green'}
    console.log(message);
   
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock' : {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'scissors': 0, 'rock': 1, 'paper': 0.5},
        'scissors':{'scissors': 0.5, 'rock': 0, 'paper': 1}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return[yourScore, computerScore];
}

function finalMsg([yourScore, computerScore]){

    if(yourScore === 0){
        return{'message': 'you lost', 'color': 'red'};
    }
    else if(yourScore === 0.5){
       return{'message': 'you tied', 'color': 'yellow'};
    }
    else{
        return{'message': 'you won', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalmsg){
    var imagesDataBase = {
        'rock': document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src

    }
    //remove all the immges 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var msgDiv = document.createElement('div');  

    humanDiv.innerHTML = "<img src ='" + imagesDataBase[humanImageChoice] + "' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);

    msgDiv.innerHTML = "<h1 style = 'color: " + finalmsg['color'] + "; font size: 60px; padding: 30px; '>" + finalmsg['message'] + "</h1>"

    document.getElementById('flex-box-rps-div').appendChild(msgDiv);

    botDiv.innerHTML = "<img src ='" + imagesDataBase[botImageChoice] + "'height = 150 width = 150 style ='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(botDiv);



}