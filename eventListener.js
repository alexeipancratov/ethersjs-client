const fs = require("fs");
const { ethers } = require("ethers");

async function listenToEvents() {
  const provider = new ethers.providers.JsonRpcProvider();

  const abi = fs.readFileSync("./__contracts_SimpleStorage_sol_SimpleStorage.abi", "utf-8");
  const contract = new ethers.Contract("0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab", abi, provider);

  contract.on("IncrementValue", (oldValue, newValue) => {
    console.log("IncrementValue event received");
    console.log("old value:", oldValue.toNumber());
    console.log("new value:", newValue.toNumber());
  });
}

listenToEvents();