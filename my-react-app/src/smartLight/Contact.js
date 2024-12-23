// import React from "react";
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const Contact = () => {
//     const mapContainerStyle = {
//       width: '100%',
//       height: '400px',
//     };
  
//     const officeLocation = {
//         lat: 31.7969, // קו רוחב מדויק
//         lng: 35.2134, // קו אורך מדויק
//     };

// // export default function Contact(){
//     return (
//         <LoadScript googleMapsApiKey="YOUR_API_KEY">
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={officeLocation} // מרכז המפה על המיקום
//         zoom={15} // זום קרוב יותר
//       >
//         <Marker position={officeLocation} /> {/* הצבת סמן במיקום */}
//       </GoogleMap>
//     </LoadScript>
//         // <div>
//         //     <h1>Contact Us</h1>
//         //     <p>Smartlight lighting experts are available 
//         //         to advise on planning, design and lighting fixture selection!</p>
            

//         // </div>
        
//     );
// }

// export default Contact;



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
    const [coordinates, setCoordinates] = useState({ lat: 31.7969, lng: 35.2134 }); // ערכים ברירת מחדל
    const whatsappNumber = "972527134164"; // מספר WhatsApp שלך

    useEffect(() => {
        // בקשת גיאוקודינג לכתובת
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
        // טוען את המפה ברגע שיש קואורדינטות
        const map = L.map('map').setView([coordinates.lat, coordinates.lng], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        // הוספת סמן רגיל במיקום המרכזי
        L.marker([coordinates.lat, coordinates.lng]).addTo(map);

        return () => {
            if (map) {
                map.remove(); // מנקה את המפה עם הרס הקומפוננטה
            }
        };
    }, [coordinates]); // מפעיל מחדש את המפה כשיש עדכון לקואורדינטות

    return (
        <div>
            {/* אייקון טלפון עם מספר */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <i
                    className="fas fa-phone"
                    style={{ color: 'blue', fontSize: '24px', marginRight: '8px' }}
                ></i>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                    02-5712483
                </span>
            </div>

            {/* כפתור WhatsApp */}
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

            {/* המפה */}
            <div id="map" style={{ width: '100%', height: '400px' }}></div>
        </div>
    );
};

export default Contact;
