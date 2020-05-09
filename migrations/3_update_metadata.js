var Metadata = artifacts.require("./Metadata.sol")
var Brandooz = artifacts.require("./Brandooz.sol")

let _ = "        "

module.exports = (deployer, helper, accounts) => {
  deployer.then(async () => {
    try {
      // Deploy Metadata.sol
      await deployer.deploy(Metadata, { replace: true })
      let metadata = await Metadata.deployed()
      console.log(_ + "Metadata deployed at: " + metadata.address)

      // Deploy Brandooz.sol
      let token = await Brandooz.deployed()
      console.log(_ + "Brandooz deployed at: " + token.address)

      await token.updateMetadata(metadata.address)
      console.log(_ + "Brandooz metadata updated to " + metadata.address)
    } catch (error) {
      console.log(error)
    }
  })
}
