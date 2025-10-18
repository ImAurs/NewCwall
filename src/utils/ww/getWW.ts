import { alovaInstance } from '@/utils/useAova.ts'
import { type WWResponse } from '@/utils/types/ww/WWList.ts'

function GetWWList(page: number = 1) {
    return alovaInstance.Get<WWResponse>(
        `/api/cwall/ww/load_content.php?page=${page}&limit=10&zone=全部`,
    )
}

export { GetWWList }
