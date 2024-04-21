function display(){
    let city = document.getElementById("city").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=0fedb1350554d8dce3dfefd27cf8e67a`)
    .then(response => response.json())
    .then(data =>(showWeatherDetail(data)))
    .catch(err => {console.log(err)})
}
result = document.getElementById("result")

function showWeatherDetail(data){
    result.innerHTML = `<h4>City Name: ${data.name}</h4>
                        <p>City Temprature: ${data.main.temp}</p>`;
}