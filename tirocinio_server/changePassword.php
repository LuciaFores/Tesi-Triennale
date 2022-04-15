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
    $query = "SELECT * FROM caregiver WHERE fiscalCode = '".$user."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    if(!empty($row)){
        // controllo che la old password combaci con la password salvata nel db
        $pwCheck = password_verify($oldPw, $row['password']);
        if($pwCheck){
            $hashedPassword = password_hash($newPw, PASSWORD_DEFAULT);
            $update = "UPDATE caregiver SET password = '".$hashedPassword."' WHERE fiscalCode = '".$user."'";
            if(mysqli_query($db, $update)){
                http_response_code(201);
            }
            else{
                http_response_code(409);
            }
        }
    }
    else{
        http_response_code(409);
    }
}
?>