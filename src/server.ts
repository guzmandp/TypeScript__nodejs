import express from 'express';
import routes from './routes'

const port = 8000

const app = express();

app.use(routes);


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});