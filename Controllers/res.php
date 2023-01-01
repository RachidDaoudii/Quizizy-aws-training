<?php

include_once 'Controller.Quiz.php';
$reponse = $_POST['arrayRepons'];


$con = new ControllerQuiz(); 

$con->getreponses($reponse);