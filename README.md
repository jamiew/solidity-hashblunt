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
