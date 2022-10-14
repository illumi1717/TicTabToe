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
                        console.log(data)
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
                        console.log(data)
                        this.currentPlayer = 'X';
                        this.state = '';
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
            }
        },

        mounted() {
            this.changeStateListener();
            this.changeCurrentPlayerListener();
            this.clearStateListener();
        }
    }
</script>
