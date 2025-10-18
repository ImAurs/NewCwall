<script setup lang="ts">
import NavBar from '@/components/Navbar/NavBar.vue'
</script>

<template>
    <div class="layout">
        <div class="bg" />
        <NavBar />
        <RouterView />
    </div>
</template>

<style scoped>
.layout {
    position: relative;
    min-height: 100vh;
}
.bg {
    position: fixed;
    inset: 0;
    background: var(--bg);
    z-index: -1;
}
</style>
