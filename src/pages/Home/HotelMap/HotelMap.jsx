import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import mapIcon from '../../../assets/location_icon.png';

const customIcon = L.icon({
    iconUrl: mapIcon, 
    iconSize: [50, 50], 
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});


const HotelMap = () => {
    const position = [23.797911, 90.414391]
    return (
        <MapContainer
            center={position} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%", zIndex: "0" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
                
            </Marker>
        </MapContainer>
    );
};

export default HotelMap;