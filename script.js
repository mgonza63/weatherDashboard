$(document).ready(function() {

    $("#submitWeather").on("click", function() {
        console.log("click");
        var cityInput = $("#cityInput").val();
        var cityList = $("#cityList");
        var cityName = $("#cityName");
    
        var APIKey = "6e314ca29224f22bfcbc9e31488128dc";
    
        // Here we are building the URL we need to query the database
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + APIKey;
    
        // We then created an AJAX call
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(queryURL);
    
          // Transfer content to HTML
          $("#cityName").html("<h1>" + response.name + "</h1>");
    
          $("#temp").text("Temperature (F) " + response.main.temp);
          $("#humid").text("Humidity: " + response.main.humidity);
          $("#wind").text("Wind Speed: " + response.wind.speed);
    })



      
      

    });


});