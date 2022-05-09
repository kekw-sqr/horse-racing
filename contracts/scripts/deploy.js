const { ethers } = require('hardhat');

async function deploy() {
  const MintableToken = await ethers.getContractFactory('MintableToken')
  const RNDGame = await ethers.getContractFactory('RNDGame')
  const POSDAORandomMock = await ethers.getContractFactory('POSDAORandomMock')
  
  const random = await POSDAORandomMock.deploy()
  await random.deployed()
  console.log('Random address:', random.address)

  const token = await MintableToken.deploy('Token', 'TOKEN')
  await token.deployed()
  console.log('Token address:', token.address)

  const game = await RNDGame.deploy(random.address, token.address, [2, 3], 0)
  await game.deployed()
  console.log('Game address:', game.address)
}

module.exports = deploy;
