import { configDotenv } from "dotenv";

// call dotenv
configDotenv();

//declare env variables
export default{
  arcgisBaseURL: process.env.ARCGIS_BASE_URL,
  arcgisToken: process.env.ARCGIS_TOKEN,
}