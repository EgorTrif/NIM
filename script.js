const game = document.getElementById("game");
const body = document.getElementById("body");
        body.style.background = "url(./board.jpg)";
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "1536px 754px"
        body.style.color = "white";
        body.style.textAlign = "center";
        body.style.fontFamily = "Schoolbell";
        
const h1 = document.createElement("h1");
    h1.style.marginTop = "70px";
    h1.innerHTML = "Let's play the game 'NIM'!";
    game.appendChild(h1);

const p = document.createElement("p")
    p.style.margin = "5px 100px 5px 100px"
    p.style.fontSize = "20pt"
    p.innerHTML = "The rules are simple, 1st player chooses a number from 1 to 9, then 2nd player adds any number from 1 to 9 to 1st player's number. Both players continue to add each other's numbers until the sum of all numbers reach 100. Who stop at 100 wins!"
    game.appendChild(p);
    
/*const p = document.createElement("p");
const h = document.createElement("h2");
    h.innerHTML = "Settings";
const maxNumDiv = document.createElement("div");
maxNumDiv.innerHTML = "We are playing from 0 to max number:";
const maxNum = document.createElement("input");
maxNum.type = "number";
maxNum.step = "10";
maxNum.min = "10";
maxNum.max = "1000";
maxNum.style.width = "50px";
maxNum.style.height = "15px";
maxNum.style.backgroundColor = "transparent";
maxNum.style.outline = "none";
maxNum.style.color = "white";
maxNum.style.fontFamily = "inherit";
maxNum.style.border = "2px solid #fff";
maxNum.style.margin = "10px";

const maxAddDiv = document.createElement("div");
maxAddDiv.innerHTML = "Adding numbers from 1 to max number:";
const maxAdd = document.createElement("input");
maxAdd.type = "number";
maxAdd.step = "1";
maxAdd.min = "2";
maxAdd.max = "10";
maxAdd.style.width = "50px";
maxAdd.style.height = "15px";
maxAdd.style.backgroundColor = "transparent";
maxAdd.style.outline = "none";
maxAdd.style.color = "white";
maxAdd.style.fontFamily = "inherit";
maxAdd.style.border = "2px solid #fff";
maxAdd.style.margin = "10px";

game.appendChild(p);
p.appendChild(h);
p.appendChild(maxNumDiv);
maxNumDiv.appendChild(maxNum);
p.appendChild(maxAddDiv);
maxAddDiv.appendChild(maxAdd);*/
    
const div = document.createElement("div");
div.style.display = "none";
div.style.fontSize = "18pt";
div.style.color = "#ff99ed";

const div1 = document.createElement("div");
div1.style.margin = "10px";
div1.style.fontSize = "30pt";
div1.innerHTML = "1st player choose a number and write it down here: ";

const div2 = document.createElement("div");
div2.style.margin = "10px";
div2.style.fontSize = "30pt";
div2.style.display = "none";
div2.innerHTML = "2nd player choose a number and write it down here: "

const input1 = document.createElement("input");
input1.type = "number";
input1.style.backgroundColor = "transparent";
input1.style.outline = "none";
input1.style.color = "white";
input1.style.fontFamily = "inherit";
input1.style.fontSize = "60px"
input1.style.border = "2px solid #fff";
input1.style.height = "80px";
input1.style.width = "80px";

const input2 = document.createElement("input");
input2.type = "number";
input2.style.backgroundColor = "transparent";
input2.style.outline = "none";
input2.style.color = "white";
input2.style.fontFamily = "inherit";
input2.style.fontSize = "60px"
input2.style.border = "2px solid #fff";
input2.style.height = "80px";
input2.style.width = "80px";
input2.style.display = "none";

const div0 = document.createElement("div");
div0.style.margin = "10px";
div0.innerHTML = "Press 'Enter' after your move.";

const sum = document.createElement("div");
sum.style.fontSize = "50pt";
sum.innerHTML = "0";

const check = document.createElement("div")
check.style.fontSize = "30pt";

game.appendChild(div);
div.appendChild(div2);
div.appendChild(div1);
div.appendChild(input1);
div.appendChild(input2);
div.appendChild(div0);
div.appendChild(sum);
div.appendChild(check);


const div00 = document.createElement("div");
div00.style.display = "none";
div00.style.fontSize = "18pt";
div00.style.color = "#00bfff";

const div01 = document.createElement("div");
div01.style.margin = "10px";
div01.style.fontSize = "30pt";
div01.innerHTML = "Player choose a number and write it down here: ";

const div02 = document.createElement("div");
div02.style.margin = "10px";
div02.style.fontSize = "30pt";
div02.style.display = "none";
div02.innerHTML = "Computer choose a number"

const input01 = document.createElement("input");
input01.type = "number";
input01.style.backgroundColor = "transparent";
input01.style.outline = "none";
input01.style.color = "white";
input01.style.fontFamily = "inherit";
input01.style.fontSize = "60px"
input01.style.border = "2px solid #fff";
input01.style.height = "80px";
input01.style.width = "80px";

const div0_0 = document.createElement("div");
div0_0.style.margin = "10px";
div0_0.innerHTML = "Press 'Enter' after your move.";

const sum01 = document.createElement("div");
sum01.style.fontSize = "50pt";
sum01.innerHTML = "0";

const check01 = document.createElement("div");
check01.style.fontSize = "30pt";

const btnComp = document.createElement("button");
btnComp.style.margin = "20px";
btnComp.style.width = "200px";
btnComp.style.height = "50px";
btnComp.style.border = "2px solid #fff";
btnComp.style. borderRadius = "10px";
btnComp.style.backgroundColor = "transparent";
btnComp.style.outline = "none";
btnComp.style.color = "white";
btnComp.style.fontSize = "20pt";
btnComp.style.fontFamily = "inherit";
btnComp.style.display = "none";
btnComp.innerHTML = "Computer turn";

btnComp.onmouseover = function(){
    btnComp.style.color = "#00bfff";
    btnComp.style.border = "5px solid #00bfff";
}
btnComp.onmouseout = function(){
    btnComp.style.color = "white";
    btnComp.style.border = "5px solid #fff";
}

game.appendChild(div00);
div00.appendChild(div02);
div00.appendChild(div01);
div00.appendChild(input01);
div00.appendChild(div0_0);
div00.appendChild(btnComp);
div00.appendChild(sum01);
div00.appendChild(check01);

const btn1 = document.createElement("button");
btn1.style.margin = "20px";
btn1.style.width = "300px";
btn1.style.height = "300px";
btn1.style.border = "5px solid #fff";
btn1.style. borderRadius = "10px";
btn1.style.backgroundColor = "transparent";
btn1.style.outline = "none";
btn1.style.color = "white";
btn1.style.fontSize = "40pt";
btn1.style.fontFamily = "inherit";
btn1.innerHTML = "Player vs Player";

const btn2 = document.createElement("button");
btn2.style.margin = "20px";
btn2.style.width = "300px";
btn2.style.height = "300px";
btn2.style.border = "5px solid #fff";
btn2.style. borderRadius = "10px";
btn2.style.backgroundColor = "transparent";
btn2.style.outline = "none";
btn2.style.color = "white";
btn2.style.fontSize = "40pt";
btn2.style.fontFamily = "inherit";
btn2.innerHTML = "Player vs Computer";

btn1.onmouseover = function(){
    btn1.style.color = "#ff99ed";
    btn1.style.border = "5px solid #ff99ed";
 }
btn1.onmouseout = function(){
    btn1.style.color = "white";
    btn1.style.border = "5px solid #fff";
 }
btn2.onmouseover = function(){
    btn2.style.color = "#00bfff";
    btn2.style.border = "5px solid #00bfff";
}
btn2.onmouseout = function(){
    btn2.style.color = "white";
    btn2.style.border = "5px solid #fff";
}

game.appendChild(btn1);
game.appendChild(btn2);

btn1.addEventListener('click',function() {
    btn1.style.display = "none";
    btn2.style.display = "none";
    div.style.display = "initial";
});

btn2.addEventListener('click',function() {
    btn1.style.display = "none";
    btn2.style.display = "none"
    div00.style.display = "initial";
});

let sumPlayers = 0;

input1.addEventListener('keydown', function(event){
    if (event.key == "Enter"){
        num = parseFloat(input1.value)
        if (num  == "") {
            check.innerHTML = "Please, choose number from 1 to 9!"
        } else if (num < 1 || num > 9 || parseInt(num) != num) {
            check.innerHTML = "Please, choose correct number!"
        }
        else {
            div1.style.display = "none";
            div2.style.display = "block";
            input1.style.display = "none";
            input1.value = "";
            input2.style.display = "initial";
            check.innerHTML = "";
            sumPlayers = sumPlayers + num;
            sum.innerHTML = sumPlayers;
        if (sumPlayers >= 100) {
            check.innerHTML = "Press F5 for new game";
            div2.innerHTML = "1st player win!"
            input2.style.display = "none";
            div0.style.display = "none";
        } 
        }}});
        
        
input2.addEventListener('keydown', function(event){
            if (event.key == "Enter"){   
                num = parseFloat(input2.value);
                if (num == "") {
                    check.innerHTML = "Please, choose number from 1 to 9!"
                } else if (num < 1 || num > 9 || parseInt(num) != num ) {
                    check.innerHTML = "Please, choose correct number!"
                }
                else {
                    div2.style.display = "none";
                    div1.style.display = "block";
                    input2.style.display = "none";
                    input2.value = "";
                    input1.style.display = "initial";
                    check.innerHTML = "";
                    sumPlayers = sumPlayers + num;
                    sum.innerHTML = sumPlayers;
                if (sumPlayers >= 100) {
                    check.innerHTML = "Press F5 for new game";
                    div1.innerHTML = "2nd player win!"
                    input1.style.display = "none";
                    div0.style.display = "none";
                }
                }}});
                

input01.addEventListener('keydown', function(event){
    if (event.key == "Enter"){   
    num = parseFloat(input01.value);
    if (num == "") {
        check01.innerHTML = "Please, choose number from 1 to 9!"
        } else if (num < 1 || num > 9 || parseInt(num) != num ) {
            check01.innerHTML = "Please, choose only number from 1 to 9!"}
        else {
        div01.style.display = "none";
        div02.style.display = "block";
        input01.style.display = "none";
        input01.value= "";
        div0_0.innerHTML = "Click button for Computer turn";
        btnComp.style.display = "initial";
        check01.innerHTML = "";
        sumPlayers = sumPlayers + num;
        sum01.innerHTML = sumPlayers;
                            
        if (sumPlayers >= 100) {
            check01.innerHTML = "Press F5 for new game";
            div02.innerHTML = "Player win!"
            input01.style.display = "none";
            div0_0.style.display = "none";
            btnComp.style.display = "none";
        }
        }}});

btnComp.addEventListener('click', function(){
        num = myRandom(1, 9);
        div02.style.display = "none";
        div01.style.display = "block";
        btnComp.style.display = "none";
        input01.style.display = "initial";
        div0_0.innerHTML = "Press 'Enter' after your move.";
        check01.innerHTML = "";
        sumPlayers = sumPlayers + num;
        sum01.innerHTML = sumPlayers;
                                        
        if (sumPlayers >= 100) {
            check01.innerHTML = "Press F5 for new game";
            div01.innerHTML = "Computer win!"
            input01.style.display = "none";
            div0_0.style.display = "none";
            btnComp.style.display = "none";}
        });

function myRandom(fromN, toN) {
    return Math.floor(Math.random()*(toN - fromN + 1))+fromN
}