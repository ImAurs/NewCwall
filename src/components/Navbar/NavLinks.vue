<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'

// 获取当前路由
const route = useRoute()

// 导航链接
const navLinks = [
    // 微闻
    {
        name: '微闻',
        link: '/ww',
    },
    // 新阅
    {
        name: '新阅',
        link: '/nr',
    },
    // 云墨
    {
        name: '云墨',
        link: '/ym',
    },
]
</script>

<template>
    <nav class="nav-link">
        <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.link"
            :class="link.link === route.fullPath ? 'link current-link' : 'link'"
        >
            {{ link.name }}
        </router-link>
    </nav>
</template>

<style scoped>
.nav-link {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.link {
    text-decoration: none;
    gap: 1.5rem;
    color: var(--text);

    &:hover {
        color: var(--text-sub);
    }
}

.current-link {
    color: var(--primary);
}
</style>
