#!/usr/bin/env node

'use strict';

const Table = require('cli-table');
const chalk = require('chalk');
const request = require('request');

const Game = require('./components/game');

const table = new Table({
  head: [chalk.white('teams'), chalk.white('time'), chalk.white('score')],
});

request('http://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2016/scores/00_todays_scores.json', (error, response, body) => {
  const data = JSON.parse(body).gs.g;
  const games = [];
  data.forEach((item) => {
    games.push(new Game(item));
  });
  games.forEach((game) => {
    table.push([game.getTeams(), game.time, game.getScores()]);
  });
  console.log(table.toString());
});
