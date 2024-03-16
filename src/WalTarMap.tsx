import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import WalTarItem from './WalTarTypes';
import waltarData from './WalTarData';


const App: React.FC = () => {
  const [selectedState, setSelectedState] = useState<WalTarItem | null>(null);

  return (
    <div className="App">
      <div className="sidebar">
        <h2>US States</h2>
        <ul>
          {waltarData.map((state, index) => (
            <li key={index} onClick={() => setSelectedState(state)}>
              {state.name}
            </li>
          ))}
        </ul>
      </div>
      <MapContainer center={[39.8283, -98.5795]} zoom={4} style={{ height: '100vh', width: '80%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {selectedState && (
          <Marker position={selectedState.latlng}>
            <Popup>{selectedState.name}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default App;