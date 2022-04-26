<?php
require 'connect.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $caregiver = $request->caregiver;
    $name = $request->name;
    $surname = $request->surname;
    $fiscalCode = $request->fiscalCode;
    $birthDate = $request->birthDate;
    $disabilities = $request->disabilities;
    
    $query = "SELECT * FROM utente WHERE cf = '".$fiscalCode."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    // controllo che non ci sia già un bambino registrato con il codice fiscale dato
    if(empty($row)){
        // se non esiste allora registro un nuovo utente
        $query = "INSERT INTO utente (cf, nome, cognome) VALUES ('$fiscalCode', '$name', '$surname')";
        // se la registrazione va a buon fine
        if(mysqli_query($db,$query)){
            // registro la relazione che esiste tra il caregiver e il bambino
            $query = "INSERT INTO cgbambino (caregiver, bambino) VALUES ('$caregiver', '$fiscalCode')";
            // se la registrazione è andata a buon fine
            if(mysqli_query($db, $query)){
                // registro che l'utente è un bambino
                $query = "INSERT INTO bambino (utente, nome, cognome, nascita) VALUES ('$fiscalCode', '$name', '$surname', '$birthDate')";
                // se la registrazione è andata a buon fine
                if(mysqli_query($db,$query)){
                    // per ogni disabilità indicata
                    for($i = 0; $i < count($disabilities); $i++){
                        $disability = $disabilities[$i];
                        // creo il collegamento tra la disabilità e il bambino
                        $query = "INSERT INTO bdisabilita (bambino, disabilita) VALUES ('$fiscalCode', '$disability')";
                        if(mysqli_query($db, $query)){
                            continue;
                        }
                        else{
                            http_response_code(409);
                        }
                    }
                }
            }
            // se la registrazione non è andata a buon fine mando un errore
            else{
                http_response_code(409);
            }
        }
        // se la registrazione non è andata a buon fine mando un errore
        else{
            http_response_code(409);
        }
    }
    // se già esiste invio un errore
    else{
        http_response_code(409);
    }
}
?>