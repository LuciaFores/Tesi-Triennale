<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $name = $request->name;
    $surname = $request->surname;
    $fiscalCode = $request->fiscalCode;
    $email = $request->email;
    $password = $request->password;
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $role = $request->role;
    $query = "SELECT * FROM utente WHERE cf = '".$fiscalCode."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    if(empty($row)){
        $query = "SELECT * FROM caregiver WHERE email = '".$email."'";
        $result = mysqli_query($db, $query);
        $row = mysqli_fetch_assoc($result);
        if(empty($row)){
            $query = "INSERT INTO utente (cf, nome, cognome) VALUES ('$fiscalCode', '$name', '$surname')";
            if(mysqli_query($db,$query)){
                $query = "INSERT INTO caregiver (utente, nome, cognome, email, password, ruolo) VALUES ('$fiscalCode', '$name', '$surname', '$email', '$hashedPassword', '$role')";
                if(mysqli_query($db,$query)){
                    http_response_code(201);
                }
            }
            else{
                http_response_code(422);
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