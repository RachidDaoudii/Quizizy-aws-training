var ObjectGlobal
async function getQuestion(){
    $.post("../Controllers/RequestHandler.php",
    {   
        questions:true
    },  
    function(data,status){
        ObjectGlobal = JSON.parse(data)
        console.log(ObjectGlobal[0])
        // first(ObjectGlobal[0])
    }
   )
}

getQuestion();

function first(t){
    Question = t.Question
    // Reponse_1 = t.Reponse_1
    // Reponse_2 = t.Reponse_2
    // Reponse_3 = t.Reponse_3
    // Reponse_4 = t.Reponse_4
    // Reponse_vrai = t.Reponse_vrai
    document.querySelector('#Question').innerText=Question
//    document.querySelector('#Reponse_1').value=Reponse_1
//    document.querySelector('#Reponse_2').value=Reponse_2
//    document.querySelector('#Reponse_3').value=Reponse_3
//    document.querySelector('#Reponse_4').value=Reponse_4
//    document.querySelector('.ul').children[0].children[1].innerText=Reponse_1
//    document.querySelector('.ul').children[1].children[1].innerText=Reponse_2
//    document.querySelector('.ul').children[2].children[1].innerText=Reponse_3
//    document.querySelector('.ul').children[3].children[1].innerText=Reponse_4
}
