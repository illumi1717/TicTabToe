<template>
    <div class="main-view">
        <div class="menu">
            <u-button>Start</u-button>
            <u-button>Settings</u-button>
        </div>
    </div>
</template>

<script>
    import UButton from "@/components/UButton"

    export default {
        name: 'main-view',
        
        components: {
            UButton
        }
    }
</script>
