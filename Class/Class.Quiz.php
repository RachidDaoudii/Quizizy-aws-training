<?php
class Quiz{
    private $name;
    private $title;
    private $decription;
    private $questions;

    public function __construct($name,$title,$decription,$questions){
        $this->$name=$name;
        $this->$title=$title;
        $this->$decription=$decription;
        $this->$questions=$questions;
    }
    
    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function setTitle($title)
    {
        $this->title = $title;
    }

    public function getDescription()
    {
        return $this->decription;
    }

    public function setDescription($decription)
    {
        $this->decription = $decription;
    }

    public function getQuestions()
    {
        return $this->questions;
    }

    public function setQuestions($questions)
    {
        $this->questions = $questions;
    }
}