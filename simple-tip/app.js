'use strict';

//OPTIONONE_______________________________________________________________


// function newArray()
// {
//         const dollarhour = document.getElementById("firstNumber").value;
//         const array = document.getElementById("secondNumber").value;

//         const newArray = array.map(x => x * dollarhour);
//         console.log(newArray);       


//         document.getElementById("result").innerHTML = newArray;
// }




//OPTIONTWO_______________________________________________________________

// function newArray() {
//     var moneyperhour = document.getElementById("firstNumber").value;
//     var array = document.getElementById("secondNumber").value;
//         for(var i = 0; i < array.length; i++)
//         {
//            let hi = array * moneyperhour;
//              document.getElementById("result").innerHTML = hi;
//         }
        
//     }
    




//OPTIONTHREE_______________________________________________________________
// const array = document.getElementById("secondNumber");
// const dollarperhour = document.getElementById("firstNumber");


// function newArray(array,dollarperhour){
//     const result = array.map(function(x){
//         return x * dollarperhour;
//     })
//     return result;

//   }

//   document.getElementById("result").innerHTML = newArray;



// FINAL EASY SOLUTION TO JUST BE CALLED ON SCREW FRONT END____________________________
//Here fill in how many hours each person has with commas inbetween.
let HoursPerWeek = [1,2,3];

//Here fill in how many dollars per hour we made. (How much cash divided by total hours)
let DollarPerHour = 18;


function newArray(array,dollarperhour){
    const result = array.map(function(x){
        return x * dollarperhour;
    })
    return result;

  }


  newArray(HoursPerWeek,DollarPerHour);



