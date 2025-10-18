<script setup lang="ts">
import NavLinks from '@/components/Navbar/NavLinks.vue'
import MobileMenu from '@/components/Navbar/MobileMenu.vue'
</script>

<template>
    <div class="header">
        <div class="navs">
            <!-- 左边 —— Logo -->
            <div class="logo">
                <RouterLink to="/">
                    <img
                        src="/src/assets/logo.png"
                        class="img"
                        :width="153"
                        :height="56"
                        alt="Cwall"
                    />
                </RouterLink>
            </div>

            <!-- 中间 —— 导航 -->
            <div class="nav-links">
                <NavLinks />
            </div>

            <!-- 右边 —— 功能按钮 -->
            <div class="menu-btn">
                <MobileMenu />
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
@import '@/assets/settings';
@import '@/assets/global';

.header {
    background: var(--bg-alt);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: @HeaderHeight;
    top: 0;
    left: 0;
    width: 100%;

    position: fixed;
    z-index: 1000;
}

.navs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-height: @HeaderHeight;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
}

.logo {
    height: 100%;
    display: flex;
    align-items: center;
    flex: 0 0 auto;
}

.menu-btn {
    display: none;

    @media (max-width: @md) {
        display: block;
    }
}

.nav-links {
    display: none;

    @media (min-width: @md) {
        display: block;
    }
}
</style>
