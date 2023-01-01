<?php

include_once 'Controller.Quiz.php';
$con = new ControllerQuiz(); 
if(isset($_POST['questions'])){
    echo json_encode($con->d());
}
elseif(isset($_POST['correct'])){
    echo json_encode($con->Correct());
}
elseif(isset($_POST['id'])){
    $id=$_POST['id'];
    
    echo json_encode($con->reponseVrai($id));
    // var_dump(json_encode($con->reponseVrai($id)));
    // die;
}

?>