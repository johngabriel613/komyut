import env from "../../utils/env.utils.js";

const getUrl = (endpoint, params) => {
  const query = new URLSearchParams(params);
  return `${env.arcgisBaseURL}/${endpoint}?token=${env.arcgisToken}&${query}`;
}

export default {getUrl};