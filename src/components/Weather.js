import React from 'react';


class Weather extends React.Component{
  render(){
    return(
      // adding conditions for the data to show 
      <div>
        {this.props.temperature && <p>temperature: {this.props.temperature} F</p>}
        {this.props.city &&  <p>city: {this.props.city}</p>}   
        {this.props.country &&  <p>country: {this.props.country}</p>}     
        {this.props.humidity &&  <p>humidity: {this.props.humidity}</p>}  
        {this.props.description &&  <p>description: {this.props.description}</p>}   
      </div>
    )
  }
}
export default Weather; 