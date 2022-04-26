<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $user = $request -> user;
    $password = $request -> randPw;
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $message_object = 'Cambio della password';
    $message_text =  "È stata inviata una richiesta per il cambio della password del tuo account.\n
    Per modificare la password segui i prossimi passi:
    1. Autenticati al tuo account con la password temporanea";
    $message_text .= $password;
    $message_text .= "
    2. Modifica la tua password dall'apposita sezione nel tuo profilo
    3. Dalla successiva autenticazione potrai usare la password appena impostata
    per accedere al tuo account
    ";

    $query = "SELECT * FROM caregiver WHERE cf = '".$user."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    // potrebbe voler dire che l'utente non si è autenticato con il codice fiscale
    if(empty($row)){
        // provo a vedere se si è autenticato con l'email
        $query = "SELECT * FROM caregiver WHERE email = '".$user."'";
        $result = mysqli_query($db, $query);
        $row = mysqli_fetch_assoc($result);
        // se non ho trovato utenti mando errore
        if(empty($row)){
            http_response_code(409);
        }
        // altrimenti modifico la password di accesso con quella randomizzata
        // scrivendo la query indicando che l'utente si è autenticato con la mail
        $update = "UPDATE caregiver SET password = '".$hashedPassword."' WHERE email = '".$user."'";
    }
    else{
        // modifico la password di accesso con quella randomizzata 
        // scrivendo la query indicando che l'utente si è autenticato con il codice fiscale
        $update = "UPDATE caregiver SET password = '".$hashedPassword."' WHERE cf = '".$user."'";
    }
    // se la query va a buon fine
    if(mysqli_query($db, $update)){
        // invio una mail con la password e le indicazioni
        $message_reciever = $row['email'];
        mail($message_reciever, $message_object, $message_text);
        http_response_code(201);
    }
    // altrimenti mando un errore
    else{
        http_response_code(409);
    }
}
?>