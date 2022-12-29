<?php
include_once '../DataBase/DB.php';
class ModelQuiz extends DB{

    // protected function gatData(){
    //     return $this->Connect();
    // }


    protected function getAll(){
        $sql = "SELECT q.content as question ,r.content as reponse FROM questions as q inner join repones as r where q.id=r.correct";
        $statement = $this->Connect()->prepare($sql);
        $statement->execute();
        $res = $statement->fetchAll();
        return $res;
    }


    
}