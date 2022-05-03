<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $exListNum = $request -> exListNum;
    $exType = $request -> exType;

    $query = "SELECT inserimento, apprendimento, sospensione, concluso, rispAcc, ripasso, abilita FROM implementazioneEsercizio WHERE percFisio = $exListNum AND tipologia = '".$exType."'";

    $result = mysqli_query($db, $query);
    $exercises = [];
    while($exercise = mysqli_fetch_array($result, MYSQLI_NUM)){
        $exercises = array_merge($exercises, $exercise);
    }
    echo(json_encode($exercises));
    
}
?>