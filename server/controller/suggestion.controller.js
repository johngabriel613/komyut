import arcgisAPI from "../config/arcgis/arcgis.api.js";

const get = async(req, res) => {
  
  const { text } = req.query
  const params = {
    countryCode: "PH",
    f: "json"
  }

  try {
    const response = await arcgisAPI.suggest({text, ...params})
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({error: `Internal Server Error`})
    throw error
  }
  
}

export default { get };