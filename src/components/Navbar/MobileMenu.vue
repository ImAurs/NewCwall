<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const menuOpen = ref<boolean>(false)
</script>

<template>
    <button class="menu-btn" @click="(e) => (menuOpen = !menuOpen)">
        <Menu v-if="!menuOpen" />
        <X v-else />
    </button>

    <div v-show="menuOpen">
        <p>Menu is Open</p>
    </div>
</template>

<style scoped>
.menu-btn {
    outline: none;
    border: none;
}
</style>
