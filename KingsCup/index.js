/**

***This script creates a new deck array and shuffles it to be used in Alexa's King Cup game
***

***/

/**
 * App ID for the skill
 */
var APP_ID = undefined;

var AlexaSkill = require('./AlexaSkill'), require('./KingsCup_deck');

var KingsCup = function(){
    AlexaSkill.call(this, APP_ID);
}

var msg = "";

KingsCup.prototype = Object.(create(AlexaSkill.prototype);
KingsCup.prototype.constructor = KingsCup;

KingsCup.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("KingsCup onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

KingsCup.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("KingsCup onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    var speechOutput = "Welcome to King\'s Cup.  Let\'s get lit. Say, Let\'s get lit.";
    var repromptText = "Let us get lit. ";
    response.ask(speechOutput, repromptText);
};

KingsCup.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("KingsCup onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

KingsCup.prototype.intentHandlers = {
    // register custom intent handlers
    "KingsCupIntent": function (intent, session, response) {
        response.tellWithCard("Ready to start game. Drawing first card.");
        StartGame();
        msg = drawFromDeck();
        response.tellWithCard(msg);
    },
    "DrawCardIntent": function(intent, session, response){
        response.tellWithCard("Drawing next card");
        msg = drawFromDeck();
        response.tellWithCard(msg);
    }
    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say hello to me!", "You can say hello to me!");
    }
};

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the KingsCup skill.
    var KingsCup = new KingsCup();
    KingsCup.execute(event, context);
};