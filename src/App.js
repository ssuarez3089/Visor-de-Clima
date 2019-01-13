import React, { Component } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Error from './Components/Error';
import Clima from './Components/Clima';

class App extends Component {

  state = {
    error: '',
    consulta: {},
    resultado: {}
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.consulta !== this.state.consulta) {
      this.consultarApi();
    }
   
  }

  componentDidMount() {
    this.setState({
      error: false
    })
  }

  consultarApi = () => {
    const {city, country} = this.state.consulta;
    if(!city || !country) return null;

    //leer la url y agregar el Api KEY
    
    const appId = 'd15a0414d14f271c1692524d28fef156';
    
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}uk&APPID=${appId}`;
    
    // query con fetch api

    fetch(url)
      .then(respuesta => {
        return respuesta.json(); 
      })

      .then(datos => {

        //console.log(datos)
        this.setState({
          resultado : datos
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

datosConsulta = respuesta => {
  if(respuesta.city === '' || respuesta.country === '') {
    this.setState({
      error: true
    })
  } else {
    this.setState({
      consulta: respuesta,
      error : false
    })
    
  }
}

  render() {

    const {error} = this.state,
          {cod} = this.state.resultado;

    let resultado;

    if(error) {
      resultado = <Error mensaje="both fields are required" />
    } else if(cod === "404") {
      resultado = <Error mensaje="city not found" />
    } else {
      resultado = <Clima  resultado = {this.state.resultado} />
    }

    return (
      <div className="app">
          <Header 
          titulo = 'World Weather' 
          />
          <Formulario 
          datosConsulta = {this.datosConsulta}
          />
          {resultado}
      </div>
    );
  }
}

export default App;
