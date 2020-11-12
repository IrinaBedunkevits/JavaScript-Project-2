var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

button.addEventListener('click', function()

{
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=f9b55ed47ec85cc75b973ea3d76dd0c4')
    .then(responce => responce.json())
    .then(data => {
        
  var tempValue = Math.round(data['main']['temp']) + '&deg;C ';  
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var icon = 
  "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

  $('.icon').attr('src', icon);

  main.innerHTML = nameValue;
  desc.innerHTML = descValue;
  temp.innerHTML = tempValue;
  input.value ="";

})

.catch(err => alert("Can´t find city"))
})