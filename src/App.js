import { useState } from 'react';
import './App.css';

function App() {
  const [nombreError,setNombreError] = useState("")
  const [apellidoError,setApellidoError] = useState("")
  const [emailError,setEmailError] = useState("")
  const [passwordError,setPasswordError] = useState("")
  const [password,setPassword] = useState("")



  const Actualizar = (e) => {
    e.preventDefault();
  }
  const valLong = (e,funcion,min) => {
    if (e.length < min && e.length>0) {
      funcion(`El campo debe contenter al menos ${min} caracteres.`)
    }else{
      funcion("")
    }
  }
  
  const valPass = (e) => {
    console.log(e)
    console.log(password)
    if (!(e == password)){
      setPasswordError("Las contraseñas no coinciden")
    }else{
      setPasswordError("")
    }
    
  }

  return (
    <div className="App">
        <div>
          <form onSubmit={Actualizar}>
            <div className='cont'>
              <label> First Name: </label>
              <input type='text' onChange={(e) => valLong(e.target.value,setNombreError,2)}/>
            </div>{nombreError}
            <div className='cont'>
              <label> Last Name: </label>
              <input type='text' onChange={(e) => valLong(e.target.value,setApellidoError,2)}/>
            </div>{apellidoError}
            <div className='cont'>
              <label> Email: </label>
              <input type='text' onChange={(e) => valLong(e.target.value,setEmailError,5)}/>
            </div>{emailError}
            <div className='cont'>
              <label> Password: </label>
              <input type='password' onChange={(e) => {
                valLong(e.target.value,setPasswordError,8)
                setPassword(e.target.value)
              }}/>
            </div>{passwordError}
            <div className='cont'>
              <label> Confirm Password: </label>
              <input type='password' onChange={(e) => valPass(e.target.value)}/>
            </div>
          </form>
        </div>
    </div>
  );
}

export default App;