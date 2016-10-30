var  starWarsName = require( './starwars-name.json');
var uniqueRandomArray = require( 'unique-random-array');

module.exports = {
    all: starWarsName,
    random: uniqueRandomArray(starWarsName)
};