const ethers = require('ethers')

const token = "0xe03e4721c75188de6dd9ccf4fc0eb7c81399e305"; // #bois
const tokenId = 10033; // dragon#boi

const abiTypes = ['address', 'uint']
const abiValues = [token, tokenId];

const abiCoder = new ethers.utils.AbiCoder();
const abiEncoded = abiCoder.encode(abiTypes, abiValues);
const keccakDigest = ethers.utils.keccak256(abiEncoded)

console.log({ token, tokenId, abiTypes, abiValues, abiEncoded, keccakDigest })

process.exit(0);
