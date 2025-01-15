// import calendarService from '../services/calendarService.js';
// // Authenticate the user and redirect to Google OAuth URL
// const authenticateUser = (req, res) => {
//   const authUrl = calendarService.getAuthUrl();
//   res.redirect(authUrl);
// };

// // Handle OAuth callback
// const handleOAuthCallback = async (req, res) => {
//   const code = req.query.code;
//   try {
//     const tokens = await calendarService.exchangeCodeForTokens(code);
//     res.status(200).json({ message: 'Authentication successful', tokens });
//   } catch (err) {
//     res.status(500).json({ message: 'Error during authentication', error: err });
//   }
// };

// // Create a calendar event
// const createEvent = async (req, res) => {
//   const { summary, description, start, end } = req.body;
//   try {
//     const eventLink = await calendarService.createEvent({ summary, description, start, end });
//     res.status(201).json({ message: 'Event created successfully', link: eventLink });
//   } catch (err) {
//     res.status(500).json({ message: 'Error creating event', error: err });
//   }
// };
// export default {
//     createEvent,
//     handleOAuthCallback,
//     authenticateUser,
//   };
