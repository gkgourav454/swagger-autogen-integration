const express = require('express');
const app = express();

const projectRoute = require('./routes/project.routes.js');
const port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));



//app.use(bodyParser());
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.use("/project", projectRoute);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});