import { alovaInstance } from '@/utils/useAova'
import type { FollowUserResponse } from '@/utils/types/ww/FollowUser.ts'

async function FollowCwallUser(userId: string) {
    const userIdFormData = new FormData()
    userIdFormData.append('userid', userId)

    return alovaInstance.Post<FollowUserResponse>('/api/cwall/user/follow.php', userIdFormData)
}

export { FollowCwallUser }
