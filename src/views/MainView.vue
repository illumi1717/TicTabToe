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
                const updateFieldListenerObject = GameListenersService.updateFieldListener(
                    GameFieldModel
                );
                const winnerDeterminationListenerObject = GameListenersService.winnerDeterminationListener(
                    GameFieldModel
                );
                const restartGameListenerObject = GameListenersService.restartGameListener(
                    GameFieldModel
                );
                const stopGameListenerObject = GameListenersService.stopGameListener(
                    GameFieldModel
                );
                GameListenersService.closeGameListenersListener([
                    updateFieldListenerObject,
                    winnerDeterminationListenerObject,
                    restartGameListenerObject,
                    stopGameListenerObject
                ]);
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
