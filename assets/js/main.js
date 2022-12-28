var checks = document.querySelectorAll(".r");
var Reponses = document.querySelectorAll('input[type="radio"]');
let suivant = document.querySelector('.suivant');
let TotalQuestion = document.querySelector('.TotalQuestion .number');
var indexQuestion = 1;
var indexReponse=0;
var score = 0;
var ReponseTrue = 0

var u;
var nom
var prenom


let timeElm = document.querySelector('.time .duree');

var objGlobal

//numbre Queqtion
let numberq = document.querySelector('.Q .number');
// reponse check user 
var listReponse = []
async function getQuestion(){
    $.ajax({
        url:"/assets/js/data2.json",
        type:'GEt',
        success:function(data,status){
            let ObjQuestion = new Object(data);
            ObjQuestion = ObjQuestion.Questions.sort(() => Math.random() - 0.5)
            let countQuestion = ObjQuestion.length;
            nbr = countQuestion;
            TotalQuestion.innerHTML = nbr
            console.log(nbr)
            objGlobal=ObjQuestion
            //add first question in page
            first(ObjQuestion[0])
            //btn next question
            suivant.onclick = () =>{
                let test = ObjQuestion[indexQuestion];
                // setTimeout(() => {console.log("fdddddddddddddddddddd")}, 4000)
                reponses(ObjQuestion[indexReponse],nbr)
                
                indexQuestion++
                indexReponse++
                //vide title question 
                Questionn.innerHTML='';
                // vide les reponse
                document.querySelector(".ul").innerHTML='';
                //add Question
                AddQuestion(test,nbr)
                
                CountQuestion(indexQuestion)
                // resultat
                resultat(nbr)
                
                u=31
                document.querySelector('.prog').value+=100/nbr
            }
            // reponsesV(ObjQuestion,nbr)   
            
            async:false 
        }
        
    })
    
    
}
getQuestion()

    

function CountQuestion(nbr){
    numberq.innerHTML=nbr;
}

//titile Question
let Questionn = document.getElementById('Question'); 
//Reponse
let re = document.querySelector(".ul");

function AddQuestion(obj,count){
    if(indexQuestion <= count){
        let newQuestion = document.createTextNode(obj['Question']);
        //Append Question in quiz
        Questionn.append(newQuestion);
        console.log(count)
        for (let i =1;  i<5;i++) {
            var li = document.createElement("li")
            // let icons = document.createElement('i')
            let radio = document.createElement('input')
            let label = document.createElement('label')

            // icons.className = 'fa-solid fa-circle-question'

            radio.name = 'Reponse'
            radio.type = 'radio'
            radio.value = obj[`Reponse_${i}`];
            radio.id = `Reponse_${i}`

            label.id= 'idradio'
            label.className = 'r'
            label.htmlFor = `Reponse_${i}`
            label.innerHTML = obj[`Reponse_${i}`]

            // li.appendChild(icons)
            li.appendChild(radio)
            li.appendChild(label)
            re.appendChild(li)
        }
    }
}

let checkReponse = document.getElementsByName('Reponse')
function reponses(obj,nbr){
    let Reponsess;
    
    for (let i = 0; i<checkReponse.length; i++) {
        if(checkReponse[i].checked){
            Reponsess =  checkReponse[i].value
            // console.log(Reponsess)
        }
        else{
            // Reponsess = 'aucun reponse'
        }
    }

    // console.log(' question '+nom+'check est ',Reponsess)
    listReponse.push(Reponsess)
    if(Reponsess === obj['Reponse_vrai']){
        // console.log("good")
        ReponseTrue++
        score+=100
    }else{
        ReponseTrue
        score
        // console.log("not good")
    }
    // console.log(ReponseTrue)
    
    
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
   document.querySelector('.ul').children[0].children[1].innerText=Reponse_1
   document.querySelector('.ul').children[1].children[1].innerText=Reponse_2
   document.querySelector('.ul').children[2].children[1].innerText=Reponse_3
   document.querySelector('.ul').children[3].children[1].innerText=Reponse_4
}

let p = setInterval(a,1000)
function a(){
    u--
    timeElm.innerHTML = u+'s'
    if(u === 0) {
        if(indexQuestion<5){
            suivant.onclick()
            u=30
        }else{
            clearInterval(p)
        }
    }
}

function resultat(nbr){
    jh = nbr+1
    if(indexQuestion === jh){
        // console.log('fin')
        reponsesV(listReponse)
        suivant.remove()
        timeElm.innerText=ReponseTrue
        timeElm.remove()
        // console.log(ReponseTrue)
        // console.log(score)
        document.querySelector('.resultat').innerText=nom+' '+prenom+' Resultat '+ReponseTrue
        document.querySelector('.TotalQuestion').innerText='Score '+score
        document.querySelector('.progressBar').children[2].classList.add('active')
        document.querySelector('.prog').style.display='none'
        let btn = document.querySelector('.TotalQuestion')
        let btnSuivant = document.createElement('input')
        btnSuivant.type ='submit'
        btnSuivant.className = 'btn suivant'
        btnSuivant.value = 'result'
        btn.appendChild(btnSuivant)
        btn.style.width='50%'
        btn.style.display='flex'
        btn.style.justifyContent='space-around'
        btnSuivant.onclick = ()=>{
            document.querySelector('.quiz').style.display='none'
            document.querySelector('.result').style.display='block'
        }

    }
}


let start = document.getElementById('start')

start.addEventListener('click',function(){
    document.querySelector('.displayStart').style.display='none'
    document.querySelector('.quiz').style.display='block'
    document.querySelector('.progressBar').children[1].classList.add('active')
    nom = document.querySelector('#nom').value
    prenom = document.querySelector('#prenom').value
    u=31
    document.querySelector('.prog').value+=100/nbr
    

})


function reponsesV(obj){
    for (let i = 0; i < obj.length; i++) {
        nbr=i+1
        var ul = document.createElement('ul')
        ul.className='hy'
        var nbQuestion = document.createElement('div')
        nbQuestion.innerText ='Question '+nbr
        var li = document.createElement("li")
        var licorrecte = document.createElement("li")
        var spanvotre = document.createElement('span')
        var spancorrecte = document.createElement('span')
        spanvotre.className='msg'
        spancorrecte.className='msg'
        licorrecte.className='vrai'
        var div = document.createElement('div')
        
        // console.log('ob ',objGlobal[i].Reponse_vrai)
        // console.log('liste ',obj[i])
        if(obj[i] == null){
            // span.innerText=nbr
            li.innerText='aucun reponse'
            li.className = 'faux'
        }else{
            li.innerText=obj[i]
            if(obj[i] === objGlobal[i].Reponse_vrai ){
                
                console.log('yes')
                li.className = 'vrai'
            }else{
                console.log('no')
                li.className = 'faux'
            }
        }
        ul.appendChild(nbQuestion)
        spanvotre.innerText='votre réponse'
        ul.appendChild(spanvotre)
        ul.appendChild(li)
        spancorrecte.innerText='réponse correcte'
        licorrecte.innerText=objGlobal[i].Reponse_vrai
        ul.appendChild(spancorrecte)
        ul.appendChild(licorrecte)
        div.innerText=objGlobal[i].explication
        ul.appendChild(div)
        document.querySelector('.questionResult').appendChild(ul)
    }
}



