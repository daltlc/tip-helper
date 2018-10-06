'use strict';
// function multiplyBy()
// {
//         const dollarhour = document.getElementById("firstNumber").value;
//         const array = document.getElementById("secondNumber").value;

//         const newArray = array.map(x => x * dollarhour);
//         console.log(newArray);       


//         document.getElementById("result").innerHTML = newArray;
// }


function multiplyBy() {
var moneyperhour = document.getElementById("firstNumber").value;
var array = document.getElementById("secondNumber").value;
    for(var i = 0; i < array.length; i++)
    {
       let hi = array * moneyperhour;
         document.getElementById("result").innerHTML = hi;
    }
    
}