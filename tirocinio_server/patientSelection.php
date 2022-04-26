<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $patient = $request -> patient;
    $caregiver = $request -> caregiver;

    $query = "SELECT * FROM bambino WHERE utente = '".$patient."'";
    $result = mysqli_query($db, $query);
    $row_p = mysqli_fetch_assoc($result);
    // vuol dire che il bambino è registrato nel sistema
    if(!empty($row_p)){
        $query = "SELECT * FROM cgbambino WHERE bambino = '".$patient."' AND caregiver = '".$caregiver."'";
        $result = mysqli_query($db, $query);
        $row = mysqli_fetch_assoc($result);
        // vuol dire che il caregiver è caregiver del bambino
        if(!empty($row)){
            $query = "SELECT disabilita FROM bdisabilita WHERE bambino = '".$patient."'";
            $result = mysqli_query($db, $query);
            while($disability = mysqli_fetch_array($result, MYSQLI_NUM)){
                $row_p = array_merge($row_p, $disability);
            }
            echo(json_encode($row_p));
        }
        // vuol dire che il caregiver non è caregiver del bambino e quindi
        // non può accedere alle risorse relative al bambino
        else{
            http_response_code(412);
        }
    }
    // vuol dire che il bambino non è registrato nel sistema ossia che
    // non è stato trovato un utente con la chiave inserita
    else{
        http_response_code(409);
    }
}
?>