const DLXToken = artifacts.require("DLXToken");

module.exports = (deployer, network, accounts) => {
    deployer.deploy(DLXToken,
        [
            '0xA6b94Ce98D6CD4f447a9C6788F169DD17f65f747',
            '0xB48577c8a13fE796573EA9636d985de189895b83',
            '0xBd5E48c38D95770eEeA765f1A9b9C2C9d3244ed3',
            '0xF5d349b0f35d8E224F356F3037FAECA0D39719FE',
        ]);
};
