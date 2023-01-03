<?php

include_once 'Controller.User.php';
include_once '../Class/Class.User.php';

$user = new ControllerUser();

if(isset($_POST['firstName'])){
    
    // die;
    $nom = $_POST['firstName'];
    $prenom = $_POST['lastName'];
    $score = $_POST['score'];
    $user->addUser($nom,$prenom,$score);
    
}elseif(isset($_POST['user'])){

    $data = $user->getUser();
    echo json_encode($data);

}elseif(isset($_POST['nomUser'])){

    $nom = $_POST['nomUser'];
    $user->Checknom($nom);
}

