// variables

var input = document.querySelector('.city');
var cityname = document.querySelector('.cityname');
var celsius = document.querySelector('.celsius');
var cript = document.querySelector('.cript');
var button= document.querySelector('.find');
var icon = document.querySelector('.icon');

// adding button dynamically

button.addEventListener('click', function()

// sending request, function definiton

{
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=f9b55ed47ec85cc75b973ea3d76dd0c4')
    .then(responce => responce.json())
    .then(data => {
        
  var celsiusValue = Math.round(data['main']['temp']) + '&deg;C ';  
  var citynameValue = data['name'];
  var criptValue = data['weather'][0]['description'];
  var icon = 
  "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

  // what is showing in HTML

  // $('.icon').attr('src', icon);  // <--- mitä tämän tilelle, jos ei käytetä jQueryä?

  icon.innerHTML = icon;  // <--- tämä komento ei toimi
  cityname.innerHTML = citynameValue;
  cript.innerHTML = criptValue;
  celsius.innerHTML = celsiusValue;
  input.value ="";
  

})

// catching invalid city name

.catch(err => alert("Please, enter valid cityname."))
})