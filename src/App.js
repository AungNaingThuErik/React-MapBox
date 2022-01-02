import './App.css';
import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import mapboxgl from "mapbox-gl";
function App() {

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 1.3521,
    longitude: 103.8198,
    zoom: 8
  });

  return (
    <div className="App">
     <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/erikaung/ckxwzisjo1nte14o6iej9mbx9"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
      </ReactMapGL>  

    </div>
  );
}

export default App;
