<template>
    <div class="box-view">
        {{state}}
    </div>
</template>

<script>
    import JSONBroadcastChannelService from '@/service/JSONBroadcastChannelService';

    export default {
        name: 'box-view',
        
        data() {
            return {
                state: ''
            }
        },

        mounted() {
            const gameBroadcast = new JSONBroadcastChannelService('game');

            window.addEventListener('click', () => {
                if (!this.state) {
                    this.state = 'X';
                    gameBroadcast.sendJSONMessage({
                        boxId: this.$route.query.id,
                        state: 'X'
                    });
                }
            });
        }
    }
</script>
