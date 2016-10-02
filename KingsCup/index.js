/**

***This script creates a new deck array and shuffles it to be used in Alexa's King Cup game
***

***/

/**
 * App ID for the skill
 */
var APP_ID = undefined;

var count = 52;

var deck = [52];

var AlexaSkill = require('./AlexaSkill');

var KingsCup = function(){
    AlexaSkill.call(this, APP_ID);
};

KingsCup.prototype = Object.create(AlexaSkill.prototype);
KingsCup.prototype.constructor = KingsCup;

KingsCup.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    //console.log("KingsCup onSessionStarted requestId: " + sessionStartedRequest.requestId  + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

KingsCup.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("KingsCup onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
   //var speechOutput = "Welcome to King\'s Cup.  Let\'s get lit. Say, Let\'s get lit.";
/*    var speechOutput = "Hello. Are you ready to get lit?";
    var repromptText = "Good";
    response.ask(speechOutput, repromptText) */
    var speechOutput = "Hello. Are you ready to get lit? Ready to start game. Please say, start game";
    var repromptText = "Please say, start game";
    response.ask(speechOutput, repromptText);
/*    StartCup();
    var msg = "";
    msg = drawFromDeck();
    response.tellWithCard(msg); */
    
};

KingsCup.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("KingsCup onSessionEnded requestId: " + sessionEndedRequest.requestId +
                 ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

KingsCup.prototype.intentHandlers = {
    // register custom intent handlers
    "KingsCupIntent": function (intent, session, response) {
        var speechOutput = "Ready to start game. Drawing first card.";
 //       StartCup();
        var deck = [52];

        var i = 0;

        for(i = 0; i < 52; i++){
          deck[i] = i;
          console.log(deck[i] + "");
        }
            console.log("Shuffling deck....");

        var current = deck.length-1, temp, random;

        while(current !== 0){

            random = Math.floor(Math.random() * current);
        
            temp = deck[current];
            deck[current] = deck[random];
            deck[random] = temp;

            current--;
        }



        var msg = "";
//        msg = draw();
//        console.log(msg);
        response.ask(speechOutput, "shuffled");
    },
    "DrawCardIntent": function(intent, session, response){
        var speechOutput = "Drawing next card";
        var msg = "";
        msg = draw();
        console.log(msg);
        response.ask(speechOutput, msg);
    },
    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say hello to me!", "You can say hello to me!");
    }
};

/**

***This script creates a new deck array and shuffles it to be used in 's King Cup game
***

***/
var deck = [52];

function StartCup(){
    
    createDeck(this.deck);
    var count = 52;
};


function createDeck(deck){

    var i = 0;

    for(i = 0; i < 52; i++){
        deck[i] = i;
        console.log(deck[i] + "");
    }
    console.log("Shuffling deck....");

    this.deck = shuffle(this.deck);

    for(i = 0; i < deck.length; i++){

        console.log(deck[i] + "");
    }
};

function draw(){
//    this.deck;
    var count = 52;
    drawFromDeck(this.deck, count);
};

function shuffle(deck){

    var current = deck.length-1, temp, random;

    while(current !== 0){

        random = Math.floor(Math.random() * current);
        
        temp = deck[current];
        deck[current] = deck[random];
        deck[random] = temp;

        current--;
    }

    return deck;
};

function drawFromDeck(deck, count){

    count--;
  while(count >= 0){
    var randPick = Math.floor(Math.random() * 52);
    console.log("Random card picked: " + deck[randPick]);

    var value = 0;
    var msg = "";
    
//I realized having if statements leading to case statements is very repetitive but that is a-O-fucking-kay

    if(randPick >= 0 || randPick <= 3){
        value = 0;
    }else if(randPick > 3 || randPick <=7){
        value = 1;
    }else if(randPick > 7 || randPick <= 11){
        value = 2; 
    }else if(randPick > 11 || randPick <= 15){
        value = 3;
    }else if(randPick > 15 || randPick <=19){
        value = 4;
    }else if(randPick > 19 || randPick <= 23){
        value = 5; 
    }else if(randPick > 23 || randPick <= 27){
        value = 6;
    }else if(randPick > 27 || randPick <=31){
        value = 7;
    }else if(randPick > 31 || randPick <= 35){
        value = 8; 
    }else if(randPick > 35 || randPick <= 39){
        value = 9;
    }else if(randPick > 39 || randPick <= 43){
        value = 10;
    }else if(randPick > 43 || randPick <= 47){
        value = 11; 
    }else if(randPick > 47 || randPick <= 51){
        value = 12;
    }

    switch(randPick){
        case 0:
            msg = "Ace Picked.  WATERFALL";
            break;
        case 1: 
            msg =  "Two for you!";
            break;
        case 2:
            msg = "Three is me!";
            break;
        case 3:
            msg = "Four is floor!";
            break;
        case 4: 
            msg = " Five is guys!";
            break;
        case 5:
            msg = "Six is chicks!";
            break;
        case 6:
             msg = "Seven is heaven!";
             break;
        case 7: 
            msg = "Eight is date!";
            break;
        case 8: 
            msg = "Nine is rhyme!";
            break;
        case 9: 
            msg = "Ten is categories!";
            break;
        case 10:
            msg = "Jack is never have I ever!";
            break;
        case 11:
            msg = "Queen is Question Master!";
            break;
        case 12:
            msg = "King! You get to make a new rule";
            break;
        default:
            msg = "no cards picked";
            break;
    }

    return msg;

  }

  return msg;
};



// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the KingsCup skill.
    var kingsCup = new KingsCup();
    kingsCup.execute(event, context);
};