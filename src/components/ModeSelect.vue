<template>
    <div class="mode-select-block">
        <div class="mode-select--text">Mode</div>
        <select 
            class="mode-select" 
            name="mode"
            
            :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)"
        >
            <option value="single">Singleplayer</option>
            <option value="multi">Multiplayer</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'mode-select',

        props: {
            modelValue: {
                type: String,
                required: true
            }
        }
    }
</script>