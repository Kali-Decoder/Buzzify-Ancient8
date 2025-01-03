const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
const ethers = require("ethers");
const { mainContractABI, mainContractAddress } = require("./constant");

const dotenv = require("dotenv");
dotenv.config();
app = express();
const { calculateScore } = require("./utils/engagement_matrix_calculation");
const provider = new ethers.providers.JsonRpcProvider(
  "https://node.ghostnet.etherlink.com/"
);

const signer = new ethers.Wallet("0x" + process.env.PRIVATE_KEY, provider);
console.log("Signer Address: ", signer.address);

const contractInstance = new ethers.Contract(
  mainContractAddress,
  mainContractABI,
  signer
);
console.log("Contract Instance: ", contractInstance);
async function delay(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds));
}
cron.schedule("*/11 * * * *", async function() {
    const getPoolId = await contractInstance.getPoolId();
    let poolName=`Pool ${getPoolId.toString()}`;
    let poolDiscription=`Pool ${getPoolId.toString()}`;
    const tx = await contractInstance.createPool(poolName,poolDiscription);
    await tx.wait();
    console.log("Pool Created: ", tx.hash);

    // delay of 10 mins 
    await delay(600000);

    let score = calculateScore(100, 200, 50, 100, 1000, 2000);
    console.log("Score: ", score);

    const tx1 = await contractInstance.setResult(getPoolId, score);
    await tx1.wait();

}); 

app.listen(8080, function () {
  console.log("Server is running on port 3000");
});
