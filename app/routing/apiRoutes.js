var friendsData = require("../data/friendsData");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });
    
    app.post("/api/friends", function(req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
          }
          else {
            waitListData.push(req.body);
            res.json(false);
          }
    });

};