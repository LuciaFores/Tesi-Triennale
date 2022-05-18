<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


$query = "SELECT descrizione FROM abilita";

$result = mysqli_query($db, $query);
$abilities = [];
while($ability = mysqli_fetch_array($result, MYSQLI_NUM)){
    $abilities = array_merge($abilities, $ability);
}
echo(json_encode($abilities));
?>