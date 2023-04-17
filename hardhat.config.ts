import "@matterlabs/hardhat-zksync-solc";

module.exports = {
    zksolc: {
        version: "1.3.8",
        compilerSource: "binary",
        settings: {},
    },
    networks: {
        zkSyncTestnet: {
            url: "https://testnet.era.zksync.dev",
            ethNetwork: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
            zksync: true,
        },
    },
    solidity: {
        version: '0.7.4',
    },
};
