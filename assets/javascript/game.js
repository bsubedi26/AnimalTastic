$(document).ready(function() {
    var animals = ["dog", "lion", "tiger", "panda", "kangaroo","elephant"];
    //Top header title
    $("#top").html("Multiple GIFs Action!<hr>Click a button or add a button!")
    //Adding to the list of buttons
    function renderButtons() {
        $("#animalButtons").empty();
        for (var i = 0; i < animals.length; i++) {
            $("#animalButtons").append("<button>" + animals[i] +
                "</button>");
        }
    }
    renderButtons();
    //Submit user input to the animals array when clicking submit button
    $("#addAnimal").on("click", function() {
            var input = $("#animal-input").val().toLowerCase().trim();
            //If user input is blank
            if (input == "") {
                alert("Type a word!");
                return false;
            }
            //Checks for duplicate word inputs
            if ($.inArray(input, animals) > -1) {
                alert("Word is already there!");
                return false;
            }
            animals.push(input);
            console.log(animals);
            renderButtons();
            $("#top").hide(3000);
            return false;
        })

//document ready function closer
});