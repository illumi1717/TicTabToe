<template>
    <div class="u-menu">
        <u-button @click="createField">Start</u-button>
        <u-button @click="$router.push('/settings')">Settings</u-button>
    </div>
</template>

<script>
    import UButton from '@/components/UButton';
    import FieldService from '@/service/FieldService';

    export default {
        name: 'u-menu',
        
        components: {
            UButton
        },

        methods: {
            createField() {
                const boxSize = +localStorage.getItem('fieldSize') ?? 200;
                new FieldService().createField(boxSize);
            }
        }
    }
</script>
