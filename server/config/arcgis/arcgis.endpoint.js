import arcgisConfig from "./arcgis.config.js";

const arcgisEndpoint = {
  suggest : (params) => arcgisConfig.getUrl('suggest', params),
  latlong : (params) => arcgisConfig.getUrl('findAddressCandidates', params)
}

export default arcgisEndpoint;