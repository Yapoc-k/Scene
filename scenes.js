

if(window.innerHeight > window.innerWidth){

    const rotateGif = document.createElement("img");
    rotateGif.setAttribute("id", "gif");
    rotateGif.setAttribute("src", "./scenes/rotate.gif");
    document.getElementById("container").appendChild(rotateGif);
};

const scene = document.getElementById("scene");

//Fond de la scène
scene.style.background = "url('./scenes/background.png') no-repeat";

//Création de l'objet Valise
const luggage = document.createElement("img");
luggage.setAttribute("id", "luggage");
luggage.setAttribute("class", "zoom");
luggage.setAttribute("src", "./scenes/luggage.png");

//Création de l'element Passport
const passport = document.createElement("img");
passport.setAttribute("id", "passport");
passport.setAttribute("class", "zoom");
passport.setAttribute("src", "./scenes/passport.png");

//Création de l'element Suitcase
const suitcase = document.createElement("img");
suitcase.setAttribute("id", "suitcase");
suitcase.setAttribute("class", "zoom");
suitcase.setAttribute("src", "./scenes/suitcase.png");

//Création de l'element Airplane
const airplane = document.createElement("img");
airplane.setAttribute("id", "airplane");
airplane.setAttribute("class", "zoom");
airplane.setAttribute("src", "./scenes/airplane.png");

//Création de l'element Airplane
const hostess = document.createElement("img");
hostess.setAttribute("id", "hostess");
hostess.setAttribute("class", "zoom");
hostess.setAttribute("src", "./scenes/hostess.png");

//Ajouts des objets dans le DOM
const luggageContainer = document.createElement("div");
scene.appendChild(luggageContainer).appendChild(luggage);

const passportContainer = document.createElement("div");
scene.appendChild(passportContainer).appendChild(passport);

const suitcaseContainer = document.createElement("div");
scene.appendChild(suitcaseContainer).appendChild(suitcase);

const airplaneContainer = document.createElement("div");
scene.appendChild(airplaneContainer).appendChild(airplane);

const hostessContainer = document.createElement("div");
scene.appendChild(hostessContainer).appendChild(hostess);

//Booléens

var luggageBool = false;
var passportBool = false;
var suitcaseBool = false;
var airplaneBool = false;

//Clicks

luggage.addEventListener("click", function () {
    blocText("luggageText", "A luggage - <i> Une valise </i>");
    luggageBool = true;
    help();
});
passport.addEventListener("click", function () {
    blocText("passportText", "A passport - <i> Un passeport </i>");
    passportBool = true;
    help();
});
suitcase.addEventListener("click", function () {
    blocText("suitcaseText", "A suitcase -  <i> Un attaché-case </i>");
    suitcaseBool = true;
    help();
});
airplane.addEventListener("click", function () {
    blocText("airplaneText", "An airplane - <i> Un avion </i> ");
    airplaneBool = true;
    help();
});
hostess.addEventListener("click", function() {
    blocConversation();
    help();
});

//Texte des descriptions
const textBloc = document.createElement("div");
textBloc.setAttribute("class", "bloc");
scene.appendChild(textBloc);

//Texte
const conversationBloc = document.createElement("div");
conversationBloc.setAttribute("class", "bloc");
scene.appendChild(conversationBloc);
conversationBloc.addEventListener("click", blocConversation);

//Fonction pour afficher le bloc texte
function blocText (id, text){
    if (textBloc.id === id) {
        textBloc.style.display = "none";
        textBloc.setAttribute("id", "");
    } else {
        textBloc.style.display = "block";
        textBloc.setAttribute("id", id);
        textBloc.innerHTML = text;
    }

    if (conversationBloc.style.display === "block") {
        conversationBloc.style.display = "none";
        i = 0;
    }
}









//Fonction pour afficher le bloc conversation
function blocConversation() {

    if (i !== textConversation.length) {

        if (luggageBool === true && passportBool === true && suitcaseBool === true && airplaneBool === true) {
            conversationBloc.style.display = "block";
            conversationBloc.innerHTML = textConversation[i];
            i++;
        } else {
            conversationBloc.style.display = "block";
            conversationBloc.innerHTML = "Revenez me voir lorsque vous aurez exploré tout les objets de cette scène";
        }
    }

    if (textBloc.style.display === "block") {
        textBloc.style.display = "none";
    }
}
var i = 0;

var textConversation = [
    "Quel est le mot pour \"Avion\" ? <br>" +
    "<span class='answer'>Luggage</span> <input type='radio' name='question' id='r1' class='form-radio'> " +
    "<span class='answer'>Passport</span>  <input type='radio' name='question' id='r2' class='form-radio'> " +
    "<span class='answer'>Suitcase</span>  <input type='radio' name='question' id='r3' class='form-radio'>" +
    "<span class='answer'>Airplane</span>  <input type='radio' name='question' id='r4' class='form-radio'> " +
    "<input type='submit' class='btn valider'  value='Valider' onClick='validerQ1()'> "

];



function validerQ1() {
    if (document.getElementById("r4").checked){
        i = 0;
        textConversation = [
            "Well Done <span class='info'>Cliquez ici pour continuer</span>",
            "Quel est le mot pour 'Valise' ? <br>" +
            "<span class='answer'>Luggage</span> <input type='radio' name='question' id='r1' class='form-radio'> " +
            "<span class='answer'>Passport</span>  <input type='radio' name='question' id='r2' class='form-radio'> " +
            "<span class='answer'>Suitcase</span>  <input type='radio' name='question' id='r3' class='form-radio'>" +
            "<span class='answer'>Airplane</span>  <input type='radio' name='question' id='r4' class='form-radio'> " +
            "<input type='submit' class='btn valider' value='Valider' onclick='validerQ2()'>"
        ];

    } else {
        conversationBloc.innerHTML = "Try again <span class='info'>Vérifiez vos connaissances en cliquant sur les objets</span>";
    }
}



function validerQ2() {
    if (document.getElementById("r1").checked){
        i = 0;
        textConversation = [
            "Well done <span class='info'>Cliquez ici pour continuer</span>",
            "Quel est le mot pour 'Passeport' ? <br>" +
            "<span class='answer'>Luggage</span> <input type='radio' name='question' id='r1' class='form-radio'> " +
            "<span class='answer'>Passport</span>  <input type='radio' name='question' id='r2' class='form-radio'> " +
            "<span class='answer'>Suitcase</span>  <input type='radio' name='question' id='r3' class='form-radio'>" +
            "<span class='answer'>Airplane</span>  <input type='radio' name='question' id='r4' class='form-radio'> " +
            "<input type='submit' class='btn valider'  value='Valider' onClick='validerQ3()'> "

        ];

    } else {
        conversationBloc.innerHTML = "Try again <span class='info'>Vérifiez vos connaissances en cliquant sur les objets</span>";
    }
}


function validerQ3() {
    if (document.getElementById("r2").checked){
        i = 0;
        textConversation = [
            "Well done <span class='info'>Cliquez ici pour continuer</span>",
            "Quel est le mot pour 'Attaché-Case' ? <br>" +
            "<span class='answer'>Luggage</span> <input type='radio' name='question' id='r1' class='form-radio'> " +
            "<span class='answer'>Passport</span>  <input type='radio' name='question' id='r2' class='form-radio'> " +
            "<span class='answer'>Suitcase</span>  <input type='radio' name='question' id='r3' class='form-radio'>" +
            "<span class='answer'>Airplane</span>  <input type='radio' name='question' id='r4' class='form-radio'> " +
            "<input type='submit' class='btn valider'  value='Valider' onClick='validerQ4()'> "

        ];

    } else {
        conversationBloc.innerHTML = "Try again <span class='info'>Vérifiez vos connaissances en cliquant sur les objets</span>";
    }
}

function validerQ4() {
    if (document.getElementById("r3").checked){
        i = 0;
        textConversation = [
            "Well done !"
        ];

        swal({
            title: 'Well done !',
            html:
              'You answered all the questions, go to the next scene !' +
              '<span class="info">Vous avez répondu à toutes les questions, allez à la prochaine scène</span>'
          })

    } else {
        conversationBloc.innerHTML = "Try again <span class='info'>Vérifiez vos connaissances en cliquant sur les objets</span>";
    }
}

swal({
    title: 'Instructions',
    html:
      'Find all clickable elements and answer the hostess questions. ' +
      '<span class="info">Trouvez les éléments cliquables de la scène, ensuite, répondez aux questions de l\'hôtesse</span>'
})

thelp = setTimeout( function () {
    swal({
        title: 'Need help?',
        html:
          'Trouvez les 4 éléments cliquables en survolant votre curseur sur les objets de la scène, essayez de cliquez sur une valise ou un avion ! </br>'+
          'Ensuite, cliquez sur l\'hôtesse au centre de la scène pour vérifier vos connaissances'
      })
}, 60000)

function help() {

    clearTimeout(thelp)
    
    thelp = setTimeout( function () {
        swal({
            title: 'Need help?',
            html:
              'Trouvez les 4 éléments cliquables en survolant votre curseur sur les objets de la scène, essayez de cliquez sur une valise ou un avion ! </br>'+
              'Ensuite, cliquez sur l\'hôtesse au centre de la scène pour vérifier vos connaissances'
          })
    }, 60000)
}

help();