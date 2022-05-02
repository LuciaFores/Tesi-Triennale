<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $caregiver = $request->caregiver;
    $exListNum = $request->exListNum;
    $exType = $request->exType;
    $ability = $request->ability;
    $insertionDate = $request->insertionDate;

    $query = "SELECT * FROM implementazioneEsercizio WHERE percFisio = $exListNum AND tipologia = '".$exType."' AND abilita = '".$ability."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    //echo(json_encode($row));
    if(empty($row)){
        $query = "INSERT INTO implementazioneEsercizio (inserimento, tipologia, percFisio, abilita) VALUES ('$insertionDate', '$exType', '$exListNum', '$ability')";
        // aggiungi cgcreaes
        if(mysqli_query($db,$query)){
            http_response_code(201);
            //$query = "INSERT INTO cgCreaEs (inserimento, tipologia, percFisio, abilita) VALUES ('$insertionDate', '$exType', '$exListNum', '$ability')";
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