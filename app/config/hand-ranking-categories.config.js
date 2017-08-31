let _ = require('lodash');

let suites = {
    'C': 'Clubs',
    'D': 'Diamonds',
    'H': 'Hearts',
    'S': 'Spades'
};
let ranks = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];

module.exports = {

    'straight flush': () => {

        let possibilities = [];
        let suiteIndex = 0;

        _.forEach(suites, (value, suit) => {

            for (var i=0; i < ranks.length - 4; i++) {
                let hand = _.take(_.drop(ranks, i), 5);
                suiteIndex++;
                possibilities[suiteIndex] = hand.map((rank) => {
                    return rank + suit;
                });
            }

        });

        return possibilities;
    },

    'four-of-a-kind': () => {
        let possibilities = [];

        ranks.forEach((rank, index) => {
            possibilities[index] = _.map(_.keys(suites), (suit) => {
                return rank + suit;
            });
        });

        return possibilities;
    },

    'full-house': () => {
        let possibilities = {
            triplet: [],
            pair: []
        };
        let tripletIndex = 0,
            pairIndex = 0;

        let fullHouseSuites = {
            triplet: {
                0: ['C','D','H'],
                1: ['C','D','S'],
                2: ['C','H','S'],
                3: ['D','H','S'],
                4: ['D','H','S']
            },
            pair: {
                0: ['C','D'],
                1: ['C','H'],
                2: ['C','S'],
                3: ['D','H'],
                4: ['D','S'],
                5: ['H','S'],
            }
        };

        ranks.forEach((rank) => {

            _.forEach(fullHouseSuites['triplet'], (triplet) => {
                tripletIndex++;

                possibilities['triplet'][tripletIndex] = triplet.map(suit => rank+suit);
            });

            _.forEach(fullHouseSuites['pair'], (pair) => {
                pairIndex++;

                possibilities['pair'][pairIndex] = pair.map(suit => rank+suit);
            });
        });

        return possibilities;
    }
};