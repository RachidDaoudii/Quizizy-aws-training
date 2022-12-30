<?php 


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <!-- Font Awesome JS -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>
    <!-- Font Awesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Quiz</title>
</head>
<body style=" width: 100%; height: 50%; background-image:url(../assets/img/bg-1.png); background-position:center; background-size: cover;z-index: 1;">
    <div class="navbar">
        <div class="list">
            <ul>
                <li><a href="#" class="logo">Quizizy aws training</a></li>
                <li><a href="#"></a>Quizz</li>
                <li><a href="#"></a>About</li>
                <li><a href="#"></a>Contact</li>
            </ul>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="">
                <div class="wrapper-progressBar">
                    <ul class="progressBar">
                    <li class="active">Info</li>
                    <li>Quiz</li>
                    <li>Result</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="cart-quiz" style="background-image:url(../assets/img/bg-2.png); background-position:center; background-size: cover;z-index: 1;">
            <div class="title">
                <img src="../assets/img/logo.png" alt="">
            </div>
            <div class="info displayStart">
                <div class="Q">
                    <div class="beinvenu">
                        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, placeat.</h1>
                    </div>
                    <form class="form-info">
                        <div class="group">
                            <label for="" class="from-label">Nom</label>
                            <input type="text" class="form-control" name="Nom" id="nom">
                        </div>
                        <div class="group">
                            <label for="" class="from-label">Prenom</label>
                            <input type="text" class="form-control" name="Prenom" id="prenom">
                        </div>
                    </form>
                    <button class="btn" id="start" >Start</button>
                </div>
            </div>
            <div class="quiz">
                <div class="Q">
                    
                    <div class="resultat">Question <span class="number">1</span></div>

                    <p id="Question">
                    </p>
                    <div class="time">
                        <div class="duree">
                            30s
                        </div>
                    </div>
                </div>
                <div class="reponse">
                    <ul class="ul">
                        <li><input type="radio" id="Reponse_1" name="Reponse" value=""><label for="Reponse_1" class="r"></label></li>
                        <li><input type="radio" id="Reponse_2" name="Reponse" value=""><label for="Reponse_2" class="r"></label></li>
                        <li><input type="radio" id="Reponse_3" name="Reponse" value=""><label for="Reponse_3" class="r"></label></li>
                        <li><input type="radio" id="Reponse_4" name="Reponse" value=""><label for="Reponse_4" class="r"></label></li>
                    </ul>
                </div>
                <div class="btn-reponse pro">
                    <div class="TotalQuestion">Question <span class="number"></span></div>
                    <progress class="prog" value="" max="100" value=""></progress>
                    <input type="submit" class="btn suivant" value="suivant">
                </div>
            </div>
            <div class="result">
                <div class="beinvenu">
                    <h1 class="h1">Reponse</h1>
                </div>
                <div class="questionResult">

                </div>
                <!-- <input type="submit" class="btn suivant explication" value="l'explication"> -->
            </div>
        </div>
    </div>
</body>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.2/jquery.min.js"></script>
<script src="../assets/js/script.js"></script>
<!-- <script src="../assets/js/main.js"></script> -->

</html>