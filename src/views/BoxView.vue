<template>
    <div class="box-view">
        {{state}}
    </div>
</template>

<script>
    export default {
        name: 'box-view',
        
        data() {
            return {
                state: '',
                currentPlayer: 'X',
                boxId: window.name.split('-')[1]
            }
        },

        methods: {
            changeCurrentPlayerListener() {
                new BroadcastChannel('game').onmessage = (event) => {
                    const data = JSON.parse(event.data);
                    if (data.type === 'update-field-state') {
                        if (data.state === 'X') {
                            this.currentPlayer = 'O';
                        } else {
                            this.currentPlayer = 'X';
                        }
                    }
                };
            },

            clearStateListener() {
                new BroadcastChannel('game').onmessage = (event) => {
                    const data = JSON.parse(event.data);
                    if (data.type === 'restart-game') {
                        this.currentPlayer = 'X';
                        this.state = '';
                    }
                }
            },

            updateStateByBroadcastChannelListener() {
                new BroadcastChannel('game').onmessage = (event) => {
                    const data = JSON.parse(event.data);

                    if (data.type === 'update-field-state') {
                        if (!this.state && this.boxId === `${data.rowId}${data.colId}`) {
                            this.state = data.state;
                        }
                    }
                }
            },

            changeStateListener() {
                const broadcast = new BroadcastChannel('game');
                window.addEventListener('click', () => {
                    if (!this.state) {
                        this.state = this.currentPlayer;
                        broadcast.postMessage(JSON.stringify({
                            type: 'update-field-state',
                            rowId: this.boxId[0],
                            colId: this.boxId[1],
                            state: this.state
                        }));
                    }
                });
            },

            stopGameIfCloseWindow() {
                window.addEventListener("beforeunload", () => {
                    const broadcast = new BroadcastChannel('game');
                    broadcast.postMessage(JSON.stringify({
                        type: 'stop-game'
                    }));
                });
            }
        },

        mounted() {
            this.changeStateListener();
            this.updateStateByBroadcastChannelListener();
            this.changeCurrentPlayerListener();
            this.clearStateListener();
            this.stopGameIfCloseWindow();
        }
    }
</script>
