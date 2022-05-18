<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


$query = "SELECT nome FROM disabilita";

$result = mysqli_query($db, $query);
$disabilities = [];
while($disability = mysqli_fetch_array($result, MYSQLI_NUM)){
    $disabilities = array_merge($disabilities, $disability);
}
echo(json_encode($disabilities));
?>