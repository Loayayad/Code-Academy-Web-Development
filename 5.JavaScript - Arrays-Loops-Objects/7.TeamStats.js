let team = {

    _players: [{
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
    }],
    _games: [{
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
    }],
    get players() {

        return team._players;
    },
    get games() {

        return team._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };

        this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this._games.push(game);
    }

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('ahly',78,45);
team.addGame('barca',45,23);

console.log(team.players);
console.log(team.games);