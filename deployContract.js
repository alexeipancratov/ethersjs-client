const fs = require("fs");
const { ethers, ContractFactory } = require("ethers");

async function deployContract() {
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = provider.getSigner("0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1");

  const abi = fs.readFileSync("./__contracts_SimpleStorage_sol_SimpleStorage.abi", "utf-8");
  const byteCode = fs.readFileSync("./__contracts_SimpleStorage_sol_SimpleStorage.bin");
  const factory = new ContractFactory(abi, byteCode.toString(), signer);

  const contract = await factory.deploy();

  await contract.deployTransaction.wait();

  console.log("Smart Contract is successfully deployed");
  console.log("Contract address:", contract.address);
  console.log(contract.deployTransaction);
}

deployContract();