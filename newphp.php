<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Definir constantes
define("GRAPH_API_URL", 'https://graph.facebook.com/v17.0/109859748873255/messages');
define("ACCESS_TOKEN", 'EAAJSy5xtynABO7zgrxL0ZAETJdqiz2WRbOt7XytTJY1XPk1FuIE2nPUteyQ2fMDo6WWZBoqN3ieQlqNyNtsSr0KJUIBBtk48RwpLPVZA6wljMYwZCn6hvKT36jFRs8UVO5KFemfqPOiZBdKrOZBS4ZBbnDq1wu8Qx3zj1zIQdj01Y8KuZBG0pXwSy53d6VngBDZBGL0b1D4mTbBO3bE6A');
//define("ACCESS_TOKEN", 'EAAJSy5xtynABOwDec7kBCsFpZBbN0xAzMJ2JNMxzDrLgDBku3vfnhnDkPCt83xOLdLG2cZBWLWBlCgoMezawZAREOALOAjEuy6v3WYng9XrzaqEJKZAtbBy4Q0zkNfjuptwD6uGZChY8bpOSldKW9xAZAfXgukDgmrCTrJoDB0ZAJHlngpjsZAtYDmlbPVBa37nO3wAiiZCArC7oftwQDcZBYrMqBIvufibjwFeAZDZD');


function login()
{
    // Obtener los datos enviados desde la página web
    $username = $_POST["username"];
    $password = $_POST["password"];

    $response = array();
    $usuarios = array(
        "Andres Dev" => "CCG321",
        "Admin" => "Admin123",
        "CamiloP" => "CCG321",
    );
    
    
    if (array_key_exists($username, $usuarios) && $usuarios[$username] === $password) {
        // Los datos son válidos, puedes realizar las acciones necesarias
        $response['message'] = "Credenciales válidas";
        $response['loggedIn'] = true;

        if (array_key_exists($username, $usuarios)) {
            $response['nameCreated'] = $username;
        }

    } else {
        // Los datos no son válidos
        $response['message'] = "Credenciales inválidas";
        $response['loggedIn'] = false;
    }
    
    // Asegúrate de enviar el encabezado JSON
    header('Content-Type: application/json');
    echo json_encode($response);
    exit; // Termina la ejecución después de enviar la respuesta JSON
}
function send_to_excel($response) {
    $url = 'https://script.google.com/macros/s/AKfycbzBtbRc0poamnKGInDexoESmf1GKcwN9AnOUu4RgBDJ3VAWecOmuzK6NutYQMbEY0XkSQ/exec';

    // Datos a enviar en la solicitud POST
    $data = http_build_query($response);

    $ch = curl_init($url);

    // Configurar la solicitud cURL
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/x-www-form-urlencoded'
    ));

    // Hacer la solicitud
    $result = curl_exec($ch);

    // Comprobar si hubo errores en la solicitud
    if ($result === false) {
        echo 'Error en la solicitud cURL: ' . curl_error($ch);
    } else {
        echo 'Solicitud exitosa. Respuesta: ' . $result;
    }

    // Cerrar la sesión cURL
    curl_close($ch);
}

function send_message()
{
    
        $registro = json_decode($_POST["registro"], true);
        $resultados = [];
        
        if (preg_match('/573^\d{9}$/', $registro["telefono"])) {
            $telephone = $registro["telefono"];
        } else {
            $telephone = "fall";
        }

        $data = [
            'messaging_product' => 'whatsapp',
            'to' =>  $telephone,
            'type' => 'template',
            'template' => [
                'name' => $registro["plantilla"],
                'language' => [
                    'code' => 'es'
                ],
                'components' => [
                    [
                        'type' => 'header',
                        'parameters' => [
                            [
                                'type' => 'image',
                                'image' => [
                                    'link' => $registro["imagen"]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ];
        
        $headers = [
            'Authorization: Bearer ' . ACCESS_TOKEN,
            'Content-Type: application/json'
        ];
        
        $ch = curl_init(GRAPH_API_URL);
        
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        $response = curl_exec($ch);

        if (curl_errno($ch)) {
            http_response_code(500);
            echo json_encode(["error" => "Error al enviar el mensaje: " . curl_error($ch)]);
            return;
        }

        curl_close($ch);

        $responseData = json_decode($response, true); // Decodificar la respuesta JSON a un arreglo asociativo
        $responseData["telephone"] = $registro["telefono"]; // Agregar el atributo "telephone"
        echo json_encode($responseData); // Codificar y enviar la respuesta actualizada


}

function loginCheck()
{
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if ($_POST["loginCheck"] == false) { 

            login();

        } else {

            send_message();

        }
    } else {

        http_response_code(405);
        echo json_encode(["error" => "Método no permitido"]);
        
    }
}

loginCheck();
?>
