/**

***This script creates a new deck array and shuffles it to be used in Alexa's King Cup game
***

***/

var deck = [52];
createDeck(deck);
drawFromDeck(deck);

function createDeck(deck){

	

	var i = 0;

	for(i = 0; i < 52; i++){
		deck[i] = i;
		console.log(deck[i] + "");
	}

    console.log("Shuffling deck....");

	deck = shuffle(deck);

	for(i = 0; i < deck.length; i++){

		console.log(deck[i] + "");
	}


}

function shuffle(deck){

	var current = deck.length-1, temp, random;

	while(current != 0){

		random = Math.floor(Math.random() * current);

		
		temp = deck[current];
		deck[current] = deck[random];
		deck[random] = temp;

		current--;

	}

	return deck;

}

function drawFromDeck(deck){

    var randPick = Math.floor(Math.random() * 52);
    console.log("Random card picked: " + deck[randPick]);

    var value = 0;

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
            console.log("Alexa: Ace Picked.  WATERFALL");
            break;
        case 1: 
            console.log("Alexa: Two for you!");
            break;
        case 2:
            console.log("Alexa: Three is me!");
            break;
        case 3:
            console.log("Alexa:  Four is floor!");
            break;
        case 4: 
            console.log("Alexa: Five is guys!");
            break;
        case 5:
            console.log("Alexa: Six is chicks!");
            break;
        case 6:
             console.log("Alexa: Seven is heaven!");
             break;
        case 7: 
            console.log("Alexa: Eight is date!");
            break;
        case 8: 
            console.log("Alexa: Nine is rhyme!");
            break;
        case 9: 
            console.log("Alexa: Ten is categories!");
            break;
        case 10:
            console.log("Alexa: Jack is never have I ever!");
            break;
        case 11:
            console.log("Alexa: Queen is Question Master!");
            break;
        case 12:
            console.log("Alexa: King! You get to make a new rule");
            break;
        default:
            console.log("no cards picked");
            break;
    }

    

}
