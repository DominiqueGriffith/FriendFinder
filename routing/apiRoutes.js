var userData = require("../app/data/friends");
// var userData = require("../public/survey.html");


module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(userData);

    });


    app.post("/api/friends", function (req, res) {
        userData.push(req.body);
        res.json(true);

        var friendsDataTotalOne = math.abs(friendsData.score[0] - userData.questionOne[0]);

        var friendsDataTotalTwo = math.abs(friendsData.score[1] - userData.questionTwo[1]);

        var friendsDataTotalThree = math.abs(friendsData.score[2] - userData.questionThree[2]);

        var friendsDataTotalFour = math.abs(friendsData.score[3] - userData.questionFour[3]);

        var friendsDataTotalFive = math.abs(friendsData.score[4] - userData.questionFour[4]);
        

//       var  friendsDataTotal = friendsData.score[0] + friendsData.score[1] + friendsData.score[2] + friendsData.score[3] + friendsData.score[4];

//    var userDataTotal = questionOne[0] + questionTwo[1] + questionThree[2] + questionfour[3] + questionfive[4];

   var totalDifference = friendsDataTotalOne + friendsDataTotalTwo +friendsDataTotalThree +friendsDataTotalFour + friendsDataTotalFive

if (totalDifference < 3){
    alert("You have a match");

}

else{
    alert("no match");
}
    });

}