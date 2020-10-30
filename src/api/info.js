import request from '@/utils/request'

export function getInfo(query) {
    return request({
        url: '',
        method: 'post',
        data: query
    })
}