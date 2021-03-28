

Web3 = require('web3');
MyContract = require('./build/contracts/CharityFunding.json');

 function fund() {
    const web3 = new Web3('http://localhost:8545');

    const id = web3.eth.net.getId();
    setTimeout(function(){
        console.log('after');
    },10000000);
    const deployedNetwork = MyContract.networks[id];
    const contract = new web3.eth.Contract(
        MyContract.abi,
        deployedNetwork.address
    );

    const result = contract.methods.getBalance().call()
    console.log(result);
    
    const addresses = web3.eth.getAccounts();
    contract.methods.deposit(20000000000000).send({

        from: addresses[3],
        value: 20000000000000

    });

    const result1 = contract.methods.getBalance().call()
    console.log(result1);

    console.log(addresses[4]);
    contract.methods.fund(0, 10000000000000).send({
        from: addresses[3],
        to: addresses[4]
        

    });

    const result3 = contract.methods.getBalance().call()
    console.log(result3);

    console.log(web3.utils.isAddress(addresses[4]))
}

fund();

