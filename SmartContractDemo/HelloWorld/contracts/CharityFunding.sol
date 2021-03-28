pragma solidity 0.5.16;


contract CharityFunding {

    uint256 q;
    address payable []charity_organisations;

    constructor() public {
        charity_organisations.push(0xd03ea8624C8C5987235048901fB614fDcA89b117);   
        charity_organisations.push(0x95cED938F7991cd0dFcb48F0a06a40FA1aF46EBC); 

    }
    
    function fund(uint i, uint256 points, uint256 value) public{

        q = value * points;
        charity_organisations[i].transfer(q);

    }

    function deposit(uint256 amount) payable public {

        // nothing else to do!
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}