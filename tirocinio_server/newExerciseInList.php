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
    $correctResponse = $request->correctResponse;

    $query = "SELECT cod FROM abilita WHERE descrizione = '".$ability."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    if(!empty($row)){
        $cod = $row['cod'];
        $query = "SELECT * FROM implementazioneEsercizio WHERE percFisio = $exListNum AND tipologia = '".$exType."' AND abilita = $cod";
        $result = mysqli_query($db, $query);
        $row = mysqli_fetch_assoc($result);
        if(empty($row)){
            $query = "INSERT INTO implementazioneEsercizio (inserimento, rispAcc, tipologia, percFisio, abilita) VALUES ('$insertionDate', '$correctResponse', '$exType', $exListNum, $cod)";
            if(mysqli_query($db,$query)){
                $exercise = mysqli_insert_id($db);
                $query = "INSERT INTO cgCreaEs (caregiver, esImpl) VALUES ('$caregiver', $exercise)";
                if(mysqli_query($db, $query)){
                    http_response_code(201);
                }
                else{
                    http_response_code(409);
                }
            }
            else{
                http_response_code(404);
            }
        }
        else{
            http_response_code(409);
        }
    }    
}
?>