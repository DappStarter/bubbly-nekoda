require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name rescue noble hospital good another army genius'; 
let testAccounts = [
"0x36afe7bd095934a6f6feaf8383095a491385f8be1ce108a7a44df978e5ac78b5",
"0x274940e2c4eb6bf05c82e6e23983c70095ebe5551c0850ebd29437f00806874b",
"0x7baadbfa66812a1a5dc57d3bff954b645ef41f924ab558864efe8127d1d32525",
"0x82859a0187f97cd7e9b07f5ca8df614efbbfbd95618d5046f180e37c1f56fc4a",
"0x48502bdde129890bf185b615b3e57259de2bbe2c85964813c25c65c528d95170",
"0xa15fb2098b5c2e065a77d0dcf4eb96db343504d151270a4d7d34bdad582fbdf1",
"0x70be88b5cf40c83dad0d5eec36692fd8df17560beb8c6131ed664488678ebd88",
"0x136da53f1ff38eb4e2ba2b977d6b1810d8278e62d0a00e916b6ca630ca2731e2",
"0x4164fc3164d78f8358cbcf738b68e36ed193d138a941de5f3253f54146f1bb06",
"0xc4e29b3bc44ea4b86fe09d3092990cf0f5ab7805dbe496217823d67c5efb7b69"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

