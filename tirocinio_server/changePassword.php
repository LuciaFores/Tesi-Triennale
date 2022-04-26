<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $user = $request->user;
    $oldPw = $request->oldPw;
    $newPw = $request->newPw;

    $query = "SELECT * FROM caregiver WHERE cf = '".$user."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    // vuol dire che esiste un utente con la chiave dichiarata
    if(!empty($row)){
        // controllo che la vecchia password combaci con la password salvata nel db
        $pwCheck = password_verify($oldPw, $row['password']);
        // se la vecchia password combacia con quella registrata
        if($pwCheck){
            $hashedPassword = password_hash($newPw, PASSWORD_DEFAULT);
            $update = "UPDATE caregiver SET password = '".$hashedPassword."' WHERE cf = '".$user."'";
            // se la query di modifica va a buon fine
            if(mysqli_query($db, $update)){
                // allora avverto che l'entry è stata modificata correttamente
                http_response_code(200);
            }
            // altrimenti dico che non è stata modificata
            else{
                http_response_code(409);
            }
        }
        // vuol dire che la vecchia password non cambaciava con quella inserita
        // e quindi che non è stata modificata
        else{
            http_response_code(409);
        }
    }
    // vuol dire che non ho trovato un utente con la chiave indicata
    else{
        http_response_code(409);
    }
}
?>