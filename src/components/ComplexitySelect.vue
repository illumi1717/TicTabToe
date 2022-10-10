<template>
    <div class="complexity-select-block">
        <div class="complexity-select--text">Complexity</div>
        <select class="complexity-select" name="complexity" >
            <option value="easy">Easy</option>
            <option value="middle">Middle</option>
            <option value="hard">Hard</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'complexity-select'
    }
</script>