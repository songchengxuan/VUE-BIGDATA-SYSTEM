import request from '../utils/request';

export const fetchData = () => {
    return request({
        url: './temp.json',
        method: 'get'
    });
};