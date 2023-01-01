<?php

include_once 'Controller.Quiz.php';
if(isset($_POST['correct'])){
    $con = new ControllerQuiz(); 
    
    echo json_encode($con->Correct());
}

?>