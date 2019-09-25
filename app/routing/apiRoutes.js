var friendsData = require("../data/friendsData");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;

        //Convert each user's results into a simple array of numbers
        for (var i = 0; i < newFriend.scores.length; i++) {
            newFriend.scores[i] = parseInt(newUser.scores[i]);
        }

        var totalDifference;
    });

};