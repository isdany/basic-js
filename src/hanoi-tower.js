const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const moveHanoi = (disksNumber) => {

    if (disksNumber === 0) return 0;

    let turns = 1;

    turns += 2 * moveHanoi(disksNumber-1);

    return turns;
  }

  let res = {
    turns: 0,
    seconds: 0
  };

  res.turns = moveHanoi(disksNumber);
  res.seconds = Math.floor(res.turns / (turnsSpeed/3600));

  return res;
}

module.exports = {
  calculateHanoi
};
