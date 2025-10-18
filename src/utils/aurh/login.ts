import { authAlovaInstance } from '@/utils/useAova.ts'
import type { RedirectResponse } from '@/utils/types/common/Redirect.ts'

function LoginCwall(CNM: string, password: string) {
    return authAlovaInstance.Post<RedirectResponse>(
        '/api/cwall/login.php',
        {
            redirect: '/',
            username: CNM,
            password: password,
        },
        {
            signal: AbortSignal.timeout(3000),
        },
    )
}

function LoginYunmo(AID: string, password: string) {
    return authAlovaInstance.Post<RedirectResponse>(
        '/api/yunmo/login.php',
        `aid=${AID}&password=${password}`,
        {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            signal: AbortSignal.timeout(3000),
        },
    )
}

export { LoginCwall, LoginYunmo }
