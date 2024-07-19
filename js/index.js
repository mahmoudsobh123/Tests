
var myName = "ABDULRAHIM ABDULLAH ABED";
var index = 1;
var Name = document.querySelector(".name")

function writeText(){
    Name.textContent = myName.slice(0,index)
    index++

    if(index>myName.length){
        index = 1;
    }
}

setInterval(function(){
    writeText()
} , 300)
