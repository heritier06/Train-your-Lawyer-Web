<!-- <script>
  import AOS from "aos";
  AOS.init();
</script> -->

<template>
  <div class="Landing">
        <div class="nav-bar">
            <img src="../assets/logo.png" class="logo">
            <a class="name" href="#">Legal Cours</a>
            <div class="vertically"></div>
            <a class="accueil" @click="$router.push('/')">Accueil</a>
            <a class="cours" @click="$router.push('/Lesson')">Cours</a>
            <a class="article" href="#">Article</a>
            <a class="packs" href="#">Nos Packs</a>
            <button class="btn-try" v-if="status != 'online'">Essayer</button>
            <button class="btn-connect" @click="$router.push('/Login')" v-if="status != 'online'">Connexion</button>
            <img src="../assets/profil.png" class="profil" v-if="status === 'online'">
            <div class="vertically-2"></div>
        </div>
        <div class="description">
          <p>La plateforme qui vous accompagnes dans vos  <span style="color: #E98B1E">études de droit</span>,</p>
          <p >et vous défends contre les examens et les contrôles.</p>
          <p class="text-2xl">Des centaines de contenus pédagogiques, créé par des enseignants,</p>
          <p class="text-2xl">qui t’aident à comprendre, apprendre et à t’entraîner dans plus</p> 
          <p class="text-2xl">de 18 matières.</p>
        </div>
        <div class="blob">
          <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
          </svg>
        </div>
        <div>
          <img src="../assets/learn.png" class="learn">
        </div>
        <button class="mt-2 btn-continue" @click="$router.push('/Lesson')">Je teste</button>
        <div class="flex flex-col content">
          <div class="first">
            <p class="font-bold md:text-center cours-text" data-aos="flip-up">
              Train Your Lawyer contient une multitude<br>de cours certifiés, des fiches de révision, de flash cards, <br> de mind map ainsi des QCM de la licence 1 en licence 3<br>vous permettant d’approfondir vos acquis et connaissances.
            </p>
            <div class="brd-1">
              <img src="../assets/cours-ill.png" data-aos="fade-up-right">
            </div>
          </div>
          <div class="second">
            <div class="brd-2">
              <img src="../assets/train.png" data-aos="fade-up-left">
            </div>
            <p class="font-bold md:text-center train-text" data-aos="flip-up">
              Elle dispose également d'exercices corrigés<br> et des cas pratiques <br>vous permettant de consolider vos connaissances.
            </p>
          </div>
          <div class="fifth">
            <p class="font-bold md:text-center article-text"  data-aos="zoom-in">
              Aussi des travaux dirigés menés<br>par des professeurs certifiés et des étudiants ayant déjà finis <br>et désirant d'aider leurs camarades en cours d'études. 
            </p>
            <div class="brd-3">
              <img src="../assets/article-ill.png" data-aos="fade-down-right">
            </div>
          </div>
          <div class="four">
            <div class="brd-4">
              <img src="../assets/td-fill.png" data-aos="fade-down-right">
            </div>
            <p class="font-bold md:text-center td-text"  data-aos="zoom-out">
              Aussi des travaux dirigés menés<br>par des professeurs certifiés et des étudiants ayant déjà finis <br>et désirant d'aider leurs camarades en cours d'études. 
            </p>
          </div>
          <div class="third">
            <p class="font-bold md:text-center pack-text" data-aos="zoom-out-down">
              Nous disposons de deux packs l'un premium qui vous propose <br> un accès restreintx et l'autre pro qui vous donne <br> un accès illimité aux contenus de la plateforme.
            </p>
            <div class="brd-5">
              <img src="../assets/pack-ill.png" data-aos="fade-down-right">
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="waves">
              <div class="wave" id="wave1"></div>
              <div class="wave" id="wave2"></div>
              <div class="wave" id="wave3"></div>
              <div class="wave" id="wave4"></div>
            </div>
          <div class="about-col">
              <h3 class="underline underline-offset-8 font-bold">À PROPOS DE NOUS</h3>
              <p class="text-left ">
                  Train your lawyer est une plateforme de soutien scolaire constitutée de fiches de cours, flash cards, mind map et surtout 
                  d'un simulateur de procès qui pourront permettre aux étudiants en droit de mieux comprendre leurs cours et de faire des 
                  exercices, travaux dirigés et des exercices qui les mettent en situation de vie active
              </p>
              </div>
          <ul class="social-icon">
              <li class="social-icon__item"><a class="social-icon__link" href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a></li>
              <li class="social-icon__item"><a class="social-icon__link" href="#">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a></li>
              <li class="social-icon__item"><a class="social-icon__link" href="#">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a></li>
              <li class="social-icon__item"><a class="social-icon__link" href="#">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a></li>
            </ul>
            <ul class="menu">
              <li class="menu__item"><a class="menu__link" href="#">Accueil</a></li>
              <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
              <li class="menu__item"><a class="menu__link" href="#">Equipe</a></li>
              <li class="menu__item"><a class="menu__link" href="#">Contactez nous</a></li>
            </ul>
            <p class="text-center">&copy;2022 Train Your Lawyer | Tous les droits sont réservé</p>
        </footer> 
        <!-- <img class= "scale-50" src="../assets/cours-ill.png" data-aos="fade-up">
        <p class="font-bold md:text-center cours-text">
          Train Your Lawyer contient une multitude<br>de cours certifiés, des fiches de révision, de flash cards, <br> de mind map ainsi des QCM de la licence 1 en licence 3<br>vous permettant d’approfondir vos acquis et connaissances.
        </p> -->
        <!-- <img class="train-ill scale-50" src="../assets/train.png">
        <p class="font-bold md:text-center train-text">
          Elle dispose également d'exercices corrigés<br> et des cas pratiques <br>vous permettant de consolider vos connaissances.
        </p>
        <img class="article-ill scale-50" src="../assets/article-ill.png">
        <p class="font-bold md:text-center article-text">
          Vous retrouverez également<br>des artciles qui pourront répondres à vos differentes<br> questions dans le domaine du droit et vous informer <br>de nouvelles lois sorties au Bénin ainsi que dans l'UEMOA.
        </p>
        <img class="td-ill scale=50" src="../assets/td-fill.png">
        <p class="font-bold md:text-center td-text">
          Aussi des travaux dirigés menés<br>par des professeurs certifiés et des étudiants ayant déjà finis <br>et désirant d'aider leurs camarades en cours d'études. 
        </p>
        <img class="pack-ill scale-50" src="../assets/pack-ill.png">
        <p class="font-bold md:text-center pack-text">
          Nous disposons de deux packs l'un premium qui vous propose <br> un accès restreintx et l'autre pro qui vous donne <br> un accès illimité aux contenus de la plateforme.
        </p> -->
        <!-- <footer class="footer">
          <div class="waves">
              <div class="wave" id="wave1"></div>
              <div class="wave" id="wave2"></div>
              <div class="wave" id="wave3"></div>
              <div class="wave" id="wave4"></div>
            </div>
          <div class="about-col">
              <h3 class="underline underline-offset-8 font-bold">À PROPOS DE NOUS</h3>
              <p class="text-left ">
                  Train your lawyer est une plateforme de soutien scolaire constitutée de fiches de cours, flash cards, mind map et surtout 
                  d'un simulateur de procès qui pourront permettre aux étudiants en droit de mieux comprendre leurs cours et de faire des 
                  exercices, travaux dirigés et des exercices qui les mettent en situation de vie active
              </p>
              </div>
          <ul class="social-icon">
              <li class="social-icon__item"><a class="social-icon__link" href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a></li>
              <li class="social-icon__item"><a class="social-icon__link" href="#">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a></li>
              <li class="social-icon__item"><a class="social-icon__link" href="#">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a></li>
              <li class="social-icon__item"><a class="social-icon__link" href="#">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a></li>
            </ul>
            <ul class="menu">
              <li class="menu__item"><a class="menu__link" href="#">Accueil</a></li>
              <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
              <li class="menu__item"><a class="menu__link" href="#">Equipe</a></li>
              <li class="menu__item"><a class="menu__link" href="#">Contactez nous</a></li>
             </ul>
            <p class="text-center">&copy;2022 Train Your Lawyer | Tous les droits sont réservé</p>
      </footer> -->
</div>

</template>

<script>
import AOS from "aos";
  AOS.init();
export default {
  data() {
    return {
      status: localStorage.getItem('isLog')
    };
    },
    methods: {
    }
  }
</script>

<style scoped>

.cours-text, .td-text, .pack-text, .train-text, .article-text{
  position: relative;
  top: 250px;
}
.train-text, .td-text{
  left: 200px;
}
.cours-text, .pack-text, .article-text{
  left: -100px;
}
.content{
  margin-top: 55%;
  width: 100%;
}
.brd-1, .brd-2, .brd-3, .brd-4, .brd-5{
  height: 50%;
  width: 60%;
}
.first, .second, .third, .four, .fifth{
  display: inline-flex;
  width: 70%;
  height: 50%;
  border-radius: 10px;
  margin-bottom: 10%;
}
.first, .third, .fifth{
  position: relative;
  left: 28%;
}
.second, .four{
  position: relative;
  left: 5%;
}
.wave {
position: absolute;
top: -100px;
left: 0;
width: 100%;
height: 100px;
background: url("../assets/wave.png");
background-size: 1000px 100px;
}

.wave#wave1 {
z-index: 1000;
opacity: 1;
bottom: 0;
animation: animateWaves 4s linear infinite;
}

.wave#wave2 {
z-index: 999;
opacity: 0.5;
bottom: 10px;
animation: animate 4s linear infinite !important;
}

.wave#wave3 {
z-index: 1000;
opacity: 0.2;
bottom: 15px;
animation: animateWaves 3s linear infinite;
}

.wave#wave4 {
z-index: 999;
opacity: 0.7;
bottom: 20px;
animation: animate 3s linear infinite;
}

@keyframes animateWaves {
0% {
  background-position-x: 1000px;
}
100% {
  background-positon-x: 0px;
}
}

@keyframes animate {
0% {
  background-position-x: -1000px;
}
100% {
  background-positon-x: 0px;
}
}
.about-col{
  width: 40%;
}
.footer p {
  color: #000;
  margin: 15px 0 10px 0;
  font-size: 1rem;
  font-weight: 300;
}
.social-icon, .menu {
position: relative;
display: flex;
justify-content: center;
align-items: center;
margin: 10px 0;
flex-wrap: wrap;
}

.social-icon__item, .menu__item {
list-style: none;
}

.social-icon__link {
font-size: 2rem;
color: #000;
margin: 0 10px;
display: inline-block;
transition: 0.5s;
}
.social-icon__link:hover {
transform: translateY(-10px);
}

.menu__link {
font-size: 1.2rem;
color: #000;
margin: 0 10px;
display: inline-block;
transition: 0.5s;
text-decoration: none;
opacity: 0.75;
font-weight: 300;
}

.menu__link:hover {
font-weight: bold;
}
.footer {
  margin-bottom: 0%;
  position: relative;
  box-shadow: #000;
  background-color: #eea55b;
  width: 100%;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.blob {
position: absolute;
top: 0;
left: 0;
fill: #eea55b;
width: 500px;
z-index: -1;
animation: move 10s ease-in-out infinite;
transform-origin: 50% 50%;
}

@keyframes move {
0%   { transform: scale(1)   translate(10px, -30px); }
38%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
40%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
78%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
80%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
100% { transform: scale(1)   translate(10px, -30px); }
}
.description{
  margin-top: 7%;
  margin-left: 0%;
}
.description p:nth-child(1) {
font-size: 25px;
white-space: nowrap;
overflow: hidden;
width: 730px;
animation: type 4s steps(40,end) forwards;
}

.description p:nth-child(2) {
opacity: 0;
font-size: 25px;
white-space: nowrap;
overflow: hidden;
width: 620px;
animation: type-2 4.2s steps(40,end) 4s forwards;
}

@keyframes type-2 {
  0% {
    width: 0;
    opacity: 0;
  }
  1%, 99%{
      opacity: 1;
    border-right: 1px solid orange;
  }
  100%{
      opacity: 1;
    border-right: 1px solid orange;
  }
}

@keyframes type {
0% {
  width: 0;
}
1%, 99%{
  border-right: 1px solid orange;
}
100%{
  border-right: none;
}
}

.book{
  position: absolute;
  height: 60%;
  width: 40%;
  margin-left: 60%;
  top: 155%;
}
.another{
  position: absolute;
  top: 165%;
  margin-left: 4%;
  width: 450px;
  height: auto;
}

.check-icon{
  position: absolute;
  height: 30%;
}
.check-icon2{
  position: absolute;
  top: 93%;
  height: 30%;
}
.check1{
  font-size: smaller;
  margin-left: 18%;
  top: 30%;
}
.check2{
  font-size: smaller;
  margin-left: 18%;
  top: 93%;
}
.lexique{
  top: 10%;
  font-weight: bolder;
}
.optimise{
  position: absolute;
  top: 18%;
  margin-left: 22%;
  font-weight: bolder;
  font-size: larger;
}
.dot{
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: inline-block;
  background-color: #E98B1E;
  margin-left: 4%;
}


.user_icon{
  position: absolute;
  height: 27%;
  margin-left: 8%;
}
.line{
  border:0.5px solid lightslategrey;
}

.user{
  margin-left: 20%;
  font-size: smaller;

}
.feedback{
  position: absolute;
  top: 105%;
  margin-left: 55%;
  height: auto + 20%;
}
.feed {
  position: absolute;
  top: 112%;
  margin-left: 3%;
  width: 50%;
  height:auto;
}
.stars{
  position: absolute;
  height: 130%;
  margin-left: 0.1%;
}
.number {
  position: absolute;
  font-weight: bold;
  top: 105%;
  font-size: 145%;
  margin-left: 3%;
}
.btn-continue {
  position: absolute;
  top: 55%;
  left: 5%;
  color: white;
  font-weight: bold;
  font-size: large;
  padding: 1.5%;
  padding-left: 9%;
  padding-right: 9%;
  background-color: #E98B1E;
  border-radius: 15px;
}
.learn {
  position: absolute;
  top: 30%;
  left: 60%;
  height: 60%;
  animation: fadeInAnimation ease 4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes fadeInAnimation {
  0% {
      opacity: 0;
      top: 40%;
  }
  100% {
      opacity: 1;
  }
}

.description {
  position: absolute;
  top: 150px;
  left: 80px;
  font-family: Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
  font-size: 30px;
  width: 70%;
}
.accueil{
  position: absolute;
  top: 20px;
  left: 280px;
  font-size: 18px;
}

.cours{
  position: absolute;
  top: 20px;
  left: 470px;
  font-size: 18px;
}
.article{
  position: absolute;
  top: 20px;
  left: 650px;
  font-size: 18px;
}
.packs{
  position: absolute;
  top: 20px;
  left: 800px;
  font-size: 18px;
}
.acceuil:hover, .cours:hover, .article:hover, .packs:hover {
  font-weight: bold;
}
.btn-try{
  position: absolute;
  top: 10px;
  left: 1000px;
  padding: 1%;
  padding-left: 2%;
  padding-right: 2%;
  background-color:#E3E3E3;
  border-radius: 15px;
}
.btn-try:hover {
  background: #E98B1E;
  color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 5px #E98B1E,
              0 0 25px #E98B1E,
              0 0 50px #E98B1E,
              0 0 100px #E98B1E;
}
.btn-connect{
  position: absolute;
  top: 10px;
  left: 1200px;
  color: white;
  padding: 1%;
  padding-left: 2%;
  padding-right: 2%;
  background-color: #E98B1E;
  border-radius: 15px;
}
.btn-connect:hover {
  background: #E98B1E;
  color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 5px #E98B1E,
              0 0 25px #E98B1E,
              0 0 50px #E98B1E,
              0 0 100px #E98B1E;
}
.vertically-2 {
  border-left: 1px solid black;
  position: absolute;
  left: 1160px;
  top: 20px;
  height: 30px;
}
.nav-bar {
  position: sticky;
  /*background-color: rgb(248, 0, 0); */
  margin-left: 1.5%;
  margin-right: 0%;
  height: 70px;
  width: 1400px;
  border-radius: 10px 10px;
  box-shadow: 5px 5px 18px grey;
  border: 0px solid;
}
.logo {
  height: 50px;
  position: absolute;
  top: 10px;
  left: 30px;
}
.profil {
  height: 65px;
  position: absolute;
  top: 1px;
  left: 1200px;

  padding: 1%;
  padding-left: 2%;
  padding-right: 2%;
  border-radius: 15px;
}
a.name{
  position: absolute;
  top: 25px;
  left: 75px;
  font-weight: bold;
}
.vertically {
  border-left: 1px solid black;
  position: absolute;
  left: 230px;
  top: 20px;
  height: 30px;
}
a, button {
  cursor: pointer;
}
</style>