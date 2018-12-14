$(document).ready(function () {

    ///Global Variables////
        let lose = 0;
        let wins = 0;
        let counter = 0;
        let images = [
            "assets/images/blue.jpg",
            "assets/images/darkblue.jpg",
            "assets/images/pink.jpg",
            "assets/images/red.jpg"
        ];

    ///Reset Game///
        function ResetGlobalVariables() {
            counter = 0;
        crystalValue = 0;
    
        };

        function initializeGame() {

///Generate Random Number to match////
        let generateRandomNumber = function (start, range) {
            let getRandom = Math.floor((Math.random() * (range - start)) + start);
            return getRandom;

        }
       
        let guess = generateRandomNumber(19, 120);
        $("#number-to-guess").append(guess);

        
      
////Generate Crystal and assign random number////
        function generateCrystal(image) {
            let randomNumber = generateRandomNumber(1, 12);
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
            $('.crystal-container').append(crystal);
        }






        //each crystal clicked adds score
        $(".crystal").on("click", function () {



            let crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
            $("#score").text(counter);

            if (counter === guess) {
                wins++;
                $("#wins").text(wins);
                ResetGlobalVariables();
                alert("Victory!");
                
            }

            else if (counter >= guess) {
                lose++;
                $("#lose").text(lose);
                ResetGlobalVariables();
               
                alert("Loser!!");
            }
        });
       

    };
    initializeGame();
})
//each click add to total sum
//check to see if total equals random number picked
