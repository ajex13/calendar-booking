import dotenv from "dotenv";

import express from "express";
import { AppDataSource } from "./data-source";
import Asset from "./models/asset";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.get("/", async (req, res) => {
    const assetRepo = await AppDataSource.getRepository(Asset);

    const asset = new Asset();
    asset.name = "Prop1";
    await assetRepo.save(asset);

    const allAssets = await assetRepo.find()
    console.log(allAssets);
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});