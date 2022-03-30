const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("DragonToken", function () {
    
    let addr1;
    let addr2;
    let addr3;
    before(async () => {
        [ addr1, addr2, addr3] = await ethers.getSigners();
        const DragonToken = await ethers.getContractFactory("DragonToken");
        DragonTokenContract = await DragonToken.deploy();
        await DragonTokenContract.deployed();      
    })

    it("deploys successfully", async function () {

        const address = DragonTokenContract.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
        console.log("DragonToken address: ", DragonTokenContract.address);
    })
    
    it("mind 1000 DragonToken to given wallet adderss ", async () => {
    await DragonTokenContract.connect(addr1).mind(addr2.address)
    })


});