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