const searchBtn = document.querySelector('button')
let inp = document.querySelector('#text')
const body=document.querySelector('body')
const infoCity=document.querySelector('.Information-Weather-City')
const statusImg=document.querySelector('.status-weather-city')
let city="Tehran"
console.log(city)
let lat;
let lon;

searchBtn.addEventListener("click",requestData(inp.value))
function requestData(item) {
  city=item
  console.log(item)
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${item}&limit=5&appid=a0ce5c26bf364fda8ce4f63cf08fdb6c`).then(res => res.json()
  ).then(deta => {
    lat= deta[0].lat
    lon = deta[0].lon
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a0ce5c26bf364fda8ce4f63cf08fdb6c`).then(repository=>repository.json()
    ).then(item=>{
      console.log(item.weather)
      console.log(item.weather[0].description)
      infoCity.innerHTML=` <div class="City">
      <span>City</span>
      <p>${item.name}</p>
  </div>
  <div class="country">
      <span>Country</span>
      <p>${item.sys.country}</p>
  </div>
  <div class="discription">
  <span>Discription</span>
  <p>${item.weather[0].description}</p></div>
  <div class="wind">
  Wind Speed
      <span> : ${item.wind.speed}</span>  
      
      
   
      <p>   Deg:${item.wind.deg}</p>
  </div>`
  statusImg.innerHTML=`
  <span class='Weathercity'>City Weather${item.name}</span>
  <img src='https://openweathermap.org/img/wn/01n@2x.png'>`
    })
    // console.log(lat)
  })}
requestData('Tehran')