//set random numbers
let generateRandomNumber = function (start, range) {

    let getRandom = Math.floor((Math.random() * (range - start)) + start);
    return getRandom;
}
$("#number-to-guess").append(generateRandomNumber(30, 100));

//each crystal needs value
let numberOptions = [10, 5, 3, 7];

let counter= 0;

//for (let i = 0; i < numberOptions.length; i++) {
   
//}

//each crystal clicked adds score
$("#allCrystal").on("click", function() { 
 let imageCrystal=$(".crystal")
    
    $(imageCrystal).attr("data-crystalvalue", generateRandomNumber(1,5));

    let imageCrystal2=$(".crystal2")
    
    $(imageCrystal2).attr("data-crystalvalue", generateRandomNumber(6,10));
   
    let imageCrystal3=$(".crystal3")
    
    $(imageCrystal3).attr("data-crystalvalue", generateRandomNumber(11,15));

    let imageCrystal4=$(".crystal4")
    
    $(imageCrystal4).attr("data-crystalvalue", generateRandomNumber(16,18));

    let crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  console.log($(this));
    counter += crystalValue;

    alert("New score: " + counter);

    // if (counter === targetNumber) {
    //   alert("You win!");
    // }

    // else if (counter >= targetNumber) {
    //   alert("You lose!!");
    // }

  });

//each click add to total sum

//check to see if total equals random number picked

