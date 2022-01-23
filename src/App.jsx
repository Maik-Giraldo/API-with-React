import './App.css';
import Humidity from './components/weatherApi/humidity';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Maps from './components/mapboxApi/maps';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoibWFpaWsyMyIsImEiOiJja3lyZGl6a2swc3k4MndwMmJkdDZpc2wxIn0.5KD2U2MPu_-5ZPDWRLm2ZQ';

function App() {
  return (
    <>
    <div className='App'>
      <Humidity />
      <br />
      <Maps />
    </div>
    </>
  );
}

export default App;