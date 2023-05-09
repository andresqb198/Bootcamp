import './App.css';
import Mensaje from './Mensaje.js'


const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>

}

function App() {
  const mensaje = 'Hola Mundo'
  
  
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando"/>
      <Mensaje color="green" message="En un curso"/>
      <Mensaje color="yellow" message="De React"/>
      <Description />
      <h1>{mensaje+ ' desde variable'} </h1>
      <h1>{+new Date()}</h1>
    </div>
  );
}

export default App;
