 let express = require('express')
let router = express.Router() 

router.post('/add-movie', (req, res) => {

    let name = req.body.name
    

    let movie = { name: name }

    movies.push(movie)

    res.render('add-movie', { movies: movies })

})

router.post('/delete-movie', (req, res) => {

    let name = req.body.name
    movies = movies.filter(movie => movie.name != name)
    res.redirect('/movies')
})

// /trips 
router.get('/', (req, res) => {

    res.render('movies', { movies: movies })
})


router.get('/add-movie', (req, res) => {
    // display add-trip.mustache page 
    res.render('add-movie')
}) 


module.exports = router 