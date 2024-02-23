import http from '@/utils/request';
export const getForumPostList = (params: object) => {
    return http.get('/post/wapi/getForumPostList',params)
}
export const getPostFull = (params: object) => {
    return http.get('/post/wapi/getPostFull',params)
}