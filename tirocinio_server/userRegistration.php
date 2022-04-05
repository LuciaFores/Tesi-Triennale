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
    $role = $request->role;
    $sql = "INSERT INTO caregiver (fiscalCode, name, surname, email, password, role) VALUES ('$fiscalCode', '$name', '$surname', '$email', '$password', '$role')";
    if(mysqli_query($db,$sql)){
        http_response_code(201);
    }
    else{
        http_response_code(422);
    }
}
?>