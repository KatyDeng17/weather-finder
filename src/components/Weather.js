import React from 'react';


// class Weather extends React.Component{
//   render(){
//     return(
//       // adding conditions for the data to show 
//       <div>
//         {this.props.temperature && <p>temperature: {this.props.temperature} F</p>}
//         {this.props.city &&  <p>city: {this.props.city}</p>}   
//         {this.props.country &&  <p>country: {this.props.country}</p>}     
//         {this.props.humidity &&  <p>humidity: {this.props.humidity}</p>}  
//         {this.props.description &&  <p>description: {this.props.description}</p>}   
//         {this.props.error &&  <p>Error: {this.props.error}</p>}  
//       </div>
//     )
//   }
// }


//changing to stateless component 
const Weather = (props)=>(
   <div>
        { props.temperature && <p>temperature: {props.temperature} F</p>}
        { props.city &&  <p>city: {props.city}</p>}   
        { props.country &&  <p>country: {props.country}</p>}     
        { props.humidity &&  <p>humidity: {props.humidity}</p>}  
        { props.description &&  <p>description: {props.description}</p>}   
        { props.error &&  <p>Error: {props.error}</p>}  
  </div>
  );

export default Weather; 