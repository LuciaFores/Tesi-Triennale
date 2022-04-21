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
    
    $query = "SELECT * FROM disabilita WHERE nome = '".$name."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    if(empty($row)){
        $query = "INSERT INTO disabilita (nome, descrizione) VALUES ('$name', '$description')";
        if(mysqli_query($db,$query)){
            http_response_code(201);
        }
        else{
            http_response_code(422);
        }
    }
    else{
        http_response_code(409);
    }
}
?>