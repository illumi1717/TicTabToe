import GameFieldCheckerService from './GameFieldCheckerService.js'; 
import GameWindowMenuService from './GameWindowMenuService.js';
import GameFieldWindowService from './GameFieldWindowService.js';
import GameBotService from './GameBotService.js';
import GameScoreModel from '../models/GameScoreModel.js';
import GameMenuModel from '../models/GameMenuModel.js';

export default class GameListenersService {

    //helpers
    static winnerDetermination(GameFieldModel) {
        return GameFieldCheckerService.checkForVictory(
            GameFieldModel.getRows(), 
            GameFieldModel.getColumns(), 
            GameFieldModel.getDiagonals()
        );
    }

    static addWinnerPoint(winner) {
        if (winner === 'X') {
            GameScoreModel.updateScore('firstPlayer');
        } else if (winner === 'O') {
            GameScoreModel.updateScore('secondPlayer');
        }
    }

    static createMenuWindow() {
        if (!GameMenuModel.getMenuWindow()) {
            const menuWindow = GameWindowMenuService.openWindow(
                GameScoreModel.score.firstPlayer, 
                GameScoreModel.score.secondPlayer, 
                localStorage.getItem('mode')
            );
            GameMenuModel.setMenuWindow(menuWindow);
        }
    }

    static closeListeners(listeners) {
        listeners.forEach(listener => {
            listener.close();
        });
    }

    //listeners
    static botMoveListener(GameFieldModel) {
        const broadcastBotMoveListener = new BroadcastChannel('game');
        broadcastBotMoveListener.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'update-field-state') {
                try {
                    const botMoveBoxCoords = GameBotService.move(GameFieldModel.getMatrixField());
                    broadcastBotMoveListener.postMessage(JSON.stringify({
                        type: 'update-field-state',
                        rowId: botMoveBoxCoords[0],
                        colId: botMoveBoxCoords[1],
                        state: 'O'
                    }));
                } catch {}
            }
        }
        return broadcastBotMoveListener;
    }

    static updateFieldListener(GameFieldModel) {
        const broadcastUpdateFieldListener = new BroadcastChannel('game');
        broadcastUpdateFieldListener.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'update-field-state') {
                GameFieldModel.updateField(data.rowId, data.colId, data.state)
            }
        }
        return broadcastUpdateFieldListener;
    }

    static drawDeterminationListener(GameFieldModel) {
        const broadcastDrawDeterminationListener = new BroadcastChannel('game');
        broadcastDrawDeterminationListener.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'update-field-state') {
                const freeBoxes = GameFieldCheckerService.getFreeBoxes(GameFieldModel.getMatrixField());
                if (freeBoxes.length === 0) {
                    GameListenersService.createMenuWindow();
                }
            }
        }
        return broadcastDrawDeterminationListener;
    }

    static winnerDeterminationListener(GameFieldModel) {
        const broadcastWinnerDeterminationListener = new BroadcastChannel('game');
        broadcastWinnerDeterminationListener.onmessage = (event) => {
            if (JSON.parse(event.data).type === 'update-field-state') {    
                const winner = GameListenersService.winnerDetermination(GameFieldModel);
                if (winner && !GameMenuModel.getMenuWindow()) {
                    GameListenersService.addWinnerPoint(winner);
                    GameListenersService.createMenuWindow();
                }
            }
        }
        return broadcastWinnerDeterminationListener;
    }

    static restartGameListener(GameFieldModel) {
        const broadcastRestartGameListener = new BroadcastChannel('game');
        broadcastRestartGameListener.onmessage = (event) => {
            if (JSON.parse(event.data).type === 'restart-game') {
                GameFieldModel.clearField();
                GameWindowMenuService.closeWindow(GameMenuModel.getMenuWindow());
                GameMenuModel.setMenuWindow(null);
            }
        }
        return broadcastRestartGameListener;
    }

    static stopGameListener(GameFieldModel) {
        const broadcastStopGameListener = new BroadcastChannel('game');
        broadcastStopGameListener.onmessage = (event) => {
            if (JSON.parse(event.data).type === 'stop-game') {
                GameFieldModel.clearField();
                GameScoreModel.clearScore();
                const menuWindowObj = GameMenuModel.getMenuWindow();
                if(menuWindowObj) {
                    GameWindowMenuService.closeWindow(GameMenuModel.getMenuWindow());
                }
                GameFieldWindowService.destroyField(GameFieldModel.getFieldWindows());
            }
        }
        return broadcastStopGameListener;
    }

    static closeGameListenersListener(listeners) {
        const broadcastCloseListener = new BroadcastChannel('game');
        broadcastCloseListener.onmessage = (event) => {
            if (JSON.parse(event.data).type === 'stop-game') {
                GameMenuModel.setMenuWindow(null);
                GameListenersService.closeListeners(listeners);
                broadcastCloseListener.close();
            }
        }
    }
}