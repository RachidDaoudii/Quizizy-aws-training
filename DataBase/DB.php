<?php
class DB{

    private $host = "localhost";
    private $db_name = "quiz";
    private $username = "root";
    private $password = "";

    public function Connect()
    {
        $con = 'mysql:host=' . $this->host . ';dbname=' . $this->db_name . ';';
        $PDO = new PDO($con, $this->username, $this->password);
        $PDO->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $PDO;
    }



    // function connect(){
    //     $fileJson = file_get_contents("../assets/js/dataFIn.json");
    //     $data = json_decode($fileJson, true);
    //     return $data;
    // }
    
}