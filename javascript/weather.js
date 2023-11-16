const apiKey="8f70a9991ce5fb0e112bf54fa7786e79";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

    async function CheckWeather(city) {
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
   if(response.status==404)
   {
    document.querySelector(".unknown_city").style.display="block";
    document.querySelector(".weather").style.display="none";

}else {
    var data=await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".desc").innerHTML=data.weather[0].description;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
if(data.weather[0].main=="Clouds")
{
    weatherIcon.src="images/clouds.webp";
} 
else if(data.weather[0].main=="Clear")
{
    weatherIcon.src="images/clear.png";
}
 else if(data.weather[0].main=="Rain")
{
    weatherIcon.src="images/rainy.png";
}
else if(data.weather[0].main=="Drizzle")
{
    weatherIcon.src="images/drizzle.png";
}
else if(data.weather[0].main=="Mist")
{
    weatherIcon.src="images/mist.png";
}
else if(data.weather[0]=="Snow")
{
    weatherIcon.src="images/snow.png";
}else  if(data.weather[0].main=="Fog")
{
    weatherIcon.src="images/fog.png"; 
}

document.querySelector(".weather").style.display="block";


}
}



searchBtn.addEventListener("click",()=>{
    CheckWeather(searchBox.value);
});
