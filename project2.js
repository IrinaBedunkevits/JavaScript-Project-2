var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

button.addEventListener('click', function(name){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=f9b55ed47ec85cc75b973ea3d76dd0c4')
    .then(responce => responce.json())
    .then(data => {
        
        var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";
        

        console.log(data);
    })

.catch(err => alert("Can´t find city"))
})