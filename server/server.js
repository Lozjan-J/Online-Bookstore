const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const database = require('./database')


//ROUTES
const UserRoute = require('./routes/user-route');

//--------------------------------------------
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
        console.log('Database connected')
    },
    error => {
        console.log('Database connection failed: ' + error)
    }
)

//--------------------------------------------

const app = express()

app.use(cors({
    origin: '*' //allows requests from all sources
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//--------------------------------------------
app.use('/users', UserRoute);

//--------------------------------------------

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log('Connected to port: ' + port)
})