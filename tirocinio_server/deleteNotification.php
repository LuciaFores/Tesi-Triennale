<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $id = $request -> id;

    $query = "DELETE FROM notifica WHERE id = $id";

    if(mysqli_query($db, $query)){
        http_response_code(201);
    }
    else{
        http_response_code(409);
    }
    
}
?>