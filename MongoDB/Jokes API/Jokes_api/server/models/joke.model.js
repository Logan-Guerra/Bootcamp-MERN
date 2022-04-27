const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "Joke Setup is required"],
            minlength: [10, "Joke Setup must be at least 10 characters long"]
        },
        punchline: {
            type: String,
            required: [true, "Joke Punchline is required"],
            minlength: [10, "Joke Punchline must be at least 3 characters long"]
        }
    }, {timestamps: true}
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;