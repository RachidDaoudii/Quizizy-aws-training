var checks = document.querySelectorAll(".r");
var Reponses = document.querySelectorAll('input[type="radio"]');
let suivant = document.querySelector('.suivant');
let TotalQuestion = document.querySelector('.TotalQuestion .number');
var indexQuestion = 1;
var indexReponse=0;

var ReponseTrue=0

//numbre Queqtion
let numberq = document.querySelector('.Q .number');
 function getQuestion(){
    $.ajax({
        url:"/assets/js/data2.json",
        type:'GEt',
        success:function(data,status){
            let ObjQuestion = new Object(data);
            let countQuestion = ObjQuestion.length;
            nbr = countQuestion;
            TotalQuestion.innerHTML = nbr
            //add first question in page
            first(ObjQuestion[0])
            //btn next question
            suivant.onclick = () =>{
                let test = ObjQuestion[indexQuestion];
                reponses(ObjQuestion[indexReponse],nbr)
                indexQuestion++
                indexReponse++
                //vide title question 
                Questionn.innerHTML='';
                // vide les reponse
                document.querySelector(".ul").innerHTML='';

                AddQuestion(test,nbr)
                
                CountQuestion(indexQuestion)

                // rt()
                // resultat
                resultat(nbr)
            }            
        }
    })
}
getQuestion()

function CountQuestion(nbr){
    numberq.innerHTML=nbr;
}

// function rt(){
//     checks.forEach((check)=>{
//         check.addEventListener('click', function(){
//             console.log(check)
//             Reponses.forEach ((element) =>{
//                 if (element.value === check.innerText) {
//                     element.checked = true;
//                     console.log(element.value)
//                     // element.style.color= "red";
//                     // check.style.background="vert";
//                 }else{
//                     // check.style.background="red";
//                 }
//             })
//         })
//     })
// }


//titile Question
let Questionn = document.getElementById('Question'); 
//Reponse
let re = document.querySelector(".ul");

function AddQuestion(obj,count){
    if(indexQuestion <= count){
        let newQuestion = document.createTextNode(obj['Question']);
        //Append Question in quiz
        Questionn.append(newQuestion);

        for (let i =1;  i<5;i++) {
            var li = document.createElement("li")
            let icons = document.createElement('i')
            let radio = document.createElement('input')
            let label = document.createElement('label')

            icons.className = 'fa-solid fa-circle-question'

            radio.name = 'Reponse'
            radio.type = 'radio'
            radio.value = obj[`Reponse_${i}`];
            radio.id = `Reponse_${i}`

            label.id= 'idradio'
            label.className = 'r'
            label.htmlFor = `Reponse_${i}`
            label.innerHTML = obj[`Reponse_${i}`]

            li.appendChild(icons)
            li.appendChild(radio)
            li.appendChild(label)
            re.appendChild(li)
        }
    }
}

let checkReponse = document.getElementsByName('Reponse')
function reponses(obj,nbr){
    let Reponsess;
    // test = obj[0]
    // console.log('question',test)
    
    
    for (let i = 0; i<checkReponse.length; i++) {
        if(checkReponse[i].checked){
            Reponsess =  checkReponse[i].value
        }
    }

    
    // console.log(' question check est ',Reponsess)
    // console.log(obj[0].Reponse_vrai)
    // console.log('reponse hhh est',obj['Reponse_vrai'])
    if(Reponsess === obj['Reponse_vrai']){
        console.log("good")
        ReponseTrue++
    }else{
        ReponseTrue
        console.log("not good")
    }
    console.log(ReponseTrue)
}


function first(t){
    Question = t.Question
    Reponse_1 = t.Reponse_1
    Reponse_2 = t.Reponse_2
    Reponse_3 = t.Reponse_3
    Reponse_4 = t.Reponse_4
    Reponse_vrai = t.Reponse_vrai
    document.querySelector('#Question').innerText=Question
   document.querySelector('#Reponse_1').value=Reponse_1
   document.querySelector('#Reponse_2').value=Reponse_2
   document.querySelector('#Reponse_3').value=Reponse_3
   document.querySelector('#Reponse_4').value=Reponse_4
   document.querySelector('.ul').children[0].children[2].innerText=Reponse_1
   document.querySelector('.ul').children[1].children[2].innerText=Reponse_2
   document.querySelector('.ul').children[2].children[2].innerText=Reponse_3
   document.querySelector('.ul').children[3].children[2].innerText=Reponse_4
}




let timeElm = document.querySelector('.time .duree');
let timer = function(x) {
 if(x === 0) {
    suivant.onclick()
    x=30
 }
 timeElm.innerHTML = x;

 return setTimeout(() => {timer(--x)}, 1000)
}

timer(30);


function resultat(nbr){
    jh = nbr+1

    if(indexQuestion === jh){
        console.log('fin')
        // console.log(indexQuestion)
        // console.log(jh)
        suivant.remove()
        timeElm.innerText=ReponseTrue
        console.log(ReponseTrue)
        document.querySelector('.resultat').innerText='Resultat'
    }
}