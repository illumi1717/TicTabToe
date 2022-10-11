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

            <div class="complexity-block">
                <complexity-select v-model="complexity"/>
            </div>

            <mini-button @click="$router.push('/')">Menu</mini-button>
        </div>
    </div>
</template>

<script>
    import Slider from 'vue3-slider';
    import ComplexitySelect from '@/components/ComplexitySelect.vue';
    import MiniButton from '@/components/MiniButton.vue';
    
    export default {
        name: 'settings-view',

        data: () => ({
            fieldSize: window.localStorage.getItem('fieldSize') ?? 200,
            complexity: window.localStorage.getItem('complexity') ?? 'middle'
        }),

        watch: {
            fieldSize() {
                window.localStorage.setItem('fieldSize', this.fieldSize);
            },

            complexity() {
                window.localStorage.setItem('complexity', this.complexity);
            }
        },

        components: {
            'row-slider': Slider,
            ComplexitySelect,
            MiniButton
        }        
    }
</script>
