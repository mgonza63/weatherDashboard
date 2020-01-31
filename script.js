$(document).ready(function() {

    $("#submitWeather").on("click", function() {

        var cityInput = $("#cityInput").val();

        
    
        var APIKey = "6e314ca29224f22bfcbc9e31488128dc";
        
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + APIKey + "&units=imperial";
        
        var cityList = $("#cities").append("<button" + cityInput + "</button>");

        localStorage.setItem("ciudades", cityList);
        $("cities").html = localStorage.getItem("ciudades");

        $
        
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(queryURL);
    
          // Transfer content to HTML
          $("#cityName").html("<h1>" + response.name + "</h1>");

          var iconcode = response.weather[0].icon;
          var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";

          $('#wicon').attr('src', iconurl);

          $("#temp").text("Temperature: " + Math.floor(response.main.temp) + "°F");
          $("#humid").text("Humidity: " + response.main.humidity + "%");
          $("#wind").text("Wind Speed: " + response.wind.speed + "MPH");

          var lon = response.coord.lon;
          var lat = response.coord.lat;
          var uvKey = "d68917803103c196cc3a57791401fdc9";

          var uvURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + uvKey + "&lat=" + lat + "&lon=" + lon;

          // $.ajax({
          //   url: uvURL,
          //   method: "GET"
          // }).then(function(data) {
          //     console.log(data);
          //     console.log(uvURL);
          //     $("#uv").text("UV Index: " + data.value);

          var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?appid=" + uvKey + "&lat=" + lat + "&lon=" + lon + "&units=imperial";
          $.ajax({
            url: forecastURL,
            method: "GET"
          }).then(function(response) {
              console.log(response);
              console.log(forecastURL);
              // console.log(response.list[0].weather[0].description);
              

              $("#weatherDate").text(response.list[0].dt_txt.substring(0,10));

              $("#date1").text(response.list[0].dt_txt.substring(0,10));
              $("#icon1").text("Condition: " + response.list[0].weather[0].description)
              $("#temp1").text("Temp: " + Math.floor(response.list[0].main.temp) + "°F");
              $("#humid1").text("Humidity: " + response.list[0].main.humidity + "%");


              $("#date2").text(response.list[8].dt_txt.substring(0,10));
              $("#icon2").text("Condition: " + response.list[8].weather[0].description);
              $("#temp2").text("Temp: " + Math.floor(response.list[8].main.temp) + "°F");
              $("#humid2").text("Humidity: " + response.list[8].main.humidity + "%");


              $("#date3").text(response.list[16].dt_txt.substring(0,10));
              $("#icon3").text("Condition: " + response.list[16].weather[0].description);
              $("#temp3").text("Temp: " + Math.floor(response.list[16].main.temp) + "°F");
              $("#humid3").text("Humidity: " + response.list[16].main.humidity + "%");


              $("#date4").text(response.list[24].dt_txt.substring(0,10));
              $("#icon4").text("Condition: " + response.list[24].weather[0].description);
              $("#temp4").text("Temp: " + Math.floor(response.list[24].main.temp) + "°F");
              $("#humid4").text("Humidity: " + response.list[24].main.humidity + "%");


              $("#date5").text(response.list[32].dt_txt.substring(0,10));
              $("#icon5").text("Condition: " + response.list[32].weather[0].description);
              $("#temp5").text("Temp: " + Math.floor(response.list[32].main.temp) + "°F");
              $("#humid5").text("Humidity: " + response.list[32].main.humidity + "%");

              
          });
        })

        
    // })



      
      

    });


});