let readlineSync = require('readline-sync');
let _  = require('lodash');

let poker = require('./app/services/poker.service');

while (true) {
    let input = readlineSync.question('Please input your hand cards + top 5 deck cards: ');
    let cards = input.split(' ');
    let hand = _.take(cards, 5);
    let topFive = _.takeRight(cards, 5);

    let bestHandValue = poker.calcBestHand(cards);

    console.log(`Hand: ${print(hand)} Deck: ${print(topFive)} Best hand: ${bestHandValue}`);
}

function print(array) {
    return _.join(array, ' ');
}
