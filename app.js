import express from "express";

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

import speckleRouter from "./routers/speckleRouter.js"
app.use(speckleRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
