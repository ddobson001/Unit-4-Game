//set random numbers
$( document ).ready(function() {
let generateRandomNumber = function (start, range) {

    let getRandom = Math.floor((Math.random() * (range - start)) + start);
    return getRandom;
}
$("#number-to-guess").append(generateRandomNumber(30, 100));

//each crystal needs value
let images = [
    "assets/images/blue.jpg",
    "assets/images/darkblue.jpg",
    "assets/images/pink.jpg",
    "assets/images/red.jpg"
]; // 4

let counter = 0;


function generateCrystal(image) {
    let randomNumber = generateRandomNumber(1, 15);

    return `  
        <div class="col-md-3">
            <input 
                class="crystal" 
                type="image" 
                src=${image}
                data-crystalvalue=${randomNumber}
                alt="blue crystal"
            >
        </div>
    `
}

for (let i = 0; i < images.length; i++) {
    let image = images[i];
    let crystal = generateCrystal(image);
    $('.crystal-container').append( crystal );
}




//each crystal clicked adds score
$(".crystal").on("click", function () {
    let crystalValue = ($(this).attr("data-crystalvalue"));

    crystalValue = parseInt(crystalValue);
  
    counter += crystalValue;

    $("#score").text(counter);

    if ($("#score") === $("#number-to-guess")) {
       alert("You win!");
     }

     else if (counter >= generateRandomNumber) {
      alert("You lose!!");
     }

});

});
//each click add to total sum

//check to see if total equals random number picked
