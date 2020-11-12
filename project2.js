$(document).ready(function(){
    $.get(
        "http://api.openweathermap.org/data/2.5/weather",
        {
            "id" : "491422",
            "appid" : "f9b55ed47ec85cc75b973ea3d76dd0c4"
        },
        function(data){
            console.log(data);
        }
    );
});