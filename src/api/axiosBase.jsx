import { CRYPTO_API_URL } from "../constants/constants.js";

import axios from "axios";
export const listCoins = "/coins/list";
export const dataCoins = "/coins/markets";

export function genericGetCoinApi(url, params) {
  return axios.get(`${CRYPTO_API_URL}${url}`, { params });
}
