import { configDotenv } from 'dotenv';
import  express  from 'express';
import ProjectsRouter from './routers/ProjectsRouter.js';

configDotenv()
const app = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.use(express.json());
app.use('/api/helpProjects', ProjectsRouter);
app.use('/', (req, res) => {
    res.send('welcome to our volenteer api');
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})


