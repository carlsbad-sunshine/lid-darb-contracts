const { accounts, contract, web3 } = require("@openzeppelin/test-environment")
const { expectRevert, time, BN, ether, balance } = require("@openzeppelin/test-helpers")
const {expect} = require("chai")
const config = require("../config")

const Token = contract.fromArtifact("Token")
const TeamLock = contract.fromArtifact("LidTimeLock")
const DaoLock = contract.fromArtifact("LidTimeLock")
const LidSimplifiedPresale = contract.fromArtifact("LidSimplifiedPresale")
const LidSimplifiedPresaleRedeemer = contract.fromArtifact("LidSimplifiedPresaleRedeemer")
const LidSimplifiedPresaleTimer = contract.fromArtifact("LidSimplifiedPresaleTimer")


const owner = accounts[0]
const depositors = [accounts[1],accounts[2],accounts[3],accounts[4],accounts[5]]
const projectFund = accounts[6]
const teamFund = accounts[7]
const initialTokenHolder = accounts[8]

const TOTAL_TOKENS = ether("100000000");
const SECONDS_PER_HOUR = 3600

describe("LidSimplifiedPresale", function() {
  before(async function() {
    this.Token = await Token.new()
    this.TeamLock = await TeamLock.new()
    this.DaoLock = await DaoLock.new()
    this.Presale = await LidSimplifiedPresale.new()
    this.Redeemer = await LidSimplifiedPresaleRedeemer.new()
    this.Timer = await LidSimplifiedPresaleTimer.new()

    await this.Token.initialize(TOTAL_TOKENS,initialTokenHolder);
    await this.Redeemer.initialize(
      config.redeemer.redeemBP,
      config.redeemer.redeemInterval,
      config.redeemer.bonusRangeStart,
      config.redeemer.bonusRangeBP,
      this.Presale.address,
      owner
    );
    await this.Timer.initialize(
      config.timer.startTime,
      config.timer.hardCapTimer,
      config.timer.softCap,
      this.Presale.address,
      owner
    );
    await this.Presale.initialize(
      config.presale.maxBuyPerAddress,
      config.presale.maxBuyWithoutWhitelisting,
      config.presale.uniswapEthBP,
      config.presale.lidEthBP,
      config.presale.referralBP,
      config.presale.hardcap,
      owner,
      this.Timer.address,
      this.Redeemer.address,
      config.presale.token,
      config.presale.uniswapRouter,
      config.presale.lidFund,
    );
    await this.Token.transfer(
      this.Presale.address,
      TOTAL_TOKENS,
      {from:initialTokenHolder}
    );
    await this.Presale.setTokenPools(
        config.Presale.uniswapTokenBP,
        config.Presale.presaleTokenBP,
        [this.DaoLock.address,this.TeamLock.address,this.projectFund.address],
        config.Presale.tokenDistributionBP
    );
  })

  describe("Stateless", function() {

  })

  describe("State: Before Presale Start", function() {

  })

  describe("State: Presale Active", function() {

  })

  describe("State: Presale Ended", function() {

  })
})
