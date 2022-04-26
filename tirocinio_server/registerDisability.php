<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $name = $request->name;
    $description = $request->description;

    $message_object = 'Inserimento disabilità nel menu di selezione durante la registrazione di un paziente';
    $message_text =  "È stata inviata una richiesta per l'inseriemento di una nuova disabilità da inserire nel menu di selezione.\n
    Di seguito il nome della disabilità da inserire:
    ";
    $message_text .= $name;
    // da sostituire con la mail che si userà nella piattaforma
    $message_reciever = 'lucia.fores99@gmail.com';
    
    $query = "SELECT * FROM disabilita WHERE nome = '".$name."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    // se non esiste già una disabilità con lo stesso nome registrata nel sistema
    if(empty($row)){
        $query = "INSERT INTO disabilita (nome, descrizione) VALUES ('$name', '$description')";
        // registro la disabilità nel sistema e se va a buon fine
        if(mysqli_query($db,$query)){
            // invio la mail per avvertire di inserire la disabilità
            mail($message_reciever, $message_object, $message_text);
            // dico che l'entry è stata creata
            http_response_code(201);
        }
        // altrimenti vuol dire che la disabilità non è stata registrata
        else{
            http_response_code(409);
        }
    }
    // altrimenti vuol dire che esiste già la disabilità nel sistema
    else{
        http_response_code(409);
    }
}
?>