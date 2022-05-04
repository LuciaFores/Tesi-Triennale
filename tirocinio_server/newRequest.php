<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $caregiver = $request->caregiver;
    $description = $request->description;

    $message_object = 'Richiesta per aggiornamento della piattaforma';
    $message_text =  "È stata inviata una richiesta per un aggiornamento della piattaforma.\n
    Di seguito il testo della richiesta:
    ";
    $message_text .= $description;
    // da sostituire con la mail che si userà nella piattaforma
    $message_reciever = 'lucia.fores99@gmail.com';

    $query = "SELECT email FROM caregiver WHERE utente = '".$caregiver."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);

    if(!empty($row)){
        $message_text .= "\n
        Per metterti in contatto con il caregiver che ti ha inviato la richiesta manda una mail all'indirzzo ";
        $message_text .= $row['email'];
        mail($message_reciever, $message_object, $message_text);
        http_response_code(201);
    }
    else{
        http_response_code(409);
    }
}
?>