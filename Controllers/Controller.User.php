<?php

include_once '../Models/Model.User.php';
include_once '../Class/Class.User.php';
class ControllerUser extends ModelUser{

    public function addUser($nom,$prenom,$score){
        die;
        $date = new DateTime();
        $dateTest =  $date->format('m/Y/d H:i:s');
        $this->addInfo($nom,$prenom,$score,$dateTest);
    }

    public function getUser(){
        return $this->getAlluser();
    }

    public function Checknom($nom){
        return $this->check($nom);
    }
}

?>