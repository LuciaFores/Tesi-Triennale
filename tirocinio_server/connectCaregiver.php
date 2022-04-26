<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $caregiver = $request->caregiver;
    $patient = $request->patient;
    
    $query = "SELECT * FROM bambino WHERE utente = '".$patient."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    // se esiste un utente bambino con la chiave indicata
    if(!empty($row)){
        // controllo se il caregiver non è già collegato al bambino
        $query = "SELECT * FROM cgbambino WHERE bambino = '".$patient."' AND caregiver = '".$caregiver."'";
        $result = mysqli_query($db, $query);
        $row = mysqli_fetch_assoc($result);
        // se il caregiver non è già collegato al bambino
        if(empty($row)){
            // collego il caregiver al bambino
            $query = "INSERT INTO cgbambino (caregiver, bambino) VALUES ('$caregiver', '$patient')";
            // se l'inserimento è andato a buon fine
            if(mysqli_query($db, $query)){
                // dico che l'entry è stata creata
                http_response_code(201);
            }
            // altrimenti l'inserimento non è andato a buon fine
            else{
                // mando errore
                http_response_code(409);
            }
        }
        // altrimneti se è già collegato mando errore
        else{
            http_response_code(409);
        }
    }
    // se non esiste un utente bambino
    else{
        // allora invio un errore
        http_response_code(409);
    }
}
?>