import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const Lights = () => {
  const [Light, setActiveLight] = useState(null);

  return(
  <div className="container d-flex justify-content-center align-items-center vh-100">
  <div className="traffic-light-stick bg-dark"></div>
  <div className="traffic-light d-flex flex-column justify-content-around bg-dark rounded p-2">
      <div className={`light bg-danger rounded-circle ${Light === 'red' ? 'glow' : ''}`} onClick={() => setActiveLight('red')}></div>
      <div className={`light bg-warning rounded-circle ${Light === 'yellow' ? 'glow' : ''}`} onClick={() => setActiveLight('yellow')}></div>
      <div className={`light bg-success rounded-circle ${Light === 'green' ? 'glow' : ''}`} onClick={() => setActiveLight('green')}></div>
  </div>
</div>
)




}

export default Lights