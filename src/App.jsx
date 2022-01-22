import './App.css';
import Humidity from './components/weatherApi/humidity';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Humidity />
    </div>
  );
}

export default App;