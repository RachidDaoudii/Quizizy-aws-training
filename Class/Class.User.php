<?php
class Users{
    private $firstName;
    private $lastName;
    private $score;

    public function __construct($firstName,$lastName,$score){
        $this->$firstName=$firstName;
        $this->$lastName=$lastName;
        $this->$score=$score;
    }
    
    public function getfirstName()
    {
        return $this->firstName;
    }

    public function setfirstName($firstName)
    {
        $this->firstName = $firstName;
    }

    public function getlastName()
    {
        return $this->lastName;
    }

    public function setlastName($lastName)
    {
        $this->lastName = $lastName;
    }
    public function getScore()
    {
        return $this->score;
    }

    public function setScore($score)
    {
        $this->score = $score;
    }
}