const Web3 = require('web3');
const MyContract = require('./build/contracts/CharityFunding.json');

const init = async () => {
    const web3 = new Web3('http://localhost:8545');

    const id = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[id];
    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    );

    var charity_organisations = [];
    charity_organisations[0] = 0xd03ea8624C8C5987235048901fB614fDcA89b117;
    charity_organisations[1] = 0x95cED938F7991cd0dFcb48F0a06a40FA1aF46EBC;
    console.log("Intial Charity Contract Balance:");
    const result = await contract.methods.getBalance().call()
    console.log(result);
    
    const addresses = await web3.eth.getAccounts();
    console.log("Sending Minimum Donation...");
    await contract.methods.deposit(1000000).send({

        from: 0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d,
        value: 1000000

    });
    console.log("New Contract Balance:");
    const result1 = await contract.methods.getBalance().call();
    console.log(result1);

    console.log("Donating... The final sum is: ");
    console.log(4*1000000);
    
    await contract.methods.fund(0, 4, 1000000).send({
        from: 0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d,
        to: charity_organisations[0]
        

    });
    console.log("Charity Contract Balance After Donation:")
    const result3 = await contract.methods.getBalance().call()
    console.log(result3);

    //console.log(web3.utils.isAddress(addresses[4]))
}

init();