const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const ScoreSchema = require('./models/score.model');
const apiRouter = require('./router/apiRouter')
const gameRouter = require('./router/gameRouter')

mongoose.connect('mongodb://localhost/test', function (err) {
    if (err) console.log(err)
    else console.log("DB connect success!");
});

let app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.use(express.static("public"))

app.get('/', function (req, res) {
    res.render('home')
})

app.use('/api', apiRouter)

app.use('/game', gameRouter)


//Middleware
app.use(function(req, res, next) {
    console.log("Middleware say hello!");
    res.send("Not found!");
});

app.listen(8000, function (err) {
    if (err) console.log(err)
    else console.log("sever up")
})