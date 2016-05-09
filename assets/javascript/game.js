$(document).ready(function() {
    
    var animals = ["dog", "cat", "rabbit", "panda", "horse"];
// This is our API Key
    var APIKey = "4e126faaf4068437a0b8a3feabde8cbb"; // Create CODE HERE to get your own API Key

    // Here we are building the URL we need to query the database
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=Bujumbura&appid=" + APIKey;

    // We then created an AJAX call
    $.ajax({url: queryURL, method: 'GET'})
     
     .done(function(response) {
        var store = response;
        console.log(store);
        var a = $("ul li").val();
        console.log(a)
        
        $('.city').html("<h1>Bujumbura Weather Details</h1>");
        $(".wind").html("The coordinates are: Longitude: " + store.coord.lon +"<br>" +"Latitude: "  + store.coord.lat)
        
        // Create CODE HERE to Log the queryURL
        

        // Create CODE HERE to log the resulting object
        

         // Create CODE HERE to transfer content to HTML
        


        // Create CODE HERE to Calculate the temperature (converted from Kelvin )
        // Hint: To convert from Kelvin to Fahrenheight: F = (K - 273.15) * 1.80 + 32
    


        // Create CODE HERE to dump the Temperature content into HTML


    }); 



function renderButtons() {
    $("#animalButtons").empty();
    for (var i = 0; i < animals.length; i++) {
        $("#animalButtons").append("<button>"+animals[i]+"</button>");
    }
}

    $("#addAnimal").on("click", function() {
        var input = $("#animal-input").val();
        animals.push(input);
        console.log(animals);

        $("#animalButtons").append("<button>"+input+"</button>");

        renderButtons();
        return false;

    }) 
renderButtons();
    //ready function closer
    });
