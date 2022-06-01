<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $exNum = $request->exNum;
    $routine = $request->routine;
    $esito = $request->esito;

    $query = "INSERT INTO esrout (esImpl, routine, esito) VALUES ($exNum, '$routine', '$esito')";
    if(mysqli_query($db, $query)){
        $query = "UPDATE implementazioneEsercizio SET eseguito = true WHERE id = $exNum";
        if(mysqli_query($db, $query)){
            http_response_code(201);
        }
        else{
            http_response_code(409);
        }
    }
    else{
        http_response_code(409);
    }
}
?>