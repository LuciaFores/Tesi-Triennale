<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $exNum = $request -> exNum;

    $query = "SELECT * FROM esrout WHERE esImpl = $exNum";

    $result = mysqli_query($db, $query);
    $esiti = [];
    while($esito = mysqli_fetch_array($result, MYSQLI_NUM)){
        $esiti = array_merge($esiti, $esito);
    }
echo(json_encode($esiti));
    
}
?>