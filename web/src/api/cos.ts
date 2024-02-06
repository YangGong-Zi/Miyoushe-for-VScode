import http from '@/utils/request';
export const getForm = (params: object) => {
    return http.get('/post/wapi/getForumPostList?forum_id=49&gids=2&is_good=false&is_hot=false&last_id=48869490&page_size=20&sort_type=2',params)
}