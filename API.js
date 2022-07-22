window.onload = function () {
    var Toronto = document.getElementById('Toronto');
    var Sudbury = document.getElementById('Sudbury');
    Toronto.onclick = Weather;
    Sudbury.onclick = Weather;
    
    function Weather(event) {
        var location = document.getElementById('location');
        var temperature = document.getElementById('temperature');
        var conditions = document.getElementById('conditions');
        var icon = document.getElementById('icon');
        var feels_like = document.getElementById('feels_like');
        var errormsg = document.getElementById('errormsg');

        // create a variable for my API key
        const myApikey = "3d4143da10e59fef8940d7e2a3a44bcd";

        // create a variable  for the desired URL, concatenate in APikey var
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${event.target.innerText}&&appid=${myApikey}&units=metric`;

        // use our  XMLHttprequest  OBJECT to retrieve api data 
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = xhr.response;

                    // icon
                    var icon1 = data.weather[0].icon;
                    var iconurl = 'http://openweathermap.org/img/w/' + icon1 + '.png';
                    icon.innerHTML = ("<img src='" + iconurl + "'>");
                    location.innerHTML = data.name;

                    // temperature
                    temperature.innerHTML = data.main.temp;

                    // conditions
                    conditions.innerHTML = data.weather[0].description;

                    // feels Like
                    feels_like.innerHTML = data.main.feels_like;

                    // make output display block
                    document.getElementById('output').style.display = "block";

                } else {
                    errormsg.innerHTML = "API call was unsuccessful";
                    errormsg.style.display = 'block';
                }
            }
        }
        xhr.open('GET', url, true);
        xhr.responseType = "json";
        xhr.send(null);

    }
}