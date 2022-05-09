const { expect } = require('chai')
const { ethers } = require('hardhat')

const REWARD_MULTS = [2, 3, 4]

describe('RNDGame', () => {
  let deployer;
  let random;
  let token;
  let game;

  beforeEach(async () => {
    [deployer] = await ethers.getSigners();

    const MintableToken = await ethers.getContractFactory('MintableToken')
    const RNDGame = await ethers.getContractFactory('RNDGame')
    const POSDAORandomMock = await ethers.getContractFactory('POSDAORandomMock')

    random = await POSDAORandomMock.deploy()
    await random.deployed()

    token = await MintableToken.deploy('Token', 'TOKEN')
    await token.deployed()

    game = await RNDGame.deploy(random.address, token.address, REWARD_MULTS, 0)
    await game.deployed()
  })

  it('Win flow should work correctly', async () => {
    await token.mint(deployer.address, 10)

    await token.approve(game.address, 10)
    await game.deposit(10)
    await game.placeBet(0, 7)
    await random.setSeed(0)

    await game.finalizeRound()

    expect(await game.balanceOf(deployer.address)).to.equal(17)

    await game.placeBet(1, 10)
    await random.setSeed(1)

    await game.finalizeRound()

    expect(await game.balanceOf(deployer.address)).to.equal(37)
  })

  it('Lose flow should work correctly', async () => {
    await token.mint(deployer.address, 10)

    await token.approve(game.address, 10)
    await game.deposit(10)
    await game.placeBet(0, 7)
    await random.setSeed(1)

    await game.finalizeRound()

    expect(await game.balanceOf(deployer.address)).to.equal(3)
  })

  it('Withdraw should work', async () => {
    await token.mint(deployer.address, 10)

    await token.approve(game.address, 10)
    await game.deposit(10)

    await game.withdraw(7)

    expect(await game.balanceOf(deployer.address)).to.equal(3)
    expect(await token.balanceOf(deployer.address)).to.equal(7)
  })
})
