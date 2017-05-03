const Table = require('cli-table');
const chalk = require('chalk');
// instantiate
const table = new Table({
  head: [chalk.white('teams'), chalk.white('time'), chalk.white('time')],
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
  ['First value', chalk.red('Second value')]
  , ['First value', 'Second value']
);

console.log(table.toString());
