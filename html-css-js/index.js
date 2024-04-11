import express from "express";

const app = express();
const port = 3000;

app.use("/ettsu", express.static("ettsu"));

app.listen(port, () => {
    console.log("start")
});