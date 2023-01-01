<?php
include_once '../Models/Model.Quiz.php';
class ControllerQuiz extends ModelQuiz{
    
    function d(){
        return $this->getAll();
    }


    function getreponses($id)
    {
        return $this->getreponse($id);
    }

    function Correct()
    {
        return $this->getCorrect();
    }
    function reponseVrai($id)
    {
        return $this->reponse($id);
    }
}