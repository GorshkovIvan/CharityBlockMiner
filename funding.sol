pragma solidity 0.8.3;


contract CommunityChest {

    function fund(address payable charity_organisation, uint quantity) external{

        charity_organisation.transfer(quantity);

    }

    function deposit(uint256 amount) payable public {

        // nothing else to do!
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
