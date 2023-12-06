import arcgisAPI from "../config/arcgis/arcgis.api.js";

const get = async(req, res) => {
  
  const { singleLine } = req.query
  const params = {
    f: "json"
  }

  try {
    const response = await arcgisAPI.latlong({singleLine, ...params})
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({error: `Internal Server Error`})
    throw error
  }
}

export default { get };