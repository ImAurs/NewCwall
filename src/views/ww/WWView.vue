<script setup lang="ts">
import type { WWResponse } from '@/utils/types/ww/WWList.ts'
import { GetWWList } from '@/utils/ww/getWW.ts'
import { onMounted, ref } from 'vue'
import WWCardLists from '@/components/WW/WWCardLists.vue'
// import { alovaInstance, alovaTextInstance } from '@/utils/useAova.ts'

const list = ref<WWResponse>({ success: false, data: [] })

onMounted(async () => {
    list.value = await GetWWList()
})
</script>

<template>
    <div class="ww-list">
        <WWCardLists :lists="list.data" />
    </div>
</template>

<style scoped lang="less">
@import '@/assets/settings';

.ww-list {
    padding: 0 1.5rem;
    margin-top: calc(@HeaderHeight + 1rem);
}
</style>
