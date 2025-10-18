<script setup lang="ts">
import type { WW } from '@/utils/types/ww/WWList'
import PublisherShow from '@/components/WW/PublisherShow.vue'
interface Props {
    lists: WW[]
}

const props = withDefaults(defineProps<Props>(), {
    lists: () => [] as WW[],
})
</script>

<template>
    <div class="post-list">
        <div v-for="ww in props.lists" :key="ww.id" class="post-card">
            <PublisherShow :wwInfo="ww" />
            <p>{{ ww.content }}</p>
        </div>
    </div>
</template>

<style scoped lang="less">
@import '@/assets/ui/card';
@import '@/assets/settings';

.post-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: @gap;
    min-height: 100vh;
}

.post-card {
    width: 100%;
    white-space: pre-line;
    margin-bottom: @gap;
    min-height: 120px;
    box-sizing: border-box;

    padding: 24px;
    line-height: 1.6;
    color: var(--text);
    font-size: 16px;

    border-bottom: 1px solid var(--border);

    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:first-child {
        margin-top: @gap;
    }

    &:active {
        transform: translateY(0);
        transition-duration: 0.1s;
    }
}

@media (min-width: @grid-break) {
    .post-list {
        gap: @gap;
        padding: @gap * 2;
    }

    .post-card {
        margin-bottom: 0;

        &:hover {
            transform: translateY(-4px) scale(1.01);
        }
    }
}

@media (max-width: 767px) {
    .post-card {
        margin-bottom: 12px;
        min-height: 100px;
        padding: 20px;
        font-size: 15px;

        &:hover {
            transform: none;
        }
    }
}
</style>
