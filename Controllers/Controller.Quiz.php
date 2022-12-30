<?php
include_once '../Models/Model.Quiz.php';
class ControllerQuiz extends ModelQuiz{
    function d(){
        return $this->getAll();
    }


    function getreponses()
    {
        return $this->getreponse();
    }


}