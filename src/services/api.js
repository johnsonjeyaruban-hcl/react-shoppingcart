import axios from 'axios';
const baseUrl = 'http://localhost:3333/';

/**
 * [export description]
 *
 * @param   {[type]}  url  [url description]
 *
 * @return  {[type]}       [return description]
 */
export function getData (url) {
    //const {userName, password} = params;
    return axios.get(`${baseUrl}${url}`)
}

/**
 * [export description]
 *
 * @param   {[type]}  url     [url description]
 * @param   {[type]}  params  [params description]
 *
 * @return  {[type]}          [return description]
 */
export function postData (url, params) {
    return axios.post(`${baseUrl}${url}`, params)
}