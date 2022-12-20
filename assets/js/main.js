var checks = document.querySelectorAll(".r");
var Reponses = document.querySelectorAll('input[type="radio"]');
let suivant = document.querySelector('.suivant');
let number = document.querySelector('.TotalQuestion .number');

async function getQuestion(){
    $.ajax({
        url:"/assets/js/data.json",
        type:'GEt',
        success:function(data,status){
            let ObjQuestion = new Object(data);
            // console.log(ObjQuestion.Questions)
            let countQuestion = ObjQuestion['Questions'].length;
            nbr = countQuestion;
            CountQuestion(nbr)
            // console.log(ObjQuestion.Questions)
            AddQuestion(ObjQuestion.Questions,nbr)
        }
    })
}
getQuestion()

function CountQuestion(nbr){
    number.innerHTML=nbr;
}



checks.forEach((check)=>{
    check.addEventListener('click', function(){
        Reponses.forEach ((element) =>{
            if (element.value === check.innerText) {
                element.checked = true;
                console.log(element.value)
                // element.style.color= "red";
                // check.style.background="vert";
            }else{
                // check.style.background="red";
            }
        })
    })
})



function AddQuestion(obj,count){
    //numbre Queqtion
    let nbr = document.querySelector('.number');
    //titile Question
    let Question = document.getElementById('Question'); 
    //Reponse_1
    let re = document.querySelector("listReponse");
    var a=1;
    for (let i = 0; i < count; i++) {
        n=1
        //append numbre
        nbr.innerText = i+n;
        //create Question
        // console.log(obj)
        if (obj[i]['id'] === a) {
            let newQuestion = document.createTextNode(obj[i].Question);
            console.log(newQuestion,a,obj[i]['id']);
            //Append Question in quiz
            Question.append(newQuestion);
            suivant.addEventListener('click',function(){
                a++
                console.log(a)
            })
        }
        
        //create Reponse (radioButton)
        let radio = document.createElement('input');
        radio.name = 'Reponse'
        radio.type = 'radio'
        radio.id = `Reponse_${i}`
        radio.value = obj[`Reponse_${i}`]
        //create Reponse (a)
        // if(i === obj['Questions']['id']){
        //     console.log('TRT')
        // }
        // let a = document.createTextNode(obj[i]['Question']);
        // console.log(a)
        // re.appendChild(a);

        // console.log(i);
        // console.log(obj[i]['Question'],obj[i].Reponses[i][`Reponse_1`],obj[i].Reponses[i][`Reponse_2`],obj[i].Reponses[i][`Reponse_3`],obj[i].Reponses[i][`Reponse_4`])
        
    }
}

// await function suivant(){
//     let contenu = document.querySelector(".test");
// }
// suivant()


// function reponseVrais(){
    

// }

// function Suivant(){
//     // var nbr =0
//     // nbr++
//     a++;
//     // number.innerHTML=nbr;
//     console.log(a)
// }