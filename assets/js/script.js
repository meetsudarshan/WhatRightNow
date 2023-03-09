var button = document.querySelector('.button')
var food = document.querySelector('.restaurant')
var inputvalue = document.querySelector('.inputValue')
var temp = document.querySelector('.temp');
var temp1 = document.querySelector('.temp1');
var temp2 = document.querySelector('.temp2');
var temp3 = document.querySelector('.temp3');
var temp4 = document.querySelector('.temp4');
var temp5 = document.querySelector('.temp5');
var temp6 = document.querySelector('.temp6');
var Food = document.querySelector('.Food');
var Food1 = document.querySelector('.Food1');
var Food2 = document.querySelector('.Food2');
var Food3 = document.querySelector('.Food3');
var Food4 = document.querySelector('.Food4');
var Food5 = document.querySelector('.Food5');
var Food6 = document.querySelector('.Food6');
var Food7 = document.querySelector('.Food7');

button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputvalue.value}&units=imperial&appid=108dd9a67c96f23039937fe6f3c91963`)
    .then(response => response.json())
//   .then(function (data) {
//     console.log(data)
    .then(
        displayData)
    .catch(err => alert('Wrong City name')); 
  })
// })

const displayData=(weather)=>{
    temp.innerText=`Temperature:${weather.list[0].main.temp}°F`
    temp1.innerText=`Humidity:${weather.list[0].main.humidity}`
    temp2.innerText=`Feels like:${weather.list[0].main.feels_like}°F`
    temp3.innerText=`Temp_Max:${weather.list[0].main.temp_max}°F`
    temp4.innerText=`Temp_Min:${weather.list[0].main.temp_min}°F`
    temp5.innerText=`Rainfall:${weather.list[0].weather[0].description}`
    temp6.innerText=`Wind speed:${weather.list[0].wind.speed}milesperhour`
  }


food.addEventListener('click', function(){
fetch(`https://infinite-shelf-46659.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${inputvalue.value}&term=restaurants&radius=20000&open_now=true&sort_by=best_match&limit=20`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer " +
        "tGG1Ba32NNjhGYEXEXVxvfgmG30PXGm6mX66EvPkai4mV2im9Sxls7XfZeUwfmdG7yBENN4JqPHXWPfplkArxMfpvwi81rqkXUh2PLAKMopcFIUDL6QO-tX1ulwFZHYx",
      "Access-Control-Allow-Origin": "*",
    },
  })
  .then(response => response.json())
//   .then(function (data) {
//     console.log(data)
    .then(
        displayRestaurant)
    .catch(err => alert('Wrong City name')); 
})
// })

const displayRestaurant=(businesses)=>{
    Food.innerText=`${businesses.businesses[0].image_url}`
    Food1.innerText=`Name:${businesses.businesses[0].name}`
    Food2.innerText=`Phone:${businesses.businesses[0].display_phone}`
    Food3.innerText=`Review:${businesses.businesses[0].rating}`
    Food4.innerText=`Price:${businesses.businesses[0].price}`
    Food5.innerText=`Address:${businesses.businesses[0].location.address1}`
    Food6.innerText=`City:${businesses.businesses[0].location.city}`
    Food7.innerText=`distane:${businesses.businesses[0].display_phone}miles`
}