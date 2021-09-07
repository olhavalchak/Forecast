var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var button= document.querySelector('.submit');


button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  // console.log(data);
  let CelTemp = data['main']['temp']-273.15;
  let tempValue = CelTemp.toFixed(2);
  let nameValue = data['name'];
  let descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Sky - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})
.catch(err => alert("Wrong city name!"));
})