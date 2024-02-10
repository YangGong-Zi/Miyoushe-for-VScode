import http from '@/utils/request';
export const getForm = (params: object) => {
    return http.get('/post/wapi/getForumPostList',params)
}