<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $exNum = $request->exNum;
    $declaration = $request->declaration;
    $declarationData = $request->declarationDate;

    $query = "SELECT apprendimento, sospensione, ripasso FROM implementazioneEsercizio WHERE id = $exNum";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    if(!empty($row)){
        /*$str = ".$declaration.";*/
        //http_response_code(201);
        $apprendimento = $row['apprendimento'];
        $sospensione = $row['sospensione'];
        $ripasso = $row['ripasso'];

        //echo($apprendimento);

        if($declaration == 'appreso' && $sospensione == null && $ripasso == null){
            $query = "UPDATE implementazioneEsercizio SET apprendimento = '".$declarationData."' WHERE id = $exNum";

            if(mysqli_query($db, $query)){
                http_response_code(201);
            }
            else{
                http_response_code(409);
            }
        }
        elseif($declaration == 'sospeso' && $apprendimento == null && $ripasso == null){
            $query = "UPDATE implementazioneEsercizio SET sospensione = '".$declarationData."' WHERE id = $exNum";
            if(mysqli_query($db, $query)){
                http_response_code(201);
            }
            else{
                http_response_code(409);
            }
        }
        elseif($declaration == 'ripasso' && $apprendimento != null){
            $query = "UPDATE implementazioneEsercizio SET ripasso = '".$declarationData."' WHERE id = $exNum";
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
    else{
        http_response_code(409);
    }
}
?>