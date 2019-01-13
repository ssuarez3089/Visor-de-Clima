import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {

    //crear ref

    cityRef = React.createRef();
    countryRef = React.createRef();


buscarClima = (e) => {
    e.preventDefault();

    //leer los ref y crear objetos

    const respuesta = {
        city: this.cityRef.current.value,
        country: this.countryRef.current.value
    }

    console.log(respuesta);

    //enviar props

    this.props.datosConsulta(respuesta);



}

    render() { 
        return ( 
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.cityRef} id="city" type="text" />
                                <label htmlFor="city">City:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.countryRef}>
                                    <option value="" defaultValue>Choose a country</option>
                                    <option value="NL">Netherlands</option>
                                    <option value="US">United States</option>
                                    <option value="ES">España</option>
                                    <option value="FR">Francia</option>
                                    <option value="IT">Italia</option>
                                    <option value="Co">Colombia</option>
                                    <option value="VE">Venezuela</option>
                                </select>
                                <label htmlFor="country">Country:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-2 buscador">
                                <input type="submit" className="waves-effect waves-ligth btn-large yellow accent-4" value="Search..." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}

Formulario.propTypes = {
datosConsulta: PropTypes.func.isRequired
}
 
export default Formulario;