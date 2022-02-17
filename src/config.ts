export const BET_CONTRACT_CONFIG = {
  address: '0x6eca0a26e97CD86F26b8dbAb7edd17Ec001545Aa',
  betAbi: [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "bet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
  ]
}