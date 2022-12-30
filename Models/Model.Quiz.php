<?php
include_once '../DataBase/DB.php';
class ModelQuiz extends DB{

    // protected function gatData(){
    //     return $this->Connect();
    // }


    protected function getAll(){
        $sql="select DISTINCT q.content as question,
		(select an.id from repones as an where an._order like 1 AND an.correct like q.id ) as id_Reponse_1,
        (select an.content from repones as an where an._order like 1 AND an.correct like q.id ) as Reponse_1,
        (select an.id from repones as an where an._order like 2 AND an.correct like q.id ) as id_Reponse_2,
        (select an.content from repones as an where an._order like 2 AND an.correct like q.id ) as Reponse_2,
        (select an.id from repones as an where an._order like 3 AND an.correct like q.id ) as id_Reponse_3,
        (select an.content from repones as an where an._order like 3 AND an.correct like q.id ) as Reponse_3,
        (select an.id from repones as an where an._order like 4 AND an.correct like q.id ) as id_Reponse_4,
        (select an.content from repones as an where an._order like 3 AND an.correct like q.id ) as Reponse_4
        from repones as a, questions q
        where q.id  = a.correct";
        $statement = $this->Connect()->prepare($sql);
        $statement->execute();
        $res = $statement->fetchAll();
        return $res;
    }


    protected function getreponse(){
        $sql="SELECT id FROM repones WHERE status=1";
        $statement = $this->Connect()->prepare($sql);
        $statement->execute();
        $res = $statement->fetchAll();
        return $res;
    }
}