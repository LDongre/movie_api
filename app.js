const express = require('express')
const app = express()
const promise = require('request-promise')

app.set("view engine", "ejs");

app.get('/results', (req, res) => {
    res.render('search')
})

app.get('/movie-request', (req, res) => {

    //add your key here
    const key = '';
    const search = req.query.search
    promise(`http://www.omdbapi.com/?s=${search}&apikey=${key}`)
    .then( body => {
        const json = JSON.parse(body)
        console.log(json)
        res.render("results-page", {data: json})
    })
    .catch(err => console.log(`An error occured: ${err}`))
})

app.listen(3000, () => console.log("Listening at 3000"))