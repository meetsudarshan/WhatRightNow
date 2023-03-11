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
var temp7 = document.querySelector('.temp7');
var Food = document.querySelector('.Food');
var Food8 = document.getElementById('rImage').src;
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
    for (var i = 0; i <5; i++) {
    temp.innerText=`Temperature:${weather.list[i].main.temp}°F`
    temp1.innerText=`Humidity:${weather.list[i].main.humidity}`
    temp2.innerText=`Feels like:${weather.list[i].main.feels_like}°F`
    temp3.innerText=`Temp_Max:${weather.list[i].main.temp_max}°F`
    temp4.innerText=`Temp_Min:${weather.list[i].main.temp_min}°F`
    temp5.innerText=`Rainfall:${weather.list[i].weather[i].description}`
    temp6.innerText=`Wind: ${weather.list[i].wind.speed}mph`
    temp7.innerText=`${weather.city.name}`
  }
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
    for (var j = 0; j <5; j++) {
    // Food.innerText=`${businesses.businesses[j].image_url}`
    Food8.innerText=`${businesses.businesses[j].image_url}`
    // h.setAttribute(businesses.businesses[j].image_url)   
    Food1.innerText=`Name:${businesses.businesses[j].name}`
    Food2.innerText=`Phone:${businesses.businesses[j].display_phone}`
    Food3.innerText=`Review:${businesses.businesses[j].rating}`
    Food4.innerText=`Price:${businesses.businesses[j].price}`
    Food5.innerText=`Address:${businesses.businesses[j].location.address1}`
    Food6.innerText=`City:${businesses.businesses[j].location.city}`
    Food7.innerText=`distane:${businesses.businesses[j].display_phone}miles`
}
}