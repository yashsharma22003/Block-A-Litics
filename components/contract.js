const { ethers } = require('ethers');

const contract = async() => {
    const contractAddress = '0x3C96d02B3E43af535Adb67566373366953251430';
    const abi = [
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


    
    if(typeof window.ethereum !== 'undefined'){ 
      console.log("injected provider is", window.ethereum);
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contractInstance = new ethers.Contract(contractAddress, abi, signer);
    console.log("wallet connected");

    return contractInstance;
    } 
    else {console.log('please install the wallet');}

}

export default contract;