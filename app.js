import express from "express";

const app = express();


app.use(express.json());

import speckleRouter from "./routers/speckleRouter.js"
app.use(speckleRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
