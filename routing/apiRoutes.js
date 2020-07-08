module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "/app/data/friends"));

    });

    app.post("/api/friends", function (req, res) {
        post.sendFile(path.join(__dirname, "/app/data/friends"));

    });

}