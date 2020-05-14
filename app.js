const express = require('express')
const app = express()

const moviesRouter = require('./routes/movies')

const mustacheExpress = require('mustache-express')

// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
    // the pages are located in views directory
app.set('views', './views')
    // extension will be .mustache
app.set('view engine', 'mustache')

// localhost:3000/css/version-1/style.css
app.use('/css/version-1',express.static('css'))
// localhost:3000/js/client.js
app.use(express.static('public'))

global.movies = [] // global variable which can be used in other routing files 

app.use(express.urlencoded()) // for parsing form submitted data 


app.use('/movies',moviesRouter)

app.listen(3000, () => {
    console.log('Server has started')
})