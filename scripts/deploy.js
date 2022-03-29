const main = async () => {
    const DragonTokenContractFactory = await hre.ethers.getContractFactory('DragonToken');
    const DragonTokenContract = await DragonTokenContractFactory.deploy();
    await DragonTokenContract.deployed();
    console.log(" Contract deployed to : ", DragonTokenContract.address);

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();