<?php
include_once '../DataBase/DB.php';
class ModelQuiz extends DB{

    // protected function gatData(){
    //     return $this->Connect();
    // }


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
        // $sql="SELECT id FROM responses WHERE iscorrect=?";
        $sql="SELECT iscorrect FROM `responses` WHERE id=?";
        $statement = $this->Connect()->prepare($sql);
        $statement->execute(array($id));
        $row_count =$statement->fetchColumn();
        if($row_count == 1){
            echo'vrai';
        }else{
            echo'faux';
        }
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
}