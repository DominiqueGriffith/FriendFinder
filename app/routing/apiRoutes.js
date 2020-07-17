// Pull in required dependencies
var path = require('path');

var friendData = require("../data/friends"); 
// var userData = require("../public/survey.html");


module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friendData);

    });


    app.post("/api/friends", function (req, res) {
        //   userData.push(req.body);
        // res.json(true);
        // alert("it works");

        // Holds the user input object (req.body)
        var newUserData = req.body;

        var userResponses = newUserData.score;

        // Compute best friend match
        var matchName = '';
        var matchImage = '';
        var totalDifference = 10000; // The initial value big for comparison

        // Examine all existing friends in the list
        for (var i = 0; i < friendData.length; i++) {
            // Compute differenes for each question
            var differenes = 0;
            // loop for each user response of each question
            for (var j = 0; j < userResponses.length; j++) {
                // looping through all of the friends data scores [i] for each question [j] subtracting by the user response for each question [j]
                differenes += Math.abs(friendData[i].score[j] - userResponses[j]);
            }
            if (differenes < totalDifference) {

                totalDifference = differenes;
                matchName = friendData[i].name;
                matchImage = friendData[i].photo;
            }
        }
        // Adding the new user to the mix
        friendData.push(newUserData);
        // Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
    });



};

        // var friendsDataTotalOne = math.abs(userData[0].score[0] - userData[1].questionOne[0]);

        // var friendsDataTotalTwo = math.abs(userData[0].score[1] - userData[1].questionTwo[1]);

        // var friendsDataTotalThree = math.abs(userData[0].score[2] - userData[1].questionThree[2]);

        // var friendsDataTotalFour = math.abs(userData[0].score[3] - userData[1].questionFour[3]);

        // var friendsDataTotalFive = math.abs(userData[0].score[4] - userData[1].questionFour[4]);


//     don't bring back maybe  var  friendsDataTotal = friendsData.score[0] + friendsData.score[1] + friendsData.score[2] + friendsData.score[3] + friendsData.score[4];

//   don't bring back maybe   var userDataTotal = questionOne[0] + questionTwo[1] + questionThree[2] + questionfour[3] + questionfive[4];

//    var totalDifference = friendsDataTotalOne + friendsDataTotalTwo +friendsDataTotalThree +friendsDataTotalFour + friendsDataTotalFive

// if (totalDifference < 3){
//     alert("You have a match");

// }

// else{
//     alert("no match");
// }