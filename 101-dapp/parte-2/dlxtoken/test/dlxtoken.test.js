const DLXToken = artifacts.require("DLXToken");

contract("DLXToken", (accounts) => {

    let dlxTokenInstance;
    beforeEach(async () => {
        dlxTokenInstance = await DLXToken.new([ accounts[0], accounts[1], accounts[2] ]);
    });

    it("should have 1000000000000000000000 in each account", async () => {
        for (let a = 0; a < 3; a += 1) {
            const balance = await dlxTokenInstance.balanceOf(accounts[a]);
            assert.equal(
                balance.toString(),
                '1000000000000000000000',
                "1000000000000000000000 wasn't in the first account"
            );
        }
    });

    it("should mint 1000000000000000000000 for each account", async () => {
        await dlxTokenInstance.mint(1000);
        for (let a = 0; a < 3; a += 1) {
            const balance = await dlxTokenInstance.balanceOf(accounts[a]);
            assert.equal(
                balance.toString(),
                2000000000000000000000,
                "2000000000000000000000 wasn't in the first account"
            );
        }
    });
});