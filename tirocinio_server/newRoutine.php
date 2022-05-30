<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    date_default_timezone_set('Europe/Rome');

    $request = json_decode($postdata);

    $name = $request->name;
    $exListNum = $request->exListNum;

    $query = "SELECT * FROM routine WHERE nome = '".$name."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    if(empty($row)){
        //$date = now();
        $query = "INSERT INTO routine (nome, percFisio) VALUES ('$name', $exListNum)";
        if(mysqli_query($db, $query)){
            http_response_code(201);
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