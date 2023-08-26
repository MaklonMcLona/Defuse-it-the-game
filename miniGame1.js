

var numL = Math.floor(Math.random() *30) + 1;
var numF = Math.floor(Math.random() *30) + 1;

console.log(numL, numF);


if (numF > numL)
{
    var x = numL;
    var y = numF;
}

if(numF < numL)
{
    var x = numF;
    var y = numL;
}

if(numF == numL)
{
    var x = numF;
    var y = numL + 11;
}

console.log(x,y);


document.getElementById("context1").innerHTML = "Interval: from " + x + " to " + y;

let random = Math.floor(Math.random() * (y - x + 1)) + x;
document.getElementById("c1").value = random;

console.log(random);

let check = document.getElementById("c1").value;

console.log(check);


window.onload = function() 
{
    document.getElementById('numberJS').value = "";
}



function miniGame1()
{    
    let a = document.getElementById("numberJS").value;

    if(a != random)
    {
        document.getElementById("ans1").innerHTML = "That's not the number you are looking for...";
        document.getElementById("ans1").style.color = "#bc4855";
        document.getElementById("numberJS").value = "";
    }

    else
    {
        document.getElementById("ans1").innerHTML = "That's the number you are looking for!";
        document.getElementById("ans1").style.color = "#21fa91";
        document.getElementById("numberJS").style.color = "#21fa91";
    }
}