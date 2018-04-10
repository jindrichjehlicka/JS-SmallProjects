const storage = new Storage();
//getlocatin data
const weatherLocation = storage.getLocationData()
// init weather
const weather = new Weather(weatherLocation.city,weatherLocation.state);
const ui = new Ui();


//get weather on dom load
document.addEventListener("DOMContentLoaded", getWeather)

//Chnage location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.chanceLocation(city, state)
  storage.setLocationData(city, state)
  //get and dispaly weather
  getWeather();

  //close modal
  $('#locModal').modal('hide')
})

//Get weather
function getWeather() {
  
  weather.getWeather() //return promise
    .then(weather => {
      
      ui.paint(weather);
    })
    .catch(err => console.log(err))

}

