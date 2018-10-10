import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components//Weather'; 


const API_KEY = 'b3a0e126658bea71b0c925f67e289995';

class App extends React.Component{
  //adding states
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined, 

  }
  //adding getWeather module  
  getWeather = async (event)=>{
    event.preventDefault();
    //getting the value from the input 
    const city = event.target.elements.city.value; 
    const country = event.target.elements.country.value;
    const api_call = await fetch(` http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);

    const data = await api_call.json();
    console.log(data);
    //adding condition to render the setState 
    if(city && country){
      //setState;
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country:data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
     });
    }else{
      //handling error when uses don't enter city and country
      this.setState({
        temperature: this.state.temperature,
        city: this.state.city,
        country:this.state.country,
        humidity: this.state.humidity,
        description: this.state.description,
        error: "Please enter the city and country"
      });
    }
     
}


 render(){
   return(
     //return JSX 
     <div>
       <Titles /> 
       <Form getWeather={this.getWeather}/> 
       <Weather 
        temperature = {this.state.temperature} 
        city = {this.state.city} 
        country = {this.state.country} 
        humidity = {this.state.humidity} 
        description = {this.state.description} 
        error ={this.state.error}
        />
     </div>


   )
 }
}
export default App;