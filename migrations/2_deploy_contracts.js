var Metadata = artifacts.require("./Metadata.sol")
var Brandooz = artifacts.require("./Brandooz.sol")

let _ = "        "

module.exports = (deployer, helper, accounts) => {
  deployer.then(async () => {
    try {
      // Deploy Metadata.sol
      await deployer.deploy(Metadata)
      let metadata = await Metadata.deployed()
      console.log(_ + "Metadata deployed at: " + metadata.address)

      // Deploy Brandooz.sol
      await deployer.deploy(
        Brandooz,
        "Token Name",
        "Token Symbol",
        metadata.address
      )
      let token = await Brandooz.deployed()
      console.log(_ + "Brandooz deployed at: " + token.address)
    } catch (error) {
      console.log(error)
    }
  })
}
