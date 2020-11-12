$(document).ready(function(){
    $("#getWeather").click(function(){
        var city = $('#city').val();
        var key = 'f9b55ed47ec85cc75b973ea3d76dd0c4';

        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            type: 'GET',
            data: {q:city, appid: key, units: 'metric'},

            success: function(data){
                var wf = '';
                $.each(data.weather, function(index, val){
                    wf += '<p><b>' + data.name + "</b><img src=" + val.icon + ".png></p>"+
                    data.main.temp + '&deg;C ' + ' | ' + val.main + ", " + 
                    val.description
                });
                $("#showWeather").html(wf);
            }
        })
    })
})