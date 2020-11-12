$(document).ready(function(){
    $.getJSON('current.city.list.json', function(data){
        $('select').on('change', function(){
            var out = '';
            for(var key in data){
                if (data[key].country==$('select option:selected').val()){
                    out +=`<p value="${data[key].id}">${data[key].name}</p>`;
                }
            }
            $('#city').html(out);
            $('#city p').on('click', function(){
                $.get(
                    "http://api.openweathermap.org/data/2.5/weather",
                    {
                        "id" : "569143",
                        "appid" : "f9b55ed47ec85cc75b973ea3d76dd0c4"
                    },
                        function(data) {
                            let out='';
                            out += 'Weather'
                        }
                );
            });
        })
    });
});