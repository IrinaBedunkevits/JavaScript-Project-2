var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=metric&appid=f9b55ed47ec85cc75b973ea3d76dd0c4')
    .then(responce => responce.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;

        console.log(data);
    })

.catch(err => alert("Wrong city name!"))
})