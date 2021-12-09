require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture strike crouch saddle punch grace forget tail suggest'; 
let testAccounts = [
"0xf35ed6b95a75998b6194c11e21a3b414d8833439a0ea1f59b8e2b510c528efff",
"0x06d4dcd22b071184643cc88a4be018966b61c57baf113b816a52dce042015d07",
"0x018ada9cb1a8b9009c07e81d864dfc40d9cce4a3e0ecee6b02cbbaef67d0668c",
"0x94ce4289fe0161de39246e25fd25ac55ef95e57c9fc749eef8b61c9894fe81b5",
"0x643799516f51cb4a18fd519ea8da08ebfc7062ed1d1df0024ce86d76c48b840a",
"0x65aba77366322c0c953feca4a3ab26853407bbdc8e92dca58efa46c9c6372737",
"0x7953de1dc22a9d67da153571f9f0d4c824047b80720747721bab363c34522fe8",
"0x63f43f6290c9a071ae2a0343a3f63cf9efd769665a8c12bedede916aca177bce",
"0xe4dfe9e4baf61a68368e8d77599d9f19f31c69e24f0cd899795863fd33de7d81",
"0x45a6af209cb0f54fe3f83a09227fb97bb38145b199e3f66ac2cdd7745686279d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


