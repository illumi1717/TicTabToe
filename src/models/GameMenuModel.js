class GameMenuModel {
    constructor() {
        this.menuWindow = null;
    }

    setMenuWindow(menuWindow) {
        this.menuWindow = menuWindow;
    }

    getMenuWindow() {
        return this.menuWindow;
    }
}

export default new GameMenuModel()