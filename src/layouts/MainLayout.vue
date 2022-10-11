<template>
    <div class="main-layout">

        <div class="logo-block">
            <img src="@/assets/images/tictabtoe-logo.svg" width="75"/>
            <div class="logo--text">TicTabToe</div>
        </div>

        <div class="layout-maintenance">
            <router-view />
        </div>

        <div class="bottom-composition">
            <div class="left-side">
                <!-- <img src="@/assets/images/left-palm.svg" width="300"> -->
            </div>
            <div class="center">
                <img class="town" src="@/assets/images/town.svg" width="100%" height="300">
                <img class="sun" src="@/assets/images/sun.svg" width="500">
            </div>
            <div class="right-side">
                <!-- <img src="@/assets/images/right-palm.svg" width="300"> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'main-layout'
    }
</script>
