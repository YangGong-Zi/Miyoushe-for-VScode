import http from '@/utils/request';
export const getForumPostList = (params: object) => {
    return http.get('/post/wapi/getForumPostList',params)
}