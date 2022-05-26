<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $caregiver = $request->caregiver;
    $patient = $request->patient;
    $type = $request->type;

    // recupero il tutore del paziente
    $query = "SELECT tutore FROM bambino WHERE utente = '".$patient."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    if(!empty($row)){
        $ptTutor = $row['tutore'];

        // a questo punto posso inviare la richiesta
        $query = "INSERT INTO notifica (cfMittente, cfB, cfDest, tipo) VALUES ('$caregiver', '$patient', '$ptTutor', '$type')";
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






/*$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $caregiver = $request->caregiver;
    $patient = $request->patient;
    $type = $request->type;
    
    // come prima cosa recupero nome e cognome del caregiver che ha effettuato la richiesta
    $query = "SELECT nome, cognome FROM utente WHERE cf = '".$caregiver."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);

    if(!empty($row)){
        // salvo nome e cognome del caregiver
        $cgName = $row['nome'];
        $cgSurname = $row['cognome'];

        // recupero nome cognome del paziente
        $query = "SELECT nome, cognome FROM utente WHERE cf = '".$patient."'";
        $result = mysqli_query($db, $query);
        $row = mysqli_fetch_assoc($result);
        if(!empty($row)){
            $ptName = $row['nome'];
            $ptSurname = $row['cognome'];

            // recupero il tutore del paziente
            $query = "SELECT tutore FROM bambino WHERE utente = '".$patient."'";
            $result = mysqli_query($db, $query);
            $row = mysqli_fetch_assoc($result);
            if(!empty($row)){
                $ptTutor = $row['tutore'];

                // a questo punto posso inviare la richiesta
                $query = "INSERT INTO notifica (cfMittente, nomeMittente, cognomeMittente, cfB, nomeB, cognomeB, cfDest, tipo) VALUES ('$caregiver', '$cgName', '$cgSurname', '$patient', '$ptName', '$ptSurname', '$ptTutor', '$type')";
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
        else{
            http_response_code(409);
        }
    }
    else{
        http_response_code(409);
    }
}*/
?>