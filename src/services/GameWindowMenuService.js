export default class GameWindowMenuService{
    static openWindow(firstPlayer, secondPlayer, mode) {
        const menuWindow = window.open(    
            `/game-window-menu?firstPlayer=${firstPlayer}&secondPlayer=${secondPlayer}&mode=${mode}`, 
            
            'game-window-menu', 
            
            `width=300,
            height=150,
            left=${(screen.width - 300) / 2},
            top=${(screen.height - 200) / 2}`
            );
        return menuWindow;
    }

    static closeWindow(menuWindow) {
        menuWindow.close();
    }
}
