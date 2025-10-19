<script setup lang="ts">
import NavBar from '@/components/Navbar/NavBar.vue'
</script>

<template>
    <div class="layout">
        <NavBar />
        <RouterView class="container" />
    </div>
</template>

<style lang="less">
@import '@/assets/settings';

.layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: var(--bg);
    background-attachment: fixed;
}

.container {
    margin-top: @HeaderHeight;
}
</style>
