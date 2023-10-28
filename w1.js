
let inputvalue  = document.querySelector('#cityinput')
let btn = document.querySelector('#add')
let city = document.querySelector('#cityoutput')
let descrip = document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')
apik = "ceb1c52b55c0aa1da86c1351c4f5bc02"

function convertion(val){
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data => 
    {
        let nameval = data['name']
        let descrip = data['weather']['0']['description']
        let temprature = data['main']['temp']
        let wndspeed = data['wind']['speed']

        city.innerHTML=`Weather of <span>${nameval}<span>`
        temp.innerHTML= `Temprature: <span>${convertion(temprature)} C</span>`
        description.innerHTML =`Sky Conditions: <span>${descrip}<span>`
        wind.innerHTML= `Wind Speed: <span>${wndspeed} km/h <span>`
    })

    .catch(err => alert('You entered wrong City name'))
})
