var api = 'http://nibbler.hopto.org/api';
var donationAddress = "Nib1XAX8nHgAZzSDoCjd3mAa2di7dGaXh9u9QFVz9tWjCF7iJqTsU23A4r5EcxYw6Z9jZL93Nfob6C57LyiW26VXC57U3tPLbPphpyoUftnh8xVqcVbZYcXY3ahDX7qPo63HKkEfE6gPk3jBDX1vZW5JwxgixXTwz9NGqBP23SeFoypw9iB13Xjn2g";
var blockTargetInterval = 150; 		// enter the block interval in seconds
var coinUnits = 100;  			// enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  21000000000; 	// enter the total supply in atomic units
var symbol = 'NBX'; 			// enter the coin's ticker
var refreshDelay = 90000;

// pools stats by MainCoins
var networkStat = {
 "nbx": [
	["cnpool.cc", "https://cnpool.cc/api/nbx/"],
 	["nibbleclassic.my-mining-pool.de", "https://apinibbleclassic.my-mining-pool.de/"]
 ]
};

var networkStat2 = {
 "nbx": [
	["webnbx.semipool.com", "https://webnbx.semipool.com/api"]
 ]
};

