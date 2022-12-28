<?php
class DB{



    function connect(){
        $fileJson = file_get_contents("../assets/js/dataFIn.json");
        $data = json_decode($fileJson, true);
        return $data;
    }
    
}