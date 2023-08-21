const apikey = "ed34eee33f9504b7db2f526566882477"
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".header input");
const searchBtn = document.querySelector(".header button");
const weatherIcon = document.querySelector('.weather-icon');
async function weather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apikey}`)

    if (response.status == 404) {
        alert("invalid Input");
        document.querySelector('.main').style.display = 'none';
    }
    var data = await response.json();


    document.querySelector(".city").innerHTML =data.sys.country +","+data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "&degC";
    document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
    document.querySelector(".speed").innerHTML =data.wind.speed +"km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src ="image/clouds.png"
    }else if (data.weather[0].main == 'Clear') {
        weatherIcon.src ='image/clear.png'
    }else if (data.weather[0].main =='Rain' ) {
        weatherIcon.src ='image/Rain'
    } else if (data.weather[0].main =='Drizzle' ) {
        weatherIcon.src ='image/drizzle.png'
    }else if (data.weather[0].main =='Mist' ) {
        weatherIcon.src ='image/Mist.png'
    }
    document.querySelector(".main").style.display = 'block';
}
searchBtn.addEventListener("click", ()=>{
    weather(searchBox.value);
})
