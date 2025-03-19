// // import React, { useEffect, useState } from 'react';
// // import L from 'leaflet';
// // import 'leaflet/dist/leaflet.css';

// // delete L.Icon.Default.prototype._getIconUrl;

// // L.Icon.Default.mergeOptions({
// //     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
// //     iconUrl: require('leaflet/dist/images/marker-icon.png'),
// //     shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// // });

// // const Contact = () => {
// //     const [coordinates, setCoordinates] = useState({ lat: 31.7969, lng: 35.2134 }); 
// //     const whatsappNumber = "972527134164"; 

// //     useEffect(() => {
        
// //         const fetchCoordinates = async () => {
// //             try {
// //                 const response = await fetch(
// //                     `https://nominatim.openstreetmap.org/search?format=json&q=טללים 23 ירושלים`
// //                 );
// //                 const data = await response.json();
// //                 if (data.length > 0) {
// //                     setCoordinates({
// //                         lat: parseFloat(data[0].lat),
// //                         lng: parseFloat(data[0].lon),
// //                     });
// //                 }
// //             } catch (error) {
// //                 console.error("Error fetching coordinates:", error);
// //             }
// //         };

// //         fetchCoordinates();
// //     }, []);

// //     useEffect(() => {

// //         const map = L.map('map').setView([coordinates.lat, coordinates.lng], 15);

// //         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //             maxZoom: 19,
// //         }).addTo(map);


// //         L.marker([coordinates.lat, coordinates.lng]).addTo(map);


// //         return () => {
// //             if (map) {
// //                 map.remove();
// //             }
// //         };
// //     }, [coordinates]); 

// //     return (
// //         <div>
// //             {/* אייקון טלפון עם מספר */}
// //             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
// //                 <i
// //                     className="fas fa-phone"
// //                     style={{ color: 'black', fontSize: '18px', marginRight: '6px' }}
// //                 ></i>
// //                 <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
// //                     02-5712483
// //                 </span>
// //             </div>

// //             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
// //                 <i
// //                     className="fas fa-phone"
// //                     style={{ color: 'black', fontSize: '18px', marginRight: '6px' }}
// //                 ></i>
// //                 <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
// //                  +972527134164
// //                 </span>
// //             </div>
// //             {/* כפתור WhatsApp */}
// //             <a
// //                 href={`https://wa.me/${whatsappNumber}?text=שלום!%20אני%20מתעניין/ת%20בתאורה%20אפשר%20לקבל%20פרטים%20נוספים?`}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 style={{
// //                     color: 'black',
// //                     display: 'inline-block',
// //                     textDecoration: 'none',
// //                     fontWeight: 'bold',
// //                     marginBottom: '20px',
// //                 }}
// //             >
// //                 +972527134164
// //             </a>

// //             {/* המפה */}
// //             <div id="map" style={{ width: '100%', height: '400px' }}></div>
// //         </div>
// //     );
// // };

// // export default Contact;

// // import React, { useEffect, useState } from 'react';
// // import L from 'leaflet';
// // import 'leaflet/dist/leaflet.css';

// // delete L.Icon.Default.prototype._getIconUrl;

// // L.Icon.Default.mergeOptions({
// //     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
// //     iconUrl: require('leaflet/dist/images/marker-icon.png'),
// //     shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// // });

// // const Contact = () => {
// //     const [coordinates, setCoordinates] = useState({ lat: 31.7969, lng: 35.2134 }); 
// //     const whatsappNumber = "972527134164"; 
// //     const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
// //     const [emailRecipient] = useState(process.env.EMAIL_BUSINESS); 

// //     useEffect(() => {
// //         const fetchCoordinates = async () => {
// //             try {
// //                 const response = await fetch(
// //                     `https://nominatim.openstreetmap.org/search?format=json&q=טללים 23 ירושלים`
// //                 );
// //                 const data = await response.json();
// //                 if (data.length > 0) {
// //                     setCoordinates({
// //                         lat: parseFloat(data[0].lat),
// //                         lng: parseFloat(data[0].lon),
// //                     });
// //                 }
// //             } catch (error) {
// //                 console.error("Error fetching coordinates:", error);
// //             }
// //         };
// //         fetchCoordinates();
// //     }, []);

// //     useEffect(() => {
// //         const map = L.map('map').setView([coordinates.lat, coordinates.lng], 15);
// //         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
// //         L.marker([coordinates.lat, coordinates.lng]).addTo(map);

// //         return () => { if (map) map.remove(); };
// //     }, [coordinates]);

// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await fetch('http://localhost:3000/api/contact', {
// //                 method: 'POST',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify({ ...formData, recipient: emailRecipient })
// //             });
// //             const data = await response.json();
// //             if (response.ok) {
// //                 alert('Message sent successfully');
// //                 setFormData({ name: '', phone: '', email: '', message: '' });
// //             } else {
// //                 alert(`Error: ${data.error}`);
// //             }
// //         } catch (error) {
// //             alert('Failed to send message');
// //         }
// //     };

// //     return (
// //         <div>
// //             <h2>Contact Us</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
// //                 <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
// //                 <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
// //                 <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
// //                 <button type="submit">Send</button>
// //             </form>

// //             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
// //                 <i className="fas fa-phone" style={{ color: 'black', fontSize: '18px', marginRight: '6px' }}></i>
// //                 <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>02-5712483</span>
// //             </div>

// //             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
// //                 <i className="fas fa-phone" style={{ color: 'black', fontSize: '18px', marginRight: '6px' }}></i>
// //                 <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>+972527134164</span>
// //             </div>

// //             <a href={`https://wa.me/${whatsappNumber}?text=שלום!%20אני%20מתעניין/ת%20בתאורה%20אפשר%20לקבל%20פרטים%20נוספים?`} target="_blank" rel="noopener noreferrer" style={{ color: 'black', display: 'inline-block', textDecoration: 'none', fontWeight: 'bold', marginBottom: '20px' }}>+972527134164</a>
            
// //             <div id="map" style={{ width: '100%', height: '400px' }}></div>
// //         </div>
// //     );
// // };

// // export default Contact;

// // import React, { useEffect, useState } from 'react';
// // import L from 'leaflet';
// // import '../css/Contact.css';

// // delete L.Icon.Default.prototype._getIconUrl;

// // L.Icon.Default.mergeOptions({
// //     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
// //     iconUrl: require('leaflet/dist/images/marker-icon.png'),
// //     shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// // });

// // const Contact = () => {
// //     const [coordinates, setCoordinates] = useState({ lat: 31.7969, lng: 35.2134 }); 
// //     const whatsappNumber = "972527134164"; 
// //     const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
// //     const [emailRecipient] = useState(process.env.EMAIL_BUSINESS); 

// //     useEffect(() => {
// //         const fetchCoordinates = async () => {
// //             try {
// //                 const response = await fetch(
// //                     `https://nominatim.openstreetmap.org/search?format=json&q=טללים 23 ירושלים`
// //                 );
// //                 const data = await response.json();
// //                 if (data.length > 0) {
// //                     setCoordinates({
// //                         lat: parseFloat(data[0].lat),
// //                         lng: parseFloat(data[0].lon),
// //                     });
// //                 }
// //             } catch (error) {
// //                 console.error("Error fetching coordinates:", error);
// //             }
// //         };
// //         fetchCoordinates();
// //     }, []);

// //     useEffect(() => {
// //         const map = L.map('map').setView([coordinates.lat, coordinates.lng], 15);
// //         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
// //         L.marker([coordinates.lat, coordinates.lng]).addTo(map);

// //         return () => { if (map) map.remove(); };
// //     }, [coordinates]);

// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await fetch('http://localhost:3000/api/contact', {
// //                 method: 'POST',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify({ ...formData, recipient: emailRecipient })
// //             });
// //             const data = await response.json();
// //             if (response.ok) {
// //                 alert('Message sent successfully');
// //                 setFormData({ name: '', phone: '', email: '', message: '' });
// //             } else {
// //                 alert(`Error: ${data.error}`);
// //             }
// //         } catch (error) {
// //             alert('Failed to send message');
// //         }
// //     };

// //     return (
// //         <div className="contact-container">
// //             <h2>Contact Us</h2>
// //             <div className="contact-content">
// //                 <form onSubmit={handleSubmit} className="contact-form">
// //                     <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
// //                     <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
// //                     <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
// //                     <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
// //                     <button type="submit">Send</button>
// //                 </form>

// //                 <div className="contact-info">
// //                     <div className="phone-number">
// //                         <i className="fas fa-phone"></i>
// //                         <span>02-5712483</span>
// //                     </div>
// //                     <div className="phone-number">
// //                         <i className="fas fa-phone"></i>
// //                         <span>+972527134164</span>
// //                     </div>
// //                     <a href={`https://wa.me/${whatsappNumber}?text=שלום!%20אני%20מתעניין/ת%20בתאורה%20אפשר%20לקבל%20פרטים%20נוספים?`} target="_blank" rel="noopener noreferrer" className="whatsapp-link">WhatsApp</a>
// //                 </div>
// //             </div>

// //             <div id="map" className="map-container"></div>
// //         </div>
// //     );
// // };

// // export default Contact;

// // import React, { useEffect, useState } from 'react';
// // import L from 'leaflet';
// // import '../css/Contact.css';

// // delete L.Icon.Default.prototype._getIconUrl;

// // L.Icon.Default.mergeOptions({
// //     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
// //     iconUrl: require('leaflet/dist/images/marker-icon.png'),
// //     shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// // });

// // const Contact = () => {
// //     const [coordinates, setCoordinates] = useState({ lat: 31.7969, lng: 35.2134 });
// //     const whatsappNumber = "972527134164";
// //     const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

// //     useEffect(() => {
// //         const fetchCoordinates = async () => {
// //             try {
// //                 const response = await fetch("https://nominatim.openstreetmap.org/search?format=json&q=טללים 23 ירושלים");
// //                 const data = await response.json();
// //                 if (data.length > 0) {
// //                     setCoordinates({ lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) });
// //                 }
// //             } catch (error) {
// //                 console.error("Error fetching coordinates:", error);
// //             }
// //         };
// //         fetchCoordinates();
// //     }, []);

// //     useEffect(() => {
// //         const map = L.map('map').setView([coordinates.lat, coordinates.lng], 15);
// //         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
// //         L.marker([coordinates.lat, coordinates.lng]).addTo(map);

// //         return () => { if (map) map.remove(); };
// //     }, [coordinates]);

// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await fetch('http://localhost:3000/api/contact', {
// //                 method: 'POST',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify(formData)
// //             });
// //             if (response.ok) {
// //                 alert('Message sent successfully');
// //                 setFormData({ name: '', phone: '', email: '', message: '' });
// //             } else {
// //                 alert("Error sending message");
// //             }
// //         } catch (error) {
// //             alert('Failed to send message');
// //         }
// //     };

// //     return (
// //         <div className="contact-container">
// //             <h2>צור קשר</h2>
// //             <div className="contact-content">
// //                 <form onSubmit={handleSubmit} className="contact-form">
// //                     <input type="text" name="name" placeholder="שם מלא" value={formData.name} onChange={handleChange} required />
// //                     <input type="text" name="phone" placeholder="טלפון" value={formData.phone} onChange={handleChange} required />
// //                     <input type="email" name="email" placeholder="אימייל" value={formData.email} onChange={handleChange} required />
// //                     <textarea name="message" placeholder="הודעה" value={formData.message} onChange={handleChange} required />
// //                     <button type="submit">שלח</button>
// //                 </form>

// //                 <div className="contact-info">
// //                     <div className="phone-number">טלפון: 02-5712483</div>
// //                     <a href={`https://wa.me/${whatsappNumber}`} className="whatsapp-link" target="_blank" rel="noopener noreferrer">
// //                         שלח הודעה בווצאפ
// //                     </a>
// //                     <div className="email">אימייל: info@yourbusiness.com</div>
// //                     <div className="working-hours">
// //                         <p>שעות פעילות משרד: 9:00-18:00</p>
// //                         <p>שעות פעילות מפעל: 8:00-17:00</p>
// //                     </div>
// //                 </div>
// //             </div>

// //             <div id="map" className="map-container"></div>
// //         </div>
// //     );
// // };

// // export default Contact;

// import React, { useEffect, useState } from 'react';
// import L from 'leaflet';
// import '../css/Contact.css';

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

// const Contact = () => {
//     const [coordinates, setCoordinates] = useState({ lat: 31.7969, lng: 35.2134 });
//     const whatsappNumber = "972527134164";
//     const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
//     const [emailRecipient] = useState(process.env.EMAIL_BUSINESS);

//     useEffect(() => {
//         const fetchCoordinates = async () => {
//             try {
//                 const response = await fetch(
//                     "https://nominatim.openstreetmap.org/search?format=json&q=טללים 23 ירושלים"
//                 );
//                 const data = await response.json();
//                 if (data.length > 0) {
//                     setCoordinates({
//                         lat: parseFloat(data[0].lat),
//                         lng: parseFloat(data[0].lon),
//                     });
//                 }
//             } catch (error) {
//                 console.error("Error fetching coordinates:", error);
//             }
//         };
//         fetchCoordinates();
//     }, []);

//     useEffect(() => {
//         const map = L.map('map').setView([coordinates.lat, coordinates.lng], 15);
//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
//         L.marker([coordinates.lat, coordinates.lng]).addTo(map);
//         return () => { if (map) map.remove(); };
//     }, [coordinates]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:3000/api/contact', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ ...formData, recipient: emailRecipient })
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 alert('Message sent successfully');
//                 setFormData({ name: '', phone: '', email: '', message: '' });
//             } else {
//                 alert(`Error: ${data.error}`);
//             }
//         } catch (error) {
//             alert('Failed to send message');
//         }
//     };

//     return (
//         <div className="contact-container">
//             <h2>צור קשר</h2>
//             <div className="contact-content">
//                 <form onSubmit={handleSubmit} className="contact-form">
//                     <input type="text" name="name" placeholder="שם" value={formData.name} onChange={handleChange} required />
//                     <input type="text" name="phone" placeholder="טלפון" value={formData.phone} onChange={handleChange} required />
//                     <input type="email" name="email" placeholder="מייל" value={formData.email} onChange={handleChange} required />
//                     <textarea name="message" placeholder="הודעה" value={formData.message} onChange={handleChange} required />
//                     <button type="submit">שלח</button>
//                 </form>
//                 <div className="contact-info">
//                     <p><strong>שעות פעילות (משרד):</strong> א'-ה' 09:00-18:00</p>
//                     <p><strong>שעות פעילות (מפעל):</strong> א'-ה' 07:00-16:00</p>
//                     <p><strong>טלפון:</strong> 02-5712483</p>
//                     <p><strong>וואטסאפ שירות:</strong><a href="https://wa.me/972527134164" target="_blank" rel="noopener noreferrer">+972-52-713-4164</a></p>
//                     <p><strong>מייל:</strong> 5712483@gmail.com</p>
//                     <div id="map" style={{ height: "300px", width: "100%" }}></div>
//                 </div>
//             </div>
//             {/* <div id="map" className="map-container"></div> */}
//         </div>
//     );
// };

// export default Contact;

















import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import '../css/Contact.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Contact = () => {
    const [coordinates, setCoordinates] = useState({ lat: 31.7969, lng: 35.2134 });
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const response = await fetch(
                    "https://nominatim.openstreetmap.org/search?format=json&q=טללים 23 ירושלים"
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
        if (!mapRef.current) {
            mapRef.current = L.map('map').setView([coordinates.lat, coordinates.lng], 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(mapRef.current);
            markerRef.current = L.marker([coordinates.lat, coordinates.lng]).addTo(mapRef.current);
        } else {
            mapRef.current.setView([coordinates.lat, coordinates.lng], 15);
            markerRef.current.setLatLng([coordinates.lat, coordinates.lng]);
        }

        // לוודא שהמפה מתרעננת כראוי
        setTimeout(() => {
            mapRef.current.invalidateSize();
        }, 100);
    }, [coordinates]);

    return (
        <div className="contact-container">
            <h2>צור קשר</h2>
            <div className="contact-content">
                <div className="contact-info">
                    <p><strong>כתובת:</strong> טללים 23, ירושלים</p>
                    <div className="map-container">
                        <div id="map"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;



// import React, { useState } from "react";
// // // import React, { useEffect, useState, useRef } from 'react';
// // // import L from 'leaflet';
// import '../css/Contact.css';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//     // כאן ניתן להוסיף לוגיקה לשליחת הנתונים לשרת
//   };

//   return (
//     <div className="contact-container">
//       <div className="contact-form">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="שם"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="טלפון"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="מייל"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="הודעה"
//             value={formData.message}
//             onChange={handleChange}
//           ></textarea>
//           <button type="submit">שלח</button>
//         </form>
//       </div>
//       <div className="contact-info">
//         <h2>צור קשר</h2>
//         <p><strong>שעות פעילות (משרד):</strong> א'-ה' 09:00-18:00</p>
//         <p><strong>שעות פעילות (מפעל):</strong> א'-ה' 07:00-16:00</p>
//         <p><strong>טלפון:</strong> 02-5712483</p>
//         <p><strong>ווצאפ שירות:</strong> <a href="https://wa.me/972527134164" target="_blank" rel="noopener noreferrer">+972-52-713-4164</a></p>
//         <p><strong>מייל:</strong> 5712483@gmail.com</p>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
