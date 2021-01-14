var api = 'https://nibbling.org:16001'; //to be updated for Nibble
var donationAddress = "XCRD9dvfLD6UBWFFpS141vHRgSEt8hk77YLr5a91QaK8KqRHMTUQzPs3wiZ3wNUkZYb5eZxbkaS7WH1YuUVXU9qh96Vxs8muL8"; //Sups donation address
var blockTargetInterval = 120; 		// enter the block interval in seconds
var coinUnits = 1000000;  			// enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  21000000000000; 	// enter the total supply in atomic units
var symbol = 'NBXC'; 			// enter the coin's ticker
var refreshDelay = 90000;

// pools stats by MainCoins
var networkStat = {
"nbxc": [
        ["superblockchain.con-ip.com\/nbxc","https://superblockchain.con-ip.com:8151"],
        ["fastpool.xyz\/nbx","https://fastpool.xyz:10034"],
        ["letshash.it","https://letshash.online:15024"],
        ["nbxc.pool.gntl.co.uk","https://nbxc.pool.gntl.co.uk/api/pool/"],
        ["nibl.ms-pool.net.ua","http://nibl.ms-pool.net.ua:8117"],
        ["nbxc.pool-pay.com","http://nbxc.pool-pay.com:8767"],
        ["pool.walemo.com","http://nbxc.bhdscan.com:32316"]
 ]
};

var networkStat2 = {
 "nbxc": [
 ]
};

