<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $user = $request -> user;
    $password = $request -> password;

    $query = "SELECT * FROM caregiver WHERE utente = '".$user."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    // vuol dire che l'utente non si è autenticato con il codice fiscale ma con la mail
    if(empty($row)){
        $query = "SELECT * FROM caregiver WHERE email = '".$user."'";
        $result = mysqli_query($db, $query);
        $row = mysqli_fetch_assoc($result);
        if(empty($row)){
            http_response_code(409);
        }
    }
    // in ogni caso se arrivo a questo punto ho la riga con i dati dell'utente
    $checkPassword = password_verify($password, $row['password']);
    if($checkPassword){
        echo(json_encode($row));
        http_response_code(201);
        //return json_encode($row);
    }
    else{
        http_response_code(409);
    }
}
?>