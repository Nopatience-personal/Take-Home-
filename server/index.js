const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const DATABASE = [];
//const pino = require('express-pino-logger');
var cors = require('cors');
const app = express();
const port = 3001;



app.use(bodyParser.urlencoded({ extended: false }));
//app.use(pino);
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use("/", router);
app.use(cors());

//app.get('/api/employees', (req, res) => {
  //const newEmp = req.query.newEmployee || 'Employee API-- Add a Employee to start';
  //res.setHeader('Content-Type', 'application/json');
  //res.send(JSON.stringify({ newEmployee:  'Employee: '  +newEmp }));
//});

router.get('/api/employees',(request,response) => {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify({ DATABASE }));

});

router.post('/api/employees',(request,response) => {

    console.log(request.body);
});

app.listen(port, () =>
  console.log('Express server is running on localhost:3001')
);
