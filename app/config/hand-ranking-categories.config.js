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

        _.forEach(suites, (value, key) => {

            for (var i=0; i < ranks.length - 4; i++) {
                let hand = _.take(_.drop(ranks, i), 5);
                suiteIndex++;
                possibilities[suiteIndex] = hand.map((val) => {
                    return val + key;
                });
            }

        });

        return possibilities;
    },

    'four-of-a-kind': () => {
        let possibilities = [];

        ranks.forEach((value, index) => {
            possibilities[index] = _.map(_.keys(suites), (key) => {
                return value + key;
            });
        });

        return possibilities;
    }
};