<?php
include_once '../DataBase/DB.php';
include_once '../Class/Class.User.php';
class ModelUser extends DB{

    protected function addInfo($nom,$prenom,$score,$dateTest){
        $sql="INSERT INTO users(firstName, lastName, score, date) VALUES (?,?,?,?)";
        $statement = $this->Connect()->prepare($sql);
        $statement->execute(array($nom,$prenom,$score,$dateTest));
    }

    protected function getAllUser(){
        $sql="Select firstName,LastName,Score,date from users ORDER by score DESC";
        $statement = $this->Connect()->prepare($sql);
        $statement->execute();
        $res = $statement->fetchAll();
        return $res;
    }

    protected function check($nom){
        $sql="SELECT id FROM users where firstName=?";
        $statement = $this->Connect()->prepare($sql);
        $statement->execute(array($nom));
        $row = $statement->fetchColumn();
        if($row > 0){
            echo'<span>This Nom is not Available.</span>';
        }else{
            echo'<span>This Nom is Available.</span>';
        }
    }
}