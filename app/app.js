const searchBtn = document.querySelector('button')
let inp = document.querySelector('#text')
const body=document.querySelector('body')
let city=(inp.value).trim()

let lat;
let lon;

searchBtn.addEventListener("click",requestData("Tehran"))
function requestData(item) {
  console.log(item)
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${item}&limit=5&appid=a0ce5c26bf364fda8ce4f63cf08fdb6c`).then(res => res.json()
  ).then(deta => {
    lat= deta[0].lat
    lon = deta[0].lon
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a0ce5c26bf364fda8ce4f63cf08fdb6c`).then(repository=>repository.json()
    ).then(item=>{
      console.log(item)
    })
    console.log(lat)
  })}
