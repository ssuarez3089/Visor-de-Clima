import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clima extends Component {

    mostrarResultado = () => {

        //obtener los datos de la consulta

        const {name, weather, main, coord, wind} = this.props.resultado;

        if(!name || !weather || !main || !coord || !wind) return null;

        const kelvin = 273.15;

        const urlIcono = `https://openweathermap.org/img/w/${weather[0].icon}.png`

        const alt = `Weather ${name}`;

        return(
             <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-13">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text">
                            <h2>Weather Results: {name}</h2>
                            <p className="temperatura">
                                    Actual: {(main.temp - kelvin).toFixed(2) } &deg;C
                                    <img src={urlIcono} alt={alt} />
                            </p>
                            <p> Max. {main.temp_max - kelvin} &deg;C</p>
                            <p> Min. {main.temp_min - kelvin} &deg;C</p>
                        </span>
                    </div>
                </div>
             </div>
        )
    }

    render() { 
        return ( 
            <div className="container">
                {this.mostrarResultado() }
            </div>
         );
    }
}
 
Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;