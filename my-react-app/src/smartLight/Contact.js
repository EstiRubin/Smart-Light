import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Contact = () => {
    const [coordinates, setCoordinates] = useState({ lat: 31.7969, lng: 35.2134 }); 
    const whatsappNumber = "972527134164"; 

    useEffect(() => {
        
        const fetchCoordinates = async () => {
            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=טללים 23 ירושלים`
                );
                const data = await response.json();
                if (data.length > 0) {
                    setCoordinates({
                        lat: parseFloat(data[0].lat),
                        lng: parseFloat(data[0].lon),
                    });
                }
            } catch (error) {
                console.error("Error fetching coordinates:", error);
            }
        };

        fetchCoordinates();
    }, []);

    useEffect(() => {

        const map = L.map('map').setView([coordinates.lat, coordinates.lng], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);


        L.marker([coordinates.lat, coordinates.lng]).addTo(map);


        return () => {
            if (map) {
                map.remove();
            }
        };
    }, [coordinates]); 

    return (
        <div>
            {/* אייקון טלפון עם מספר */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <i
                    className="fas fa-phone"
                    style={{ color: 'black', fontSize: '18px', marginRight: '6px' }}
                ></i>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                    02-5712483
                </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <i
                    className="fas fa-phone"
                    style={{ color: 'black', fontSize: '18px', marginRight: '6px' }}
                ></i>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                 +972527134164
                </span>
            </div>
            {/* כפתור WhatsApp */}
            <a
                href={`https://wa.me/${whatsappNumber}?text=שלום!%20אני%20מתעניין/ת%20בתאורה%20אפשר%20לקבל%20פרטים%20נוספים?`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: 'black',
                    display: 'inline-block',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                }}
            >
                +972527134164
            </a>

            {/* המפה */}
            <div id="map" style={{ width: '100%', height: '400px' }}></div>
        </div>
    );
};

export default Contact;
