<?php
include_once '../DataBase/DB.php';
class ModelQuiz extends DB{

    protected function gatData(){
        return $this->connect();
    }
    
}