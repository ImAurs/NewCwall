<script setup lang="ts">
import type { WW } from '@/utils/types/ww/WWList.ts'
import { ref } from 'vue'
import { FollowCwallUser } from '@/utils/user/follow.ts'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

interface Props {
	wwInfo: WW
}
withDefaults(defineProps<Props>(), {
	wwInfo: () => ({}) as WW,
})
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')
const showFallback = ref(false)

function onceFallback(e: Event) {
	showFallback.value = true
	;(e.target as HTMLImageElement).style.display = 'none'
}
function getTimeAgo(date: string) {
	return dayjs(date).fromNow()
}
async function followUser(userId: string) {
	const res = await FollowCwallUser(userId)
	if (res.message == '已关注') {
		alert('已经关注')
	} else {
		alert('已经取消关注')
	}
}
</script>

<template>
	<div class="user-card">
		<div class="avatar-box">
			<img
				:src="`/api/cwall/user/img/headimg/${wwInfo.user_id}`"
				:alt="wwInfo.username"
				class="avatar"
				@error="onceFallback"
			/>
			<span v-if="showFallback" class="avatar-fallback">
				{{ wwInfo.username?.charAt(0).toUpperCase() }}
			</span>
		</div>

		<div class="meta">
			<p class="username">{{ wwInfo.username }}</p>
			<p class="time">{{ getTimeAgo(wwInfo.publish_time) }}</p>
		</div>

		<button @click="followUser(wwInfo.user_id)">关注</button>
	</div>
</template>

<style scoped lang="less">
.user-card {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 8px 12px;
	border-radius: 8px;
}
.avatar-box {
	position: relative;
	width: 64px;
	height: 64px;
	flex-shrink: 0;
}
.avatar {
	width: 100%;
	height: 100%;
	border-radius: 50%;
	object-fit: cover;
}
.avatar-fallback {
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	color: var(--text-muted);
	font-size: 24px;
	font-weight: 600;
	user-select: none;
}
.meta {
	display: block;
	align-items: baseline;
	gap: 8px;
	flex: 1;
}
.username {
	margin: 0;
	font-size: 15px;
	font-weight: 500;
	color: var(--text);
	letter-spacing: 0.4px;
}
.time {
	margin: 0;
	font-size: 13px;
	color: var(--text-sub);
}
</style>
