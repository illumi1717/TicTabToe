import tictactoe from 'tictactoe-ai';

export default class GameBotService {
    static move(field) {
        const board = new tictactoe.TicTacToeBoard(field.flat());     
        const aiTeam = board.oppositePlayer("X");
        const aiPlayer = new tictactoe.TicTacToeAIPlayer();
        aiPlayer.initialize(aiTeam, board);
        const move = aiPlayer.makeMove();
        return [move.y, move.x]
    }
}