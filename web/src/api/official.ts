import http from '@/utils/request';
export const getNewsList = (params: object) => {
    return http.get('/post/wapi/getNewsList',params)
}