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
                } else {
                    console.error("כתובת לא נמצאה.");
                }
            } catch (error) {
                console.error("Error fetching coordinates:", error);
            }
        };

        fetchCoordinates();
    }, []);

    useEffect(() => {
        if (coordinates.lat && coordinates.lng) {
            const map = L.map('map').setView([coordinates.lat, coordinates.lng], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(map);

            L.marker([coordinates.lat, coordinates.lng]).addTo(map);

            return () => {
                map.remove();
            };
        }
    }, [coordinates]);

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <i
                    className="fas fa-phone"
                    style={{ color: 'blue', fontSize: '24px', marginRight: '8px' }}
                ></i>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                    02-5712483
                </span>
            </div>
            <a
                href={`https://wa.me/${whatsappNumber}?text=שלום!%20אני%20מתעניין/ת%20בתאורה%20אפשר%20לקבל%20פרטים%20נוספים?`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'inline-block',
                    backgroundColor: '#25D366',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                }}
            >
                שלח הודעה ב-WhatsApp
            </a>
            <div id="map" style={{ width: '100%', height: '400px' }}></div>
        </div>
    );
};

export default Contact;
