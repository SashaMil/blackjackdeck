/**
 * Created by sashamilenkovic on 6/19/17.
 */
//Random Number Generators
var card_Draw = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

var first_Card_Generator = (card_Draw(1,52));
var second_Card_Generator = (card_Draw(1,52));

var third_Card_Generator = (card_Draw(1,52));
var fourth_Card_Generator = (card_Draw(1,52));

var fifth_Card_Generator = (card_Draw(1,52));
var sixth_Card_Generator = (card_Draw(1,52));

var seventh_Card_Generator = (card_Draw(1,52));
var eighth_Card_Generator = (card_Draw(1,52));

var ninth_Card_Generator = (card_Draw(1,52));
var tenth_Card_Generator = (card_Draw(1,52));

var eleventh_Card_Generator = (card_Draw(1,52));
var twelfth_Card_Generator = (card_Draw(1,52));

var deck_of_Cards = [
    ["King of Diamonds", 10],
    ["King of Hearts", 10],
    ["King of Clubs", 10],
    ["King of Spades", 10],
    ["Queen of Diamonds", 10],
    ["Queen of Hearts", 10],
    ["Queen of Clubs", 10],
    ["Queen of Spades", 10],
    ["Jack of Diamonds", 10],
    ["Jack of Hearts", 10],
    ["Jack of Clubs", 10],
    ["Jack of Spades", 10],
    ["Ten of Diamonds", 10],
    ["Ten of Hearts", 10],
    ["Ten of Clubs", 10],
    ["Ten of Spades", 10],
    ["Nine of Diamonds", 9],
    ["Nine of Hearts", 9],
    ["Nine of Clubs", 9],
    ["Nine of Spades", 9],
    ["Eight of Diamonds", 8],
    ["Eight of Hearts", 8],
    ["Eight of Clubs", 8],
    ["Eight of Spades", 8],
    ["Seven of Diamonds", 7],
    ["Seven of Hearts", 7],
    ["Seven of Clubs", 7],
    ["Seven of Spades", 7],
    ["Six of Diamonds", 6],
    ["Six of Hearts", 6],
    ["Six of Clubs", 6],
    ["Six of Spades", 6],
    ["Five of Diamonds", 5],
    ["Five of Hearts", 5],
    ["Five of Clubs", 5],
    ["Five of Spades", 5],
    ["Four of Diamonds", 4],
    ["Four of Hearts", 4],
    ["Four of Clubs", 4],
    ["Four of Spades", 4],
    ["Three of Diamonds", 3],
    ["Three of Hearts", 3],
    ["Three of Clubs", 3],
    ["Three of Spades", 3],
    ["Two of Diamonds", 2],
    ["Two of Hearts", 2],
    ["Two of Clubs", 2],
    ["Two of Spades", 2],
    ["Ace of Diamonds", 1],
    ["Ace of Hearts", 1],
    ["Ace of Clubs", 1],
    ["Ace of Spades", 1]
];

var aceOption = function(hand) {
    return "Hello";
};

var dealerCard1 = function(hand) {
    if (first_Card_Generator >= 48) {
        return aceOption;
    } else {
        return (deck_of_Cards[hand][1]);
    }
};

var dealerCard2 = function(hand) {
    if (second_Card_Generator >= 48) {
        return aceOption;
    } else {
        return (deck_of_Cards[hand][1]);
    }
};

var returned_Dealer_Card_Value = (deck_of_Cards[first_Card_Generator].pop());
var returned_Dealer_Card_Name = (deck_of_Cards[first_Card_Generator].pop());


var returned_Dealer_Card_Value2 = (deck_of_Cards[second_Card_Generator].pop());
var returned_Dealer_Card_Name2 = (deck_of_Cards[second_Card_Generator].pop());

var playerCard1 = function(hand) {
    if (third_Card_Generator >= 48) {
        return aceOption;
    } else {
        return (deck_of_Cards[hand][1]);
    }
};

var playerCard2 = function(hand) {
    if (fourth_Card_Generator >= 48) {
        return aceOption;
    } else {
        return (deck_of_Cards[hand][1]);
    }
};

var returned_Player_Card_Value = (deck_of_Cards[third_Card_Generator].pop());
var returned_Player_Card_Name = (deck_of_Cards[third_Card_Generator].pop());


var returned_Player_Card_Value2 = (deck_of_Cards[fourth_Card_Generator].pop());
var returned_Player_Card_Name2 = (deck_of_Cards[fourth_Card_Generator].pop());

var card5 = function(hand) {
    if (third_Card_Generator >= 48) {
        return aceOption;
    } else {
        return (deck_of_Cards[hand][1]);
    }
};

var card6 = function(hand) {
    if (fourth_Card_Generator >= 48) {
        return aceOption;
    } else {
        return (deck_of_Cards[hand][1]);
    }
};

var returned_Card_Value5 = (deck_of_Cards[fifth_Card_Generator].pop());
var returned_Card_Name5 = (deck_of_Cards[fifth_Card_Generator].pop());

var returned_Card_Value6 = (deck_of_Cards[sixth_Card_Generator].pop());
var returned_Card_Name6 = (deck_of_Cards[sixth_Card_Generator].pop());


var card7 = function(hand) {
    if (seventh_card_Generator >= 48) {
        return aceOption;
    } else {
        return (deck_of_Cards[hand][1]);
    }
};

var card8 = function(hand) {
    if (eight_Card_Generator >= 48) {
        return aceOption;
    } else {
        return (deck_of_Cards[hand][1]);
    }
};

var returned_Card_Value7 = (deck_of_Cards[seventh_Card_Generator].pop());
var returned_Card_Name7 = (deck_of_Cards[seventh_Card_Generator].pop());

var returned_Card_Value8 = (deck_of_Cards[eighth_Card_Generator].pop());
var returned_Card_Name8 = (deck_of_Cards[eighth_Card_Generator].pop());



var card9 = function(hand) {
    if (ninth_Card_Generator >= 48) {
        return aceOption;
    } else {
        return (deck_of_Cards[hand][1]);
    }
};

var card10 = function(hand) {
    if (tenth_Card_Generator >= 48) {
        return aceOption;
    } else {
        return (deck_of_Cards[hand][1]);
    }
};

var returned_Card_Value9 = (deck_of_Cards[ninth_Card_Generator].pop());
var returned_Card_Name9 = (deck_of_Cards[ninth_Card_Generator].pop());

var returned_Card_Value10 = (deck_of_Cards[tenth_Card_Generator].pop());
var returned_Card_Name10 = (deck_of_Cards[tenth_Card_Generator].pop());


var card11 = function(hand) {
    if (eleventh_Card_Generator >= 48) {
        return aceOption;
    } else {
        return (deck_of_Cards[hand][1]);
    }
};

var card12 = function(hand) {
    if (twelfth_Card_Generator >= 48) {
        return aceOption;
    } else {
        return (deck_of_Cards[hand][1]);
    }
};

var returned_Card_Value11 = (deck_of_Cards[eleventh_Card_Generator].pop());
var returned_Card_Name11 = (deck_of_Cards[twelfth_Card_Generator].pop());

var returned_Card_Value12 = (deck_of_Cards[twelfth_Card_Generator].pop());
var returned_Card_Name12 = (deck_of_Cards[twelfth_Card_Generator].pop());


var dealerHand = (returned_Dealer_Card_Value + returned_Dealer_Card_Value2);
var playerHand = (returned_Player_Card_Value + returned_Player_Card_Value2);

var random_Card_Arrays = [[returned_Card_Name5, returned_Card_Value5]];



console.log("Dealer shows " + returned_Dealer_Card_Name);
console.log("\n");
console.log("You show " + returned_Player_Card_Name + " and " + returned_Player_Card_Name2 + " for a total of " + playerHand);
console.log("\n");
console.log("Would you like to hit or stay?");
console.log("\n");

//user input

var add_Player_Card = function() {
    var i = 0;
    return((random_Card_Arrays[i][0]));
    i++;
};

var add_Player_Card2 = function() {
    var i = 0;
    return((random_Card_Arrays[i][1]));
    i++;
};

var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

var property = {
    name: 'yesno',
    validator: /y[es]*|n[o]?/,
    warning: 'Must respond yes or no',
    default: 'no'
};

//
// Get the simple yes or no property
//

function ask() {
    // Ask for name until user inputs "done"
    prompt.get(['action'], function(err, result) {

        currentActionName = result.action;
        switch (currentActionName) {
            case 'hit':
                console.log("You drew a " + add_Player_Card() + " and now have a total of " + ((playerHand) += add_Player_Card2()));
                // call hit function
                ask();
                break;

            case 'stay':
                console.log('You have stayed. The dealer draws a ' + returned_Dealer_Card_Name2 + " for a total of " + dealerHand);
                // call stay function
                ask();
                break;

            case 'quit':
                console.log('All done!');
                // call hit function
                break;

            default:
                console.log("Invalid input");
                ask();
        }

    });
}

ask();








