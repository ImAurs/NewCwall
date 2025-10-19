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
    <WWCardLists :lists="list.data" />
</template>
