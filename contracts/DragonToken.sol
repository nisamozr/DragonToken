// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DragonToken is ERC20 {
    mapping(address => uint256) private _balances;

    uint256 _totalSupply;
    uint256 totatalmintToken;
    
    address owner;


    constructor() ERC20("Dragon Token", "DTK") {
        _totalSupply = 100000000 * 10 ** decimals();
        owner = msg.sender;
    }

    function mind(address _to) external{
        uint256 totalMintAmount = 1000 * 10 ** decimals() + totatalmintToken ;
        require(totalMintAmount < totalSupply(), "you cannot mint more than totalsupply");
        _mint(_to, 1000 * 10 ** decimals());
    }

     function _mint(address account, uint256 amount) internal virtual override {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }
     function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }
     function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }
    function totalMinted() public view returns (uint256) {
        return totatalmintToken;
    } 


}