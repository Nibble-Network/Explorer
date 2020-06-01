<?php
require '../util.php';
$config = (require '../../config.php');

$info = fetch_rpc($config['api'], 'getlastblockheader', '""');

$hash = $info['result']['block_header']['hash'];
$blockData = fetch_rpc($config['api'], 'f_block_json', '{"hash":"'.$hash.'"}');
$supplyRaw = $blockData['result']['block']['alreadyGeneratedCoins'];

$info = fetch_getinfo($config['api']);
$depositsRaw = $info['full_deposit_amount'];

$supply = number_format(($supplyRaw - $depositsRaw) / $config['coinUnits'], 6, ".", "");

print_r($supply);
?>

