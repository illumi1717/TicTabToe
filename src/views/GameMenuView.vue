<template>
    <div class="game-menu-view">
        <div class="score--wrapper">
            <div class="score-container">
                <div class="score-block">
                    <div class="player-field">
                        <span>{{$route.query.mode == 'multi' ? 'Player1' : 'You'}}</span>
                    </div>
                    <div class="score-field">
                        {{$route.query.firstPlayer}}
                    </div>
                </div>

                <div class="score-block">
                    <div class="player-field">
                        <span>{{$route.query.mode == 'multi' ? 'Player2' : 'Robot'}}</span>
                    </div>
                    <div class="score-field">
                        {{$route.query.secondPlayer}}
                    </div>
                </div>
            </div>
        </div>

        <div class="menu-container">
            <div class="menu">
                <u-button @click="restartGame">Restart</u-button>
                <u-button @click="stopGame">Stop</u-button>
            </div>
        </div>
    </div>
</template>

<script>
    import UButton from '@/components/UButton';

    export default {
        name: 'game-menu-view',

        broadcast: new BroadcastChannel('game'),  

        components: {
            UButton
        },

        methods: {
            restartGame() {
                this.$options.broadcast.postMessage(JSON.stringify({
                    type: 'restart-game'
                }));
            },

            stopGame() {
                this.$options.broadcast.postMessage(JSON.stringify({
                    type: 'stop-game'
                }));
            }
        }
    }
</script>
