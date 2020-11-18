document.getElementById("blue").addEventListener("mousemove", go)

function go(){
    document.getElementById("blue").innerHTML="Blue";
    document.getElementById("blue").style.backgroundColor="blue";
}




document.getElementById("purple").addEventListener("mousemove", newFunction)

function newFunction(){
    document.getElementById("purple").innerHTML="Purple";
    document.getElementById("purple").style.backgroundColor="purple"
}


document.querySelectorAll("div")[3].addEventListener("mousemove", heyFunction);

function heyFunction(){
    document.querySelectorAll("div")[3].innerHTML="Pink";
    document.querySelectorAll("div")[3].style.backgroundColor="pink"
  
}

document.getElementById("blue").addEventListener("mouseleave", newGo)

function newGo(){
    document.getElementById("blue").innerHTML="Red";
    document.getElementById("blue").style.backgroundColor="Red";
}


document.getElementById("purple").addEventListener("mouseleave", anotherNewFunction)

function anotherNewFunction(){
    document.getElementById("purple").innerHTML="Green";
    document.getElementById("purple").style.backgroundColor="green";
}

document.querySelectorAll("div")[3].addEventListener("mouseleave", newHeyFunction);

function newHeyFunction(){
    document.querySelectorAll("div")[3].innerHTML="Yellow";
    document.querySelectorAll("div")[3].style.backgroundColor="yellow"
}



var myInput=document.getElementById("myInput")
var checkButton=document.getElementById("rightChoice")
checkButton.addEventListener("click", buttonFunction)
var result=document.getElementById("result")

function buttonFunction(){
console.log(correctAnswers)

if (myInput.value == correctAnswers[0]|| myInput.value==correctAnswers[1] || myInput.value==correctAnswers[2]){
    result.innerHTML="Correct color"
} else{
    result.innerHTML="Wrong color"
}
}
var correctAnswers=["Red", "Green", "Yellow"]  




var select=document.querySelector("select")
var secondPara=document.getElementById("secondPara")

select.addEventListener("change", setColor)

function setColor(){
    if (select.value == correctColor[0] || select.value == correctColor[1] || select.value == correctColor[2]){
        secondPara.innerHTML="Great, you're right"
    } else {
        secondPara.innerHTML="Sorry, try again"
    }
}

correctColor=["blue", "purple", "pink"]