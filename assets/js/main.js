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
                // u=10
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
        console.log(count)
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
        else{
            // Reponsess = 'aucun reponse'
        }
    }

    console.log(' question '+nom+'check est ',Reponsess)
    listReponse.push(Reponsess)
    // console.log(obj[0].Reponse_vrai)
    // console.log('reponse hhh est',obj['Reponse_vrai'])
    if(Reponsess === obj['Reponse_vrai']){
        console.log("good")
        ReponseTrue++
        score+=100
    }else{
        ReponseTrue
        score
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


// var u=30;

// let p = setInterval(timer(30),1000)
// let timer = function(u) {
// if(u === 0) {
// suivant.onclick()
// u=30
// }else{
// clearInterval(p)
// }
// timeElm.innerHTML = u;

// return setTimeout(() => {timer(--u)}, 1000)
// }

let p = setInterval(a,1000)
function a(){
    u--
    timeElm.innerHTML =u+'s'
    if(u === 0) {
        if(indexQuestion<5){
            suivant.onclick()
            u=30
        }else{
            clearInterval(p)
        }
    }
}

// timer(30)



// var timeLeft = 10;
//     var elem =document.querySelector('.time .duree');
//     var timerId = setInterval(countdown, 1000);
//     function countdown() {
//     if (timeLeft == -1) {
//     clearTimeout(timerId);
//     } else {
//     elem.innerHTML = timeLeft + 's';
//     timeLeft--;
//     }
//     }





//     countdown()







function resultat(nbr){
    jh = nbr+1
    if(indexQuestion === jh){
        console.log('fin')
        reponsesV(listReponse)
        suivant.remove()
        timeElm.innerText=ReponseTrue
        timeElm.remove()
        console.log(ReponseTrue)
        console.log(score)
        document.querySelector('.resultat').innerText=nom+' '+prenom+' Resultat '+ReponseTrue
        document.querySelector('.TotalQuestion').innerText='Score '+score
        document.querySelector('.progressBar').children[2].classList.add('active')
        // document.querySelector('.test').style.display='block'

        // suivant.onclick = () =>{
        //     // document.querySelector('.test').style.display='none'
        //     // document.querySelector('.result').style.display='block'
        //     console.log('repondknfj')
        // }
        let btn = document.querySelector('.TotalQuestion')
        let btnSuivant = document.createElement('input')
        btnSuivant.type ='submit'
        btnSuivant.className = 'btn suivant'
        btnSuivant.value = 'result'
        btn.appendChild(btnSuivant)

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
    // u=10
    u=31
})


function reponsesV(obj){
    console.log(objGlobal[0].Reponse_vrai)
    for (let i = 0; i < obj.length; i++) {
        var li = document.createElement("li")
        if(obj[i] == null){
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
        document.querySelector('.votre ul').appendChild(li)
        var liRepnse = document.createElement("li")
        liRepnse.className = 'vrai'
        liRepnse.innerText = objGlobal[i].Reponse_vrai
        document.querySelector('.true ul').appendChild(liRepnse)
    }
    // for (let i = 0; i < obj.length; i++) {
    //     if(obj[i] === objGlobal[i].Reponse_vrai ){
    //         li.className = 'vrai'
    //         document.querySelector('.votre ul').appendChild(li)
    //     }else{
    //         li.className = 'faux'
    //         document.querySelector('.votre ul').appendChild(li)
    //     }
    // }
}