<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $exListNum = $request -> exListNum;

    $query = "SELECT DISTINCT tipologia FROM implementazioneEsercizio WHERE percFisio = $exListNum";

    $result = mysqli_query($db, $query);
    $types = [];
    while($type = mysqli_fetch_array($result, MYSQLI_NUM)){
        $types = array_merge($types, $type);
    }
    echo(json_encode($types));
    
}
?>