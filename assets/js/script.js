var button = document.querySelector('.button')
var food = document.querySelector('.restaurant')
var inputvalue = document.querySelector('.inputValue')
// var temp = document.querySelector('.temp');
// var temp1 = document.querySelector('.temp1');
// var temp2 = document.querySelector('.temp2');
// var temp3 = document.querySelector('.temp3');
// var temp4 = document.querySelector('.temp4');
// var temp5 = document.querySelector('.temp5');
// var temp6 = document.querySelector('.temp6');
// var temp7 = document.querySelector('.temp7');
// var Food = document.querySelector('.Food');
// var Food1 = document.querySelector('.Food1');
// var Food2 = document.querySelector('.Food2');
// var Food3 = document.querySelector('.Food3');
// var Food4 = document.querySelector('.Food4');
// var Food5 = document.querySelector('.Food5');
// var Food6 = document.querySelector('.Food6');
// var Food7 = document.querySelector('.Food7');
// var Food8 = document.querySelector('.Food8');
var restaurantsData = document.querySelector('.restColumn')
var inputField = document.querySelector(".inputValue");
var previousLocation = localStorage.getItem("location");
var userInput = document.getElementById("userSreach");
var fetchResButton = document.getElementById("res");
var restaurantsData = document.getElementById("resData");
var locCard = document.getElementById("locationCard");
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

if (previousLocation) {
  inputField.value = previousLocation;
}
var searchButton = document.querySelector(".button");
searchButton.addEventListener("click", function () {
  var inputValue = inputField.value
  localStorage.setItem("location", inputValue);
});

// var image = document.getElementById('image').src;


// button.addEventListener('click', function weatherAPI(){
//     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputvalue.value}&units=imperial&appid=108dd9a67c96f23039937fe6f3c91963`)
//     .then(response => response.json())
// //   .then(function (data) {
// //     console.log(data)
//     .then(
//         displayData)
//     .catch(err => alert('Wrong City name')); 
//   })
// })


// const displayData=(weather)=>{
//     for (var i = 0; i <5; i++) {
//     temp.innerText=`Temp:${weather.list[i].main.temp}°F`
//     temp1.innerText=`Humidity:${weather.list[i].main.humidity}`
//     temp2.innerText=`Feels like:${weather.list[i].main.feels_like}°F`
//     temp3.innerText=`Temp_Max:${weather.list[i].main.temp_max}°F`
//     temp4.innerText=`Temp_Min:${weather.list[i].main.temp_min}°F`
//     temp5.innerText=`Rain:${weather.list[i].weather[i].description}`
//     temp6.innerText=`Wind: ${weather.list[i].wind.speed}mph`
//     temp7.innerText=`${weather.city.name}`
//   }
// }

// var weatherMetric = {
//   temp: temp.value,
//   temp1: temp1.value,
//   temp2: temp2.value,
//   temp3: temp3.value,
//   temp4: temp4.value,
//   temp5: temp5.value,
//   temp6: temp6.value,
//   temp7: temp7.value
// };
// localStorage.setItem("weatherMetric", JSON.stringify(weatherMetric));
// renderMessage();

// button.addEventListener('click', function restaurantApi(){
// fetch(`https://infinite-shelf-46659.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${inputvalue.value}&term=restaurants&radius=20000&open_now=true&sort_by=best_match&limit=20`, {
//     method: "GET",
//     headers: {
//       Authorization:
//         "Bearer " +
//         "tGG1Ba32NNjhGYEXEXVxvfgmG30PXGm6mX66EvPkai4mV2im9Sxls7XfZeUwfmdG7yBENN4JqPHXWPfplkArxMfpvwi81rqkXUh2PLAKMopcFIUDL6QO-tX1ulwFZHYx",
//       "Access-Control-Allow-Origin": "*",
//     },
//   })
//   .then(response => response.json())
//   // .then(function (data) {
//   //   console.log(data)
//     .then(
//         displayRestaurant)
//     .catch(err => alert('Wrong City name')); 
// })
// })

// const displayRestaurant=(businesses)=>{
//     for (var j = 0; j <8; j++) {
//     // Food.innerText=`${businesses.businesses[j].image_url}`
//      Food1.innerText=`Name:${businesses.businesses[j].name}`
//     Food2.innerText=`Phone:${businesses.businesses[j].display_phone}`
//     Food3.innerText=`Review:${businesses.businesses[j].rating}`
//     Food4.innerText=`Price:${businesses.businesses[j].price}`
//     Food5.innerText=`Address:${businesses.businesses[j].location.address1}`
//     Food6.innerText=`City:${businesses.businesses[j].location.city}`
//     // Food7.innerText=`distance:${businesses.businesses[j].distance}miles`
//     Food8.innerText=`Type:${businesses.businesses[j].categories[2].title}`


// }
// }

function WeartherApiCallData(cData) {

}

function weatherApi() {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputvalue.value},US&units=imperial&appid=108dd9a67c96f23039937fe6f3c91963`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      locCard.textContent = "";

      console.log(data);
      var lati = data.city.coord.lat;
      console.log(lati);
      var long = data.city.coord.lon;
      console.log(long);
      var date = new Date().toLocaleDateString();


      // temp7.textContent = data.city.name;
      // temp8.textContent = date;
      // var weatherIcon =
      //   temp9.setAttribute('src', "")

      //main div for location and date
      var locationDate = document.createElement("div");
      locationDate.classList.add("column", "is-full");

      //div for two column in lcoation and date
      var locationDateDiv = document.createElement("div");
      locationDateDiv.classList.add("columns");

      //h2 for location
      var locationH2 = document.createElement("h2");
      locationH2.classList.add("column", "is-6");
      locationH2.textContent = data.city.name;

      //h2 for date
      var dateH2 = document.createElement("h2")
      dateH2.classList.add("column", "is-6");
      dateH2.textContent = date;

      // append data for location and date
      locationDateDiv.append(locationH2, dateH2);
      locationDate.append(locationDateDiv);
      locCard.append(locationDate);


      // temp7.innerText = `${data.city.name}`
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${long}&exclude=minutely,hourly,alerts&units=imperial&appid=108dd9a67c96f23039937fe6f3c91963`)
        .then(function (response) {
          return response.json();
        })
        .then(function (citydata) {
          console.log(citydata);
          
          //main div for current Weather
          var cWeather = document.createElement("div");
          cWeather.classList.add("column", "is-full");

          //columns for current weather

          var ccWeather = document.createElement("div");
          ccWeather.classList.add("columns");

          // clouds or not data
          var isClouds = document.createElement("h2")
          isClouds.classList.add("column", "is-4");
          isClouds.textContent = citydata.current.weather[0].description;

          // wind or not data
          var isWind = document.createElement("h2")
          isWind.classList.add("column", "is-4");
          isWind.textContent = "Wind " + citydata.current.wind_speed + " mph";

          // rain or not data
          var isRain = document.createElement("h2")
          isRain.classList.add("column", "is-4");
          isRain.textContent = "Humidity: " + citydata.current.humidity + "%";

          ccWeather.append(isClouds, isWind, isRain);
          cWeather.append(ccWeather);
          locCard.append(cWeather)


          //main div for waeter image and feel like 
          var ImageWeather = document.createElement("div");
          ImageWeather.classList.add("column", "is-full");

          //columns for image weather and feel like

          var IWeather = document.createElement("div");
          IWeather.classList.add("columns");


          var isImageDiv = document.createElement("div")
          isImageDiv.classList.add("column", "is-6");
          //image tage for weather image
          var isImage = document.createElement("img");
          var iconCode = citydata.current.weather[0].icon;
          isImage.textContent = iconCode;
          isImage.setAttribute("src", "https://openweathermap.org/img/wn/" + iconCode + "@2x.png")
          isImage.setAttribute("alt", "weater image");
          // temp card div

          var isTemp = document.createElement("div");
          isTemp.classList.add("column", "is-6");

          var isTempColumn = document.createElement("div");
          isTempColumn.classList.add("columns", "is-multiline");



          //h1 for temp
          var tempH1 = document.createElement("h2");
          tempH1.classList.add("column", "is-12");
          tempH1.textContent =  "Current Temp: " + citydata.current.temp + "°F";


          //h2 for feel like
          var tempH2 = document.createElement("h2")
          tempH2.classList.add("column", "is-12");
          tempH2.textContent = "Feels Like: " + citydata.current.feels_like + "°F";


          isImageDiv.append(isImage);
          IWeather.append(isImageDiv);
          isTempColumn.append(tempH1, tempH2);
          isTemp.append(isTempColumn);
          IWeather.append(isTemp)
          ImageWeather.append(IWeather);
          locCard.append(ImageWeather);

          console.log(citydata.daily);

          //main div for forecast Weather
          var fWeather = document.createElement("div");
          fWeather.classList.add("column", "is-full");
          fWeather.textContent = "";

          var dData = "";
          //temp8.innerText=`${citydata.current.dt}`

          // temp.innerText = `Temp:${citydata.current.temp}°F`
          // for (var i = 0 ; i <citydata.daily.length; i++) {
          //   var location = 
          // }
        })
        .then(function (d) {
          console.log(d)
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&appid=108dd9a67c96f23039937fe6f3c91963`)
            .then(function (response) {
              return response.json();
            }) 
          
            .then(function (dd) {
              console.log(dd);
            })
            
        })
        
    })
    .catch(err => modal.classList.add('is-active')); 
    
  modalBg.addEventListener('click', ()=> {
      modal.classList.remove('is-active');
    });
  }



function YelpApiCallData(callData) {
  var resturantCard = document.createElement("div");
  resturantCard.classList.add("column", "is-one-third")

  //main resturant card div
  var cardDiv = document.createElement("div");
  cardDiv.classList.add("card");


  //image div
  var imageDiv = document.createElement("div");
  imageDiv.classList.add("card-image");

  var imageFigure = document.createElement("figure");
  imageFigure.classList.add("image", "is-4by3")


  var resturantImage = document.createElement("img");
  // resturantImage.classList.add("card-image", "image", "is-4by3");
  resturantImage.setAttribute("src", callData.image_url)
  resturantImage.setAttribute("alt", "resturant image")



  //ceating card content
  var cardcontent = document.createElement("div");
  cardcontent.classList.add("card-content", "media-content");
  // cardDiv.append(cardcontent);


  //resturant name in card content
  var resturantName = document.createElement("p");
  resturantName.classList.add("title")
  resturantName.textContent = callData.name;
  // restaurantsData.append(resturantName);

  var resturantCategory = document.createElement("p");
  resturantCategory.classList.add("subtitle");
  resturantCategory.textContent = callData.categories[0].title;
  //console.log(resturantCategory);

  var rating = callData.rating;
  var reviewCount = callData.review_count;
  var resturantRating = document.createElement("p");
  resturantRating.textContent = "Reviews: " + rating + '/5 based on ' + reviewCount + ' reviews';
  // console.log(resturantRating);

  var resturantPhone = document.createElement("p");
  resturantPhone.textContent = callData.phone;


  var resturantAddress = document.createElement("p");
  var address = callData.location.display_address;
  var address11 = callData.location.display_address[0];
  console.log(address11);
  var address12 = callData.location.display_address[1];
  console.log(address12);
  var address13 = callData.location.display_address[2];
  console.log(address13);
  console.log(address11 + address12 + address13)
  if (address.length < 3) {
    resturantAddress.textContent = address11 + " " + address12;
  }
  else {
    resturantAddress.textContent = address11 + " " + address12 + " " + address13;
  }


  var MoreButton = document.createElement("a")
  MoreButton.classList.add("button");
  MoreButton.setAttribute("href", callData.url);
  MoreButton.textContent = "Get More Information on Yelp"

  imageFigure.append(resturantImage)
  imageDiv.append(imageFigure);
  cardcontent.append(resturantName, resturantCategory, resturantRating, resturantPhone, resturantAddress, MoreButton);
  cardDiv.append(imageDiv, cardcontent);
  resturantCard.append(cardDiv);
  restaurantsData.append(resturantCard);
}

function yelpApi() {
  //
  fetch(` https://infinite-shelf-46659.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${inputvalue.value}&term=restaurants&radius=40000&locale=en_US`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer " +
        "tGG1Ba32NNjhGYEXEXVxvfgmG30PXGm6mX66EvPkai4mV2im9Sxls7XfZeUwfmdG7yBENN4JqPHXWPfplkArxMfpvwi81rqkXUh2PLAKMopcFIUDL6QO-tX1ulwFZHYx",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }

      return response.json();

    })
    .then(function (data) {
      console.log(data);
      var businesses = data.businesses;
      restaurantsData.textContent = "";
      for (var j = 0; j < businesses.length; j++) {

        YelpApiCallData(businesses[j])
      }

    })

}
fetchResButton.addEventListener("click", weatherApi);
fetchResButton.addEventListener("click", yelpApi);


//added function to get enter keypress for user input with click 
inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
})
