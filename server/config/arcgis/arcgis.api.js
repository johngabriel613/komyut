import axios from "axios";
import arcgisEndpoint from "./arcgis.endpoint.js";

const arcgisAPI = {
  suggest: async(params) => await axios.get(arcgisEndpoint.suggest(params)),
  latlong: async(params) => await axios.get(arcgisEndpoint.latlong(params)),
}

export default arcgisAPI;