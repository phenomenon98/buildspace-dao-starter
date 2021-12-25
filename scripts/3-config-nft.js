import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(process.env.DROP_MODULE_ADDRESS);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Spinning record",
        description: "This NFT will give you access to PlaylistDAO. Use your power wisely.",
        image: readFileSync("scripts/assets/vinyl-record-gif.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()