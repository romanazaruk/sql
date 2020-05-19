import express from "express";

import cityDataRoute from "./city_data.route.js";

const router = express.Router();

router.use("/city_data", cityDataRoute);

export default router;
