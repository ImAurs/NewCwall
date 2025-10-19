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
			<span>{{ ww.content }}</span>

			<div class="post-image-list">
				<img
					v-for="(link, index) in ww.images"
					:key="index"
					alt="index"
					:src="`/api/cwall/ww/${link}`"
					class="post-image"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">
@import '@/assets/settings';

.post-list {
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
}

.post-card {
	width: 100%;
	white-space: pre-line;
	min-height: 120px;
	box-sizing: border-box;
	line-height: 1.6;
	color: var(--text);
	font-size: 16px;
	border-bottom: 1px solid var(--border);
	cursor: pointer;
	padding: 10px 0;
}

@media (min-width: @grid-break) {
	.post-list {
		gap: @gap;
		padding: @gap * 2;
	}
}

@media (max-width: 767px) {
	.post-card {
		font-size: 15px;

		&:hover {
			transform: none;
		}
	}
}

.post-image-list {
	display: flex;
	gap: @gap;
}

.post-image {
	width: 100px;
	height: 100px;
	object-fit: cover;
	flex-shrink: 0;
}
</style>
