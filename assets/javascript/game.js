$(document).ready(function () {

    

    var gem1 = Math.floor(Math.random() * 20);
    var gem2 = Math.floor(Math.random() * 20);
    var gem3 = Math.floor(Math.random() * 20);
    var gem4 = Math.floor(Math.random() * 20);

    var computerNumber = Math.floor(Math.random() * 50);

    var totalScore = 0;
    var Wins = 0;
    var Losses = 0;

    function win() {
        alert("You have won the game!");
        Wins++;
        $('#winNumber').text(Wins);
        reset();
    };

    function loss() {
        alert("You went over the number!");
        Losses++;
        $('#lossNumber').text(Losses);
        reset();
    };

    function findComputerNumber() {
        console.log(computerNumber);
        $('#idealNumber').text(computerNumber);
    };

    function reset() {
        gem1 = Math.floor(Math.random() * 20);
        gem2 = Math.floor(Math.random() * 20);
        gem3 = Math.floor(Math.random() * 20);
        gem4 = Math.floor(Math.random() * 20);
        totalScore = 0;
        computerNumber = Math.floor(Math.random() * 50);
        $('#score').text(totalScore);
    }

    function tellScore() {
        console.log(totalScore);
        $("#score").text(totalScore);
    };

    findComputerNumber();

        $('#jewel1').on('click', function () {

            totalScore += gem1;
            tellScore();
            if (totalScore === computerNumber) {
                win();
            } else if (totalScore > computerNumber) {
                loss();
            }
        });
        $('#jewel2').on('click', function () {
            totalScore += gem2;
            tellScore();
            if (totalScore === computerNumber) {
                win();
            } else if (totalScore > computerNumber) {
                loss();

            }
        });
        $('#jewel3').on('click', function () {
            totalScore += gem3;
            tellScore();
            if (totalScore === computerNumber) {
                win();

            } else if (totalScore > computerNumber) {
                loss();

            }
        });
        $('#jewel4').on('click', function () {
            totalScore += gem4;
            tellScore();
            if (totalScore === computerNumber) {
                win();

            } else if (totalScore > computerNumber) {
                loss();

            }
        });

});