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

    console.log("Sending Minimum Donation...");
    await contract.methods.deposit(1000000).send({

       from: 0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d, //process.argv[5]
       value: 1000000

    });
    
    const addresses = await web3.eth.getAccounts();
    console.log("Sending Minimum Donation...");
    await contract.methods.deposit(1000).send({ //argv[3]

        from: 0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d, //process.argv[5]
        value: 1000

    });
    console.log("New Contract Balance:");
    const result1 = await contract.methods.getBalance().call();
    console.log(result1);

    console.log("Donating... The final sum is: ");
    console.log(5*3);
    
    await contract.methods.fund(0, 1000, 5).send({
        from: process.argv[5],
        to: charity_organisations[0]
        

    });
    console.log("Charity Contract Balance After Donation:")
    const result3 = await contract.methods.getBalance().call()
    console.log(result3);

    /
}

init();