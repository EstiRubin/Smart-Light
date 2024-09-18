import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
configDotenv()
mongoose.set("strictQuery", false);

export default async function connect() {
    try {
        await mongoose.connect(process.env.CONN_STRING);
        //'mongodb+srv://renataub2964:2LuXO3awj0Nqlf42@volenteerdb.durhxms.mongodb.net/VolenteersProject'
    }
    catch (e) {
        console.log(e.message);
        throw new Error("unable to connect to mongoDB: ");
    }

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected to MongoDB');
    });
}