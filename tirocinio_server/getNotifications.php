<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $tutor = $request -> tutor;

    $query = "SELECT id, cfMittente, nomeMittente, cognomeMittente, cfB, nomeB, cognomeB, tipo FROM notifica WHERE cfDest = '".$tutor."'";

    $result = mysqli_query($db, $query);
    $notifies = [];
    while($notify = mysqli_fetch_array($result, MYSQLI_NUM)){
        $notifies = array_merge($notifies, $notify);
    }
    echo(json_encode($notifies));
    
}
?>