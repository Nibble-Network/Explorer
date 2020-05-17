var api = 'https://crumbs.hopto.org:16001'; //to be updated for Nibble
var donationAddress = "XCRCuXroBTLFqF4UXuSRdrTNjwFpBU47V2NY1xPDZyEXY1czfGMrKwSVBoMgCd7jVBR9eQnrov2VBNFgQ5rbZyiu731u4hcRpY"; //Mad's donation address
var blockTargetInterval = 120; 		// enter the block interval in seconds
var coinUnits = 1000000;  			// enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  21000000000000; 	// enter the total supply in atomic units
var symbol = 'NBXC'; 			// enter the coin's ticker
var refreshDelay = 90000;

// pools stats by MainCoins
var networkStat = {
"NBXC": [
//	["cnpool.cc", "https://cnpool.cc/api/nbx/"],
// 	["nibbleclassic.my-mining-pool.de", "https://apinibbleclassic.my-mining-pool.de/"]
 ]
};

var networkStat2 = {
 "NBXC": [
//	["webnbx.semipool.com", "https://webnbx.semipool.com/api"]
 ]
};

