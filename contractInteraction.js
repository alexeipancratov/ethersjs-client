const fs = require("fs");
const { ethers } = require("ethers");

async function interact() {
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = provider.getSigner("0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1");

  const abi = fs.readFileSync("./__contracts_SimpleStorage_sol_SimpleStorage.abi", "utf-8");
  const contract = new ethers.Contract("0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab", abi, signer);

  let currentValue = await contract.getValue();
  console.log("getValue()", currentValue.toNumber());

  const incrementResponse = await contract.incrementValue();
  console.log("incrementValue()", incrementResponse);

  currentValue = await contract.getValue();
  console.log("getValue()", currentValue.toNumber());

  const decrementResponse = await contract.decrementValue();
  console.log("decrementValue()", decrementResponse);

  currentValue = await contract.getValue();
  console.log("getValue()", currentValue.toNumber());
}

interact();