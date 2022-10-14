class GameScore {
    constructor() {
        this.score = {
            firstPlayer: 0,
            secondPlayer: 0
        }
    }

    updateScore(player) {
        this.score[player]++;
    }

    clearScore() {
        this.score.firstPlayer = 0;
        this.score.secondPlayer = 0;
    }
}

export default new GameScore()