import { defineStore } from 'pinia'
import useCookie from '@/utils/useCookie.ts'
import { computed } from 'vue'

const useToken = defineStore('useToken', () => {
    const token = useCookie('cwall_token', '')
    const getToken = computed(() => token.cookie.value)

    function setToken(newToken: string) {
        token.cookie.value = newToken
    }

    return {
        token,
        getToken,
        setToken,
    }
})

export default useToken
