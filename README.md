this one's for @jstn

https://etherscan.io/address/0xEa90CFad1b8e030B8Fd3E63D22074E0AEb8E0DCD#readProxyContract

https://github.com/rarible/protocol-contracts/blob/master/royalties-registry/contracts/RoyaltiesRegistry.sol

reproducing the following solidity code:

```
keccak256(abi.encode(token, tokenId))
```

Run with:

```
yarn hash
```

Example output:

```javascript
{
  token: '0xe03e4721c75188de6dd9ccf4fc0eb7c81399e305',
  tokenId: 10033,
  abiTypes: [ 'address', 'uint' ],
  abiValues: [ '0xe03e4721c75188de6dd9ccf4fc0eb7c81399e305', 10033 ],
  abiEncoded: '0x000000000000000000000000e03e4721c75188de6dd9ccf4fc0eb7c81399e3050000000000000000000000000000000000000000000000000000000000002731',
  keccakDigest: '0x36fd4556f65e74b998d9cc53adea60b9e06f8cccbd64480025caf402c5280dc7'
}
```
