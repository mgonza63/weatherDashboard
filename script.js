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

          var lon = response.coord.lon;
          var lat = response.coord.lat;
          var uvKey = "d68917803103c196cc3a57791401fdc9"

          var uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + uvKey + "&lat=" + lat + "&lon=" + lon;

          $.ajax({
            url: uvURL,
            method: "GET"
          }).then(function(data) {
              console.log(data);
              console.log(uvURL);
              $("#uv").text("UV Index: " + data.value);
        })



          // $.get("https://api.openweathermap.org/data/2.5/uvi/forecast?appid=" + APIKey + "lat=" + lat + "&" + "lon=" + lon), function(data) {
           //   $("#uv").text("UV Index: " + data.value); }

        
    })



      
      

    });


});