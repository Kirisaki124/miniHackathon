const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    player1: { type: String, required: true},
    player2: { type: String, required: true},
    player3: { type: String, required: true},
    player4: { type: String, required: true}
});

// mongoose.model("Question", QuestionSchema);

module.exports = mongoose.model("Score", ScoreSchema);