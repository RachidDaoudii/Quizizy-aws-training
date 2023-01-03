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
    $id=json_decode($_POST['id']);
    $t=array();
    for ($i=0; $i<count($id) ; $i++) { 
        $res = $con->getreponses($id[$i]);
        array_push($t,$res);
        // echo $finres[1];
        
    }
    echo json_encode($t);

}
elseif(isset($_POST['score'])){
    $score=$_POST['score'];
    $con->Score($score);
}

?>