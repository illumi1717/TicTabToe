<template>
    <div class="settings-view">
        <div class="settings-form">

            <div class="field-size-block">
                <div class="field-size-block--text">Field size</div>
                <row-slider 
                    v-model="fieldSize" 
                    color="#05F2DB" 
                    track-color="rgba(5, 242, 219, .26)"
                    height="10"
                    sticky="true"
                    step="5"

                    :min="130"
                    :max="250"

                    class="row-slider"
                />
                <div class="field-size--data">
                    <div>{{fieldSize}}</div>
                    <div class="separator">X</div>
                    <div>{{fieldSize}}</div>
                </div>
            </div>

            <div class="mode-block">
                <mode-select v-model="mode"/>
            </div>

            <mini-button @click="$router.push('/')">Menu</mini-button>
        </div>
    </div>
</template>

<script>
    import Slider from 'vue3-slider';
    import ModeSelect from '@/components/ModeSelect';
    import MiniButton from '@/components/MiniButton';
    
    export default {
        name: 'settings-view',

        data: () => ({
            fieldSize: window.localStorage.getItem('fieldSize') ?? 200,
            mode: window.localStorage.getItem('mode') ?? 'single'
        }),

        watch: {
            fieldSize() {
                window.localStorage.setItem('fieldSize', this.fieldSize);
            },

            mode() {
                window.localStorage.setItem('mode', this.mode);
            }
        },

        components: {
            'row-slider': Slider,
            ModeSelect,
            MiniButton
        }        
    }
</script>
