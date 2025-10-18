import { createAlova } from 'alova'
import adapterFetch from 'alova/fetch'

const alovaInstance = createAlova({
    requestAdapter: adapterFetch(),
    responded: (response) => response.json(),
})

const alovaTextInstance = createAlova({
    requestAdapter: adapterFetch(),
    responded: (response) => response.text(),
})

const authAlovaInstance = createAlova({
    requestAdapter: adapterFetch(),
    beforeRequest(method) {
        method.config = {
            ...method.config,
            redirect: 'manual',
            credentials: 'include',
        }
    },
    async responded(response, method) {
        if (response.type === 'opaqueredirect' || response.status === 0) {
            return { ok: true, redirected: true }
        }

        return response.text()
    },
})

export { alovaInstance, alovaTextInstance, authAlovaInstance }
