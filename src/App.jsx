import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Lights from './Lights.jsx';


const App = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <Lights />
        </div>

    )
}

export default App;

