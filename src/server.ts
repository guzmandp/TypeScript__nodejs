import express from 'express';
import routes from './routes'
import path from 'path';

const port = 8000

const app = express();

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));


app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});