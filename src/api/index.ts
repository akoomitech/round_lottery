import { create } from '../util/request';
import qs from 'qs';

const basePath = '/api/v1';
const baseURL = WEBPACK_CONFIG_MODE === 'develop' ? basePath : `http://localhost:3001${basePath}`;
const end = WEBPACK_CONFIG_MODE === 'develop' ? '.json' : '';

const request = create({ baseURL });

console.log(WEBPACK_CONFIG_MODE, '.....NODE_ENV')

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