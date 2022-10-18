<template>
    <div class="main-view">
        <u-menu 
            @start="startGame"
            @settings="$router.push('/settings')"
        />
    </div>
</template>

<script>
    import UMenu from '@/components/UMenu';
    import GameFieldWindowService from '@/services/GameFieldWindowService';
    import GameListenersService from '@/services/GameListenersService';
    import GameFieldModel from '@/models/GameFieldModel';

    export default {
        name: 'main-view',

        components: {
            UMenu
        },

        methods: {
            addMultiplayerListeners() {
                let listeners = [];

                listeners.push(GameListenersService.updateFieldListener(
                    GameFieldModel
                ));
                listeners.push(GameListenersService.drawDeterminationListener(
                    GameFieldModel
                ));
                listeners.push(GameListenersService.winnerDeterminationListener(
                    GameFieldModel
                ));
                listeners.push(GameListenersService.restartGameListener(
                    GameFieldModel
                ));
                listeners.push(GameListenersService.stopGameListener(
                    GameFieldModel
                ));

                if (localStorage.getItem('mode') === 'single') {
                    listeners.push(GameListenersService.botMoveListener(
                        GameFieldModel
                    ));
                }

                GameListenersService.closeGameListenersListener(listeners);
            },

            createField() {
                const boxSize = +localStorage.getItem('fieldSize') ?? 200;
                const fieldWindows = GameFieldWindowService.createField(boxSize);
                GameFieldModel.setFieldWindows(fieldWindows);
            },

            startGame() {
                this.createField();
                this.addMultiplayerListeners();
            }
        }
    }
</script>
