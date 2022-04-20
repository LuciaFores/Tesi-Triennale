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
    $birthDate = $request->birthDate;
    $disabilities = $request->disabilities;
    
    $query = "SELECT * FROM utente WHERE cf = '".$fiscalCode."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    if(empty($row)){
        $query = "INSERT INTO utente (cf, nome, cognome) VALUES ('$fiscalCode', '$name', '$surname')";
        if(mysqli_query($db,$query)){
            $query = "INSERT INTO bambino (utente, nome, cognome, nascita) VALUES ('$fiscalCode', '$name', '$surname', '$birthDate')";
            if(mysqli_query($db,$query)){
                for($i = 0; $i < count($disabilities); $i++){
                    $disability = $disabilities[$i];
                    $query = "INSERT INTO bdisabilita (bambino, disabilita) VALUES ('$fiscalCode', '$disability')";
                    if(mysqli_query($db, $query)){
                        continue;
                    }
                    else{
                        http_response_code(201);
                    }
                }
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
?>