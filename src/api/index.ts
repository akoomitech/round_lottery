import { create } from '../util/request';
import qs from 'qs';

const basePath = '/api/v1';
const baseURL = process.env.NODE_ENV === 'development' ? basePath : `http://localhost:3001${basePath}`;
const end = process.env.NODE_ENV === 'development' ? '.json' : '';

const request = create({ baseURL });

console.log(process.env.NODE_ENV, '.....NODE_ENV')

export default {
  async getProducts(cond = {}) {
    return request.get(`/products${end}?${qs.stringify(cond)}`)
  },

  async getLottery(id) {
    return request.get(`/lotterys/${id}${end}`)
  },

  async getCoupon(id) {
    return request.get(`/coupons/${id}${end}`);
  }
}