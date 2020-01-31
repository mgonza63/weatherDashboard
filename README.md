# weatherDashboard
This weather dashboard takes data from the openweather API and allows you to check the current weather and a 5-day forecast of any city you want. Here is a link to the live server:
https://mgonza63.github.io/weatherDashboard/ - automatic!
[GitHub](https://mgonza63.github.io/weatherDashboard/)

![GitHub Logo](pic.png)
Format: ![Alt Text](url)

* I managed to get the three data collections to work, but for some reason the uv index would stop working and crash the website
    * I commented it out, so you don't experience any problems.

```javascript
          $.ajax({
             url: uvURL,
             method: "GET"
           }).then(function(data) {

             $("#uv").text("UV Index: " + data.value);

```
* Another problem that I encountered is that the icon for the weather shows on my project, but not on the live server
* I also could not get the localStorage to work, I need some practice with that.


Overall, I am really proud of this project, I thought I did a good job and, I learned a lot from it. It was fun to play around with the API, and I can't imagine all the things that can be done with them!
