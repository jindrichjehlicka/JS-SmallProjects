class Weather {
  constructor(city, state) {
    this.apiKey = '39915d8b3855ddd0';
    this.city = city
    this.state = state
  }

  //Fetch weather from api

  async getWeather() {
    const response = await fetch(`https://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json()

    return responseData.current_observation;//only one object based on the api

  }

  //change weather location
  chanceLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}