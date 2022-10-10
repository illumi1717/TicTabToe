<template>
    <div class="u-menu">
        <u-button>Start</u-button>
        <u-button @click="$router.push('/settings')">Settings</u-button>
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
