const express = require("express")

const scoreModel = require('../models/score.model')

let Router = express.Router()

Router.post('/score', function(req, res){
    console.log(res.body)
    scoreModel.create(req.body, function(err, scoreCreate){
        if(err) res.send({success: 0, err: err})
        else res.send({success: 1, gameId: scoreCreate._id})
    })
})

Router.get('/score', function(req, res) {
    scoreModel.find({}, function(err, games){
        if (err) res.send({success: 0, err: err})
        else res.send({success: 1, game: games})
    })
})

module.exports = Router