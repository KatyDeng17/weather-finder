import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components//Weather'; 


const API_KEY = 'b3a0e126658bea71b0c925f67e289995';

class App extends React.Component{

  //adding getWeather module  
  getWeather = async (event)=>{
    event.preventDefault();
    const api_call = await fetch(` http://api.openweathermap.org/data/2.5/weather?q=irvine,united%20state}&appid=${API_KEY}&units=imperial`);

    const data = await api_call.json();
    console.log(data);
}


 render(){
   return(
     //return JSX 
     <div>
       <Titles />
       
       <Form getWeather={this.getWeather}/> 
       <Weather />
     </div>


   )
 }
}
export default App;