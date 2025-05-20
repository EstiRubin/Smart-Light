// // import React from 'react';
// // import '../css/Contact.css';

// // export default function ContactForm() {
// //   return (
// //     <div className="contact-page">
// //       <div className="contact-card contact-form">
// //         <h2>שלח פנייה</h2>
// //         <form>
// //           <input type="text" placeholder="שם" />
// //           <input type="email" placeholder="אימייל" />
// //           <input type="text" placeholder="נושא" />
// //           <textarea placeholder="הודעה" />
// //           <button type="submit">שלח</button>
// //         </form>
// //       </div>

// //       <div className="contact-card contact-info">
// //         <h2>צור קשר</h2>
// //         <p><strong>שעות פעילות:</strong><br />א׳-ה׳: 08:00–17:00<br />ו׳: 08:00–12:00</p>
// //         <p><strong>טלפון:</strong><br />03-1234567</p>
// //         <p><strong>מייל:</strong><br />info@smartlight.co.il</p>
// //       </div>
// //     </div>
// //   );
// // }

// import React from 'react';
// import '../css/Contact.css';

// export default function ContactForm() {
//   return (
    
//     <div className="contact-page">
// <div className="vertical-text">Contact Us</div>
//       <div className="contact-card contact-info">
//         <h2>צור קשר</h2>
//         <p><strong>שעות פעילות:</strong><br />א׳-ה׳: 08:00–17:00<br />ו׳: 08:00–12:00</p>
//         <p><strong>טלפון:</strong><br />03-1234567</p>
//         <p><strong>מייל:</strong><br />info@smartlight.co.il</p>
//       </div>

//       <div className="contact-card contact-form">
//         <h2>שלח פנייה</h2>
//         <form>
//           <input type="text" placeholder="שם" />
//           <input type="email" placeholder="אימייל" />
//           <input type="text" placeholder="נושא" />
//           <textarea placeholder="הודעה" />
//           <button type="submit">שלח</button>
//         </form>
//       </div>
//     </div>
    
//   );
// }
import React from 'react';
import '../css/Contact.css';

export default function ContactForm() {
  return (
    <div className="contact-page">
      {/* ודא שהאלמנט הזה קיים ומופיע איפשהו בתוך ה-return */}
      {/* חשוב שיהיה לו את הקלאס הנכון ותוכן כלשהו */}
      <div className="vertical-text">Contact Us</div> 
      {/* נסה לשנות את הטקסט ל"TEST" כדי לוודא שאתה רואה אותו */}
      
      <div className="contact-card contact-info">
        <h2>צור קשר</h2>
        <p><strong>שעות פעילות:</strong><br />א׳-ה׳: 08:00–17:00<br />ו׳: 08:00–12:00</p>
        <p><strong>טלפון:</strong><br />03-1234567</p>
        <p><strong>מייל:</strong><br />info@smartlight.co.il</p>
      </div>

      <div className="contact-card contact-form">
        <h2>שלח פנייה</h2>
        <form>
          <input type="text" placeholder="שם" />
          <input type="email" placeholder="אימייל" />
          <input type="text" placeholder="נושא" />
          <textarea placeholder="הודעה" />
          <button type="submit">שלח</button>
        </form>
      </div>
    </div>
  );
}