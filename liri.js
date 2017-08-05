var fs = require("fs");
var Twitter = require("twitter");
var keys = require("./keys.js");
var clientTwitter = new Twitter(keys.twitterKeys);
var userInput = process.argv[2];

if (userInput === "my-tweets"){
    var parameters = {screen_name: '2017bootcamper', count: "20"};

    clientTwitter.get('statuses/user_timeline', parameters, function(err, tweets, response) {
         if (!err) {
             tweets.forEach(function(element) {
                 console.log(`Tweet ${tweets.indexOf(element) + 1}: ${element.text}`);
                 console.log(`Tweeted: ${element.created_at}`);
             });
         } else {
            console.log(err);
         }
    });
}  