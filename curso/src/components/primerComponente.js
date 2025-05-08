import React from 'react'

export const primerComponente = () => {
    //creamos una variable 
    let nombre = "José Francisco Chávez Castillo";
    let numCuenta= 1822407;
    return (
    
    
    <div>
        <h1>Hola</h1>
        <h1>estoy creando mi primer componente, mi nombre es {nombre}</h1>{/*para mostrar una variable se hace uso de llaves {} y dentro colocamos nuestra variable*/ }
        <p>Este es mi primer texto, mi cuenta es {numCuenta}</p>
    </div>
    
  );
}

export default primerComponente; // Exportación por defecto
