import React from 'react';
import ReactDOM from 'react-dom';


var input_value;
var input_numbers = [];
var i;


ReactDOM.render(
    <div>
        <input id="text_holder" />
        <input id="clickMe" type="button" value="clickme" />

        <div id="inputs_holder" className="">
        </div>
    </div>
    , document.getElementById('tasks'));



function createDiv(id, className) {
    var div = document.createElement("div");
    div.id = id;
    div.className = className;
    return div;
}
function summation(list) {
    var sum =0;
    for (i = 0; i < list.length; i++) {
        sum = sum + parseInt(list[i]);
    }
    return sum;
}

function appendDiv() {

    input_value = document.getElementById("text_holder").value;
    input_numbers.push(input_value.match(/\d+/g));

    if (input_value == "") {

    } else {
        var x = createDiv("input_id", "input_class");

        x.textContent = summation(input_numbers);
        document.getElementById("inputs_holder").appendChild(x);
        document.getElementById("text_holder").value = "";
    }



}

document.getElementById("clickMe").onclick = appendDiv;

function factorial(n){
    var total = 1;
    for(i=1; i<=n;i++){
        total = total * i;
    }
    return total;
}

function reverseString(xyz) {
    xyz=xyz+'';
    return xyz.split("").reverse().join("");
}

function isPalindrome(xyz){

    if(reverseString(xyz) == xyz){
        console.log(true);
    }
    else{
        console.log(false);
    }

}
