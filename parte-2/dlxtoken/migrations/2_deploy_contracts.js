const DLXToken = artifacts.require("DLXToken");

module.exports = (deployer, network, accounts) => {
    deployer.deploy(DLXToken, accounts);
};
