// import { google } from 'googleapis';

// const { OAuth2 } = google.auth;

// const oauth2Client = new OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   process.env.REDIRECT_URI
// );

// export const authenticateUser = (req, res) => {
//   const scopes = ['https://www.googleapis.com/auth/calendar'];
//   const authUrl = oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: scopes,
//   });
//   res.redirect(authUrl); // Redirect user to Google's OAuth page
// };

// export const handleOAuthCallback = async (req, res) => {
//   const code = req.query.code;
//   try {
//     const { tokens } = await oauth2Client.getToken(code);
//     oauth2Client.setCredentials(tokens);
//     res.status(200).send('Authentication successful! You can now create calendar events.');
//   } catch (error) {
//     res.status(400).send('Error while handling OAuth callback: ' + error.message);
//   }
// };

// export const createEvent = async (req, res) => {
//   try {
//     const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
//     const { summary, description, start, end } = req.body;

//     const event = {
//       summary,
//       description,
//       start: { dateTime: start, timeZone: 'UTC' },
//       end: { dateTime: end, timeZone: 'UTC' },
//     };

//     const response = await calendar.events.insert({
//       calendarId: 'primary',
//       resource: event,
//     });

//     res.status(200).json({ link: response.data.htmlLink });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export default {
//   authenticateUser,
//   handleOAuthCallback,
//   createEvent,
// };
