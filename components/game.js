const chalk = require('chalk');

const colormap = {
  Atlanta: 'red',
  Boston: 'green',
  Brooklyn: 'gray',
  Charlotte: 'cyan',
  Chicago: 'red',
  Cleveland: 'yellow',
  Dallas: 'blue',
  Denver: 'yellow',
  Detroit: 'red',
  'Golden State': 'yellow',
  Houston: 'red',
  Indiana: 'blue',
  LA: 'red',
  'Los Angeles': 'yellow',
  Memphis: 'blue',
  Miami: 'red',
  Milwaukee: 'green',
  Minnesota: 'gray',
  'New Orleans': 'blue',
  'New York': 'yellow',
  'Oklahoma City': 'blue',
  Orlando: 'blue',
  Philadelphia: 'red',
  Phoenix: 'yellow',
  Portland: 'red',
  Sacramento: 'magenta',
  'San Antonio': 'gray',
  Toronto: 'magenta',
  Utah: 'white',
  Washington: 'blue',
};

module.exports = class Game {
  constructor(obj) {
    this.time = obj.stt;
    this.home = {
      team: `${obj.h.tc} ${obj.h.tn}`,
      score: obj.h.s,
      color: colormap[obj.h.tc] || 'white',
    };
    this.visiting = {
      team: `${obj.v.tc} ${obj.v.tn}`,
      score: obj.v.s,
      color: colormap[obj.v.tc] || 'white',
    };
  }

  isFuture() {
    return this.time.includes('ET');
  }

  getTeams() {
    return chalk[this.visiting.color](this.visiting.team) + ' @ ' + chalk[this.home.color](this.home.team);
  }

  getScores() {
    if (this.isFuture()) {
      return 'N/A';
    }
    return `${this.visiting.score} - ${this.home.score}`;
  }
};


