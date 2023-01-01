var checks = document.querySelectorAll(".r");
var Reponses = document.querySelectorAll('input[type="radio"]');
let suivant = document.querySelector('.suivant');
let TotalQuestion = document.querySelector('.TotalQuestion .number');
var indexQuestion = 1;
var indexReponse=0;
var score = 0;
var ReponseTrue = 0
var dt
var u;
var nom
var prenom
var correct_answer_id = []
function arrangCorrect(){
    corr
}
let timeElm = document.querySelector('.time .duree');



//numbre Queqtion
let numberq = document.querySelector('.Q .number');

    
async function getQuestion(){
    $.post("../Controllers/RequestHandler.php",
    {   
        questions:true
    },  
     function(data,status){
        ObjectGlobal = JSON.parse(data).sort(() => Math.random() - 0.5)
        let count = ObjectGlobal.length
        first(ObjectGlobal[0])
        
        suivant.onclick = () =>{

            let test = ObjectGlobal[indexQuestion];

            reponses(ObjectGlobal[indexReponse])
            
            indexQuestion++
            indexReponse++

            //vide title question 
            Questionn.innerHTML='';
            // vide les reponse
            document.querySelector(".ul").innerHTML='';
            //add Question
            AddQuestion(test,count)
            
            CountQuestion(indexQuestion)
            // resultat
            resultat(count)

            // reponsesV(ObjectGlobal)
            
            u=31
            if(indexQuestion>count){
                $.post("../Controllers/RequestHandler.php",
                {   
                    correct:true,
                    // global: false,
                    // async:false,
                },  
                function(data,status){
                    data = JSON.parse(data)
                    reponsesV(ObjectGlobal,data)
                })
            }
            // document.querySelector('.prog').value+=100/nbr
            // reponses(ObjectGlobal)
        }
    }
   )
}

getQuestion();


function CountQuestion(nbr){
    numberq.innerHTML=nbr;
}

//titile Question
let Questionn = document.getElementById('Question'); 
//Reponse
let re = document.querySelector(".ul");

function AddQuestion(obj,count){
    if(indexQuestion <= count){
        let newQuestion = document.createTextNode(obj.question);
        //Append Question in quiz
        Questionn.append(newQuestion);
        for (let i =1; i<5;i++) {
            var li = document.createElement("li")
            // let icons = document.createElement('i')
            let radio = document.createElement('input')
            let label = document.createElement('label')

            // icons.className = 'fa-solid fa-circle-question'

            radio.name = 'Reponse'
            radio.type = 'radio'
            radio.value = obj[`id_Reponse_${i}`];
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
let arrayRepons = []
let checkReponse = document.getElementsByName('Reponse')
function reponses(obj){
    
    let Reponsess;
    
    for (let i = 0; i<checkReponse.length; i++) {
        if(checkReponse[i].checked){
            Reponsess =  checkReponse[i].value
            // console.log(Reponsess)
            
        }
        else{
            // Reponsess = 'aucun'
        }
    }
    // $.ajax({
    //     url: "../Controllers/res.php",
    //     method: "POST",
    //     data: {
    //         Reponsess
    //     },
    //     success: function(data){
    //       if(data=='vrai'){
    //         score+=100
    //       }else{
    //         score
    //       }
    //     }
    // });
    
    arrayRepons.push(Reponsess)
}

function first(t){
    Question = t.question
    Reponse_1 = t.Reponse_1
    Reponse_2 = t.Reponse_2
    Reponse_3 = t.Reponse_3
    Reponse_4 = t.Reponse_4
    // Reponse_vrai = t.Reponse_vrai
    document.querySelector('#Question').innerText=Question
   document.querySelector('#Reponse_1').value=t.id_Reponse_1
   document.querySelector('#Reponse_2').value=t.id_Reponse_2
   document.querySelector('#Reponse_3').value=t.id_Reponse_3
   document.querySelector('#Reponse_4').value=t.id_Reponse_4
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
    // console.log(arrayQuestion)
    // console.log(arrayRepons)
    if(indexQuestion === jh){
        suivant.remove()
        timeElm.innerText=ReponseTrue
        timeElm.remove()
        // send info user
        // $.ajax({
        //     url: "../Controllers/res.php",
        //     method: "POST",
        //     data: {
        //         arrayRepons
        //     },
        //     success: function(data){
        //     //   if(data=='vrai'){
        //     //     score+=100
        //     //   }else{
        //     //     score
        //     //   }
        //     }
        // });
        
        document.querySelector('.resultat').innerText=nom+' '+prenom
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
    // document.querySelector('.prog').value+=100/nbr
    

})


function reponsesV(obj,correct){
    for (let i = 0; i < arrayRepons.length; i++) {
        $.post("../Controllers/RequestHandler.php",
        {   
            id:arrayRepons[i],
        },  
        function(data,status){
            data = JSON.parse(data)
            console.log(data)

            if(arrayRepons.includes(''+correct[i]['id'])){
                document.querySelector('.questionResult').innerHTML+=`<ul class="hy">
                <div>${data[0]['questions']}</div>
                <span class="msg">votre réponse</span>
                <li class="vrai">${data[0]['correct']}</li>
                <span class="msg">explication</span>
                <div>${data[0]['exp']}</div>
                </ul>`;
            }else{
                document.querySelector('.questionResult').innerHTML+=`<ul class="hy">
                <div>${data[0]['questions']}</div>
                <span class="msg">votre réponse</span>
                <li class="faux">${data[0]['correct']}</li>
                <span class="msg">explication</span>
                <div>${data[0]['exp']}</div>
                </ul>`;
            }
            
        })
    }
    
   
   
    // for (let i = 0; i < correct.length; i++) {
    //     console.log(correct[i]['id'])
    //     if(arrayRepons[i] == null ){
    //     }else{
    //         if(arrayRepons.includes(''+correct[i]['id'])){
    //             document.querySelector('.questionResult').innerHTML+=`<ul class="hy">
    //             <div>${data[0]['questions']}</div>
    //             <span class="msg">votre réponse</span>
    //             <li class="vrai">${data[0]['correct']}</li>
    //             <span class="msg">explication</span>
    //             <div>${data[0]['exp']}</div>
    //             </ul>`;
    //         }else{
    //             document.querySelector('.questionResult').innerHTML+=`<ul class="hy">
    //             <div>${data[0]['questions']}</div>
    //             <span class="msg">votre réponse</span>
    //             <li class="faux">${data[0]['correct']}</li>
    //             <span class="msg">explication</span>
    //             <div>${data[0]['exp']}</div>
    //             </ul>`;
    //         }
            
    //     }
    // }
    
}

