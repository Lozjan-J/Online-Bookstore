const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const database = require('./database')

//ROUTES
const UserRoute = require('./routes/user-route');
const ContactRoute = require('./routes/contact-route');
const BookRoute = require('./routes/book-route');
const CategoryRoute = require('./routes/category-route');
const AuthorRoute = require('./routes/author-route');
const LanguageRoute = require('./routes/language-route');
const GenreRoute = require('./routes/genre-route');

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
app.use('/contact', ContactRoute);
app.use('/books', BookRoute);
app.use('/categories', CategoryRoute);
app.use('/authors', AuthorRoute);
app.use('/languages', LanguageRoute);
app.use('/genres', GenreRoute);

//--------------------------------------------

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log('Connected to port: ' + port)
})