const { ether, BN } = require("@openzeppelin/test-helpers")

let config = {}

config.timer = {
  startTime: 1597287540,
  hardCapTimer: 172800,
  softCap: ether("750"),
}

config.redeemer = {
  redeemBP: 200,
  redeemInterval: 3600,
  bonusRangeStart: [
    ether("0"),
    ether("250"),
    ether("750"),
    ether("1250")
  ],
  bonusRangeBP: [
    1500,
    1000,
    500,
    0
  ]
}

config.presale = {
  maxBuyPerAddress: ether("10"),
  maxBuyWithoutWhitelisting: ether("10"),
  uniswapEthBP: 7500,
  lidEthBP: 500,
  referralBP: 250,
  hardcap: ether("1500"),
  token: "", //TODO: Insert token address
  uniswapTokenBP: 1700,
  presaleTokenBP: 4000,
  tokenDistributionBP: {
    dao: 3300,
    team: 500,
    marketing: 500
  }
}

module.exports = config
