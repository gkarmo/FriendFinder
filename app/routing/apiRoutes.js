var friendsData = require("../data/friendsData");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        var newFriend = req.body;

        //Convert each user's results into a simple array of numbers
        for (var i = 0; i < newFriend.scores.length; i++) {
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }

        var totalDifference;

        var newFriendIndex = 0;
        var minimumDifference = 40;

        for (var i = 0; i < friendsData.length; i++) {
             totalDifference = 0;
            for (var j = 0; j < friendsData[i].scores.length; j++) {
                var difference = Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);
                totalDifference += difference;
            }

            if (totalDifference < minimumDifference) {
                newFriendIndex = i;
                minimumDifference = totalDifference;
            }
        }

        friendsData.push(newFriend);

 
        res.json(friendsData[newFriendIndex]);

    });

};