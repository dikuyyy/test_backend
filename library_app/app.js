require('dotenv/config');
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swaggerConfig')

const route = require('./src/routes/api');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use("/api", route)


app.listen(process.env.PORT, () => {
    console.info("Server is running on ports " + process.env.PORT);
});

app.get('/', (req, res) => {
    res.status(200).json('Server is running');
})