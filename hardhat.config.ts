import '@matterlabs/hardhat-zksync-solc'
import '@matterlabs/hardhat-zksync-verify'

module.exports = {
    zksolc: {
        version: "1.3.10",
        compilerSource: "binary",
        settings: {},
    },
    networks: {
        zkSyncTestnet: {
            url: "https://testnet.era.zksync.dev",
            ethNetwork: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
            zksync: true,
            verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification'
        },
    },
    solidity: {
        version: '0.7.4',
    },
};
