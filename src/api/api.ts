import axios from 'axios';

// let backurl = 'http://127.0.0.1:8000'
let backurl = 'http://172.31.101.15'
let fronturl = 'http://172.31.101.15:8080'

//-------Y1.主推商品属性表
export const y1_list = (params: any) => { return axios.get(`${backurl}/y1/list/`, { params: params }); };
export const y1_add = (params: any) => { return axios.get(`${backurl}/y1/add/`, { params: params }); };
export const y1_delete = (params: any) => { return axios.get(`${backurl}/y1/delete/`, { params: params }); };
export const y1_push = () => { return axios.get(`${backurl}/y1/push/`); };

//-------Y2.可比门店表
export const y2_list = (params: any) => { return axios.get(`${backurl}/y2/list/`, { params: params }); };
export const y2_add = (params: any) => { return axios.get(`${backurl}/y2/add/`, { params: params }); };
export const y2_delete = (params: any) => { return axios.get(`${backurl}/y2/delete/`, { params: params }); };
export const y2_push = () => { return axios.get(`${backurl}/y2/push/`); };

//-------Y3.新老门店映射表
export const y3_list = (params: any) => { return axios.get(`${backurl}/y3/list/`, { params: params }); };
export const y3_add = (params: any) => { return axios.get(`${backurl}/y3/add/`, { params: params }); };
export const y3_delete = (params: any) => { return axios.get(`${backurl}/y3/delete/`, { params: params }); };
export const y3_push = () => { return axios.get(`${backurl}/y3/push/`); };

//-------Y4.指定加盟店
export const y4_list = (params: any) => { return axios.get(`${backurl}/y4/list/`, { params: params }); };
export const y4_push = () => { return axios.get(`${backurl}/y4/push/`); };

//------时序预测参数设定
export const mission_class = (params: any) => { return axios.get(`${backurl}/mission/class/`, { params: params }); };
export const mission_region = (params: any) => { return axios.get(`${backurl}/mission/region/`, { params: params }); };
export const mission_add = (params: any) => { return axios.get(`${backurl}/mission/add/`, { params: params }); };
export const mission_list = () => { return axios.get(`${backurl}/mission/list/`); };

//-----时序预测结果

export {
    fronturl,
    backurl,
}