<?php
include_once '../DataBase/DB.php';
class ModelQuiz extends DB{


    protected function getAll(){
        $sql="select DISTINCT q.content as question,
		(select an.id from responses as an where an._order like 1 AND an.question_id like q.id ) as id_Reponse_1,
        (select an.content from responses as an where an._order like 1 AND an.question_id like q.id ) as Reponse_1,
        (select an.id from responses as an where an._order like 2 AND an.question_id like q.id ) as id_Reponse_2,
        (select an.content from responses as an where an._order like 2 AND an.question_id like q.id ) as Reponse_2,
        (select an.id from responses as an where an._order like 3 AND an.question_id like q.id ) as id_Reponse_3,
        (select an.content from responses as an where an._order like 3 AND an.question_id like q.id ) as Reponse_3,
        (select an.id from responses as an where an._order like 4 AND an.question_id like q.id ) as id_Reponse_4,
        (select an.content from responses as an where an._order like 4 AND an.question_id like q.id ) as Reponse_4
        from responses as a, questions q
        where q.id  = a.question_id";
        $statement = $this->Connect()->prepare($sql);
        $statement->execute();
        $res = $statement->fetchAll();
        return $res;
    }


    protected function getreponse($id){
        $sql="SELECT q.content as question,r.iscorrect as correct , r.content as content FROM responses as r 
        INNER join questions as q 
        ON r.question_id=q.id
        WHERE r.id=?";
        // $sql="SELECT iscorrect as correct , id , content as reponse FROM responses WHERE id=?";
        $statement = $this->Connect()->prepare($sql);
        $statement->execute(array($id));
        $res = $statement->fetchAll();
        return $res;
    }


    protected function getCorrect(){
        $sql="SELECT responses.content as correct ,responses.id as id,questions.content as question FROM responses INNER JOIN questions on questions.id =responses.question_id WHERE responses.iscorrect=1";
        $statement = $this->Connect()->prepare($sql);
        $statement->execute(array(1));
        $res = $statement->fetchAll();
        return $res;
    }



    protected function reponse($id){
        $sql="SELECT responses.id as id,responses.content as correct, questions.content as questions,questions.exp as exp from responses INNER JOIN questions 
        ON responses.question_id=questions.id WHERE responses.id=?";
        $statement = $this->Connect()->prepare($sql);
        $statement->execute(array($id));
        $res = $statement->fetchAll();
        return $res;
    }


    protected function getAllReponse(){
        $sql="SELECT id FROM `responses`";
        $statement = $this->Connect()->prepare($sql);
        $statement->execute();
        $res = $statement->fetchAll();
        return $res;
    }

    protected function getScore($id){
        $sql="SELECT id FROM responses where iscorrect=? and id=?";
        $statement = $this->Connect()->prepare($sql);
        $statement->execute(array(1,$id));
        $row = $statement->fetchColumn();
        if($row > 0){
            echo 'true';
        }else{
            echo 'false';
        }
    }


    
}