const { Contract, ethers, Wallet } = require('ethers');

async function main() {
    const CONTRACTADDRESS = "0x3C96d02B3E43af535Adb67566373366953251430";
    const ABI = [
        {
            "inputs": [
                {
                    "internalType": "address[6]",
                    "name": "contractAddressArray",
                    "type": "address[6]"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "contractAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "int256",
                    "name": "answer",
                    "type": "int256"
                }
            ],
            "name": "addresses",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "getPrices",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];

    const PRIVATE_KEY = '0x8c14e0d7c2e38c2d8656a7220a9b0acf96daa2cb3bab05ae5481779f8a4c9ed3';
    const provider = new ethers.WebSocketProvider('wss://polygon-amoy.infura.io/ws/v3/0a17be4969ed49c295ead2b7a3e0adfe');
    const wallet = new Wallet(PRIVATE_KEY, provider);
    const priceFeedContractInstance = new Contract(CONTRACTADDRESS, ABI, wallet);

    const listenerFunction = (contractAddress, answer) => {
    
    }

    priceFeedContractInstance.on("addresses", listenerFunction);
    const tx = await priceFeedContractInstance.getPrices();
    const receipt = await tx.wait();

    priceFeedContractInstance.off("addresses", listenerFunction);
    return 0;
}

main().catch((error) => {
    console.error("Error:", error);
});
