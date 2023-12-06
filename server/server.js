import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import placesRouter from "./router/places.js"


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cookieParser());

// define routes
app.use('/api/places', placesRouter);

app.listen(PORT, () => console.log(`server running on ${PORT}`))