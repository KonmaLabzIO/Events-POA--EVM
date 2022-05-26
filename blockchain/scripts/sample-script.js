// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const POA = await ethers.getContractFactory("KonmaEventPOA");
  const upgradablePOA = await upgrades.deployProxy(POA, ["KonmaEventPOA", "KnmaEvPOA"]);
  await upgradablePOA.deployed();
  console.log("Box deployed to:", upgradablePOA.address);
}

main();