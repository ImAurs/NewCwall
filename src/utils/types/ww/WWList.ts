export interface WWResponse {
    success: boolean
    data: WW[]
}

export interface WW {
    id: string
    user_id: string
    title: string
    content: string
    topics: string
    images: string[]
    publish_time: string
    zone: string
    is_nr: boolean
    username: string
    current_user_id: number
}
