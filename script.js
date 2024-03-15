const apikey="c2677187a87716bcfbf0ab5f0c1bab30";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".searchbtn");
const weathericon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const respose=await  fetch(apiurl + city + `&appid=${apikey}`);

    if(respose.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    else{
        var data=await respose.json();

        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML=data.wind.speed + " km/h";
    
        if(data.weather[0].main== "clouds"){
            weathericon.src="img/clouds.png";
        }
        else if(data.weather[0].main== "Clear"){
            weathericon.src="img/clear.png";
        }
        else if(data.weather[0].main== "Rain"){
            weathericon.src="img/rain.png";
        }
        else if(data.weather[0].main== "Drizzle"){
            weathericon.src="img/drizzle.png";
        }
        else if(data.weather[0].main== "Mist"){
            weathericon.src="img/mist.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";


    }
   
}

searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})
