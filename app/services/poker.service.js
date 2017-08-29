let handRanks = require('../config/hand-ranking-categories.config');
let _ = require('lodash');

exports.calcBestHand = (input) => {

    let winningHands = {};

    _.forEach(handRanks, (func, rankName) => {
        winningHands[rankName] =  _.some(func(), (value) => {
            if (!value) return false;

            return (_.intersection(value, input).length >= value.length);
        });
    });

    return _.findKey(winningHands, (val) => val === true);
};

