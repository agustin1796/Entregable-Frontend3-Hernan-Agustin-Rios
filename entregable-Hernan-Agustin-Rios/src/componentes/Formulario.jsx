import React, { Component } from 'react';
import Card from './Card';

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    form: {
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '5px',
      width: '300px',
    },
    input: {
      margin: '10px 0',
      padding: '5px',
      width: '100%',
      borderRadius: '3px',
      border: '1px solid #ccc',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '10px 15px',
      cursor: 'pointer',
      borderRadius: '3px',
    },
    card: {
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '5px',
      width: '300px',
      marginTop: '20px',
    },
  };
  
  class Formulario extends Component {
    state = {
      nombre: '',
      colorFavorito: '',
      submittedData: null,
      error: '',
    };
  
    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      const { nombre, colorFavorito } = this.state;
  
      if (nombre.length < 3 || /^\s/.test(nombre) || colorFavorito.length < 6) {
        this.setState({ error: 'Por favor, checkea que la información sea correcta' });
      } else {
        this.setState({ error: '', submittedData: { nombre, colorFavorito } });
      }
    }
  
    render() {
      const { nombre, colorFavorito, error, submittedData } = this.state;
  
      return (
        <div style={styles.container}>
          {error && <p>{error}</p>}
          {submittedData ? (
            <div style={styles.card}>
              <Card data={submittedData} />
              <p>Hola {nombre}, sabemos que tu color favorito es: {colorFavorito}</p>
            </div>
          ) : (
            <form style={styles.form} onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="nombre">Nombre:</label>
                <input
                  style={styles.input}
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={this.handleChange}
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div>
                <label htmlFor="colorFavorito">Color Favorito:</label>
                <input
                  style={styles.input}
                  type="text"
                  id="colorFavorito"
                  name="colorFavorito"
                  value={colorFavorito}
                  onChange={this.handleChange}
                  placeholder="Ingresa tu color favorito (HEX)"
                />
              </div>
              <div>
                <button style={styles.button} type="submit">Enviar</button>
              </div>
            </form>
          )}
        </div>
      );
    }
  }
  
  export default Formulario;