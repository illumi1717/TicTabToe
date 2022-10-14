<template>
    <div class="u-menu">
        <u-button @click="$emit('start')">Start</u-button>
        <u-button @click="$emit('settings')">Settings</u-button>
    </div>
</template>

<script>
    import UButton from '@/components/UButton';

    export default {
        name: 'u-menu',
        
        components: {
            UButton
        }
    }
</script>
