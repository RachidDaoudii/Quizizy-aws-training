<?php
class Users{
    private $firstName;
    private $lastName;

    public function __construct($firstName,$lastName){
        $this->$firstName=$firstName;
        $this->$lastName=$lastName;
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
}