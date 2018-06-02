const express = require('express')
const fs = require('fs')

const scoreModel = require('../models/score.model')
const path = require('path')
let Router = express.Router()

//Middleware
Router.use(function (req, res, next) {
    console.log("Game Router");
    next();
});

Router.get('/:id', function (req, res) {
    let gameId = req.params.id

    try {
        scoreModel.findById(gameId, function (err, gameFound) {
            if (err) console.log(err)
            else {
                res.render('view', {
                    player1: gameFound.player1,
                    player2: gameFound.player2,
                    player3: gameFound.player3,
                    player4: gameFound.player4
                })
            }
        })
    }
    catch (err) {
        console.log("Exeption: " + err)
    }

})

module.exports = Router;