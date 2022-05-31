<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $exNum = $request -> exNum;

    $query = "SELECT id, tipologia, abilita FROM implementazioneEsercizio WHERE id = $exNum";

    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    if(!empty($row)){
        echo(json_encode($row));
    }
    else{
        http_response_code(409);
    }
    
}
?>