<?php
require '../util.php';
$config = (require '../../config.php');

$maxSupply = number_format(($config['totalSupply'] / $config['coinUnits']), 6, ".", "");

print_r($maxSupply);

?> 
