<?php

include_once 'Controller.Quiz.php';
if(isset($_POST['questions'])){
    $con = new ControllerQuiz();
    echo json_encode($con->d());
}
?>