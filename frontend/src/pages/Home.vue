<template>
    <div class="h-screen Landing">
        <div class="nav-bar">
            <img src="../assets/logo.png" class="logo">
            <a class="name" href="#">Legal Cours</a>
            <div class="vertically"></div>
            <a class="accueil" @click="$router.push('/')">Accueil</a>
            <a class="cours" @click="$router.push('/Lesson')">Cours</a>
            <a class="article" href="#">Article</a>
            <a class="packs" href="#">Nos Packs</a>
            <button class="btn-try">Essayer</button>
            <button class="btn-connect" @click="$router.push('/Login')">Connexion</button>
            <div class="vertically-2"></div>
        </div>
        <div class="blob">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
            </svg>
          </div>
        <div class="description">
                <p>La plateforme qui vous accompagnes dans vos  <span style="color: #7cc5d6">études de droit</span>,</p>
                <p >et vous défends contre les examens et les contrôles.</p>
                <p class="text-2xl">Des milliers de contenus pédagogiques, créé par des enseignants,</p>
                <p class="text-2xl">qui t’aident à comprendre, apprendre et à t’entraîner dans plus</p> 
                <p class="text-2xl">de 18 matières.</p>
        </div>
        <img src="../assets/learn.png" class="learn">
        <button class="mt-2 btn-continue" @click="$router.push('/Lesson')">Je teste</button>
        <div class="cours-opt">
        </div>
        <div class="quiz">
        </div>
        <div class="mind-map">
        </div>
        <div class="ficher-revision">
        </div>
        <div class="flash-cards">
        </div>
        <div class="video-cours">
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
              <p class="text-center">&copy;2022 Legal Cours | Tous les droits sont réservé</p>
        </footer>
</div>
</template>

<style scoped>

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
    position: absolute;
    top: 230%;
    box-shadow: #000;
    background-color: #539BAB;
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
  fill: #539BAB;
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
      border-right: 1px solid #7cc5d6;
    }
    100%{
        opacity: 1;
      border-right: 1px solid #7cc5d6;
    }
  }

@keyframes type {
  0% {
    width: 0;
  }
  1%, 99%{
    border-right: 1px solid #7cc5d6;
  }
  100%{
    border-right: none;
  }
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
    background-color: #7cc5d6;
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
.accueil:hover, .cours:hover, .article:hover, .packs:hover {
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
    background: #7cc5d6;
    color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 5px #7cc5d6,
                0 0 25px #7cc5d6,
                0 0 50px #7cc5d6,
                0 0 100px #7cc5d6;
}
.btn-connect{
    position: absolute;
    top: 10px;
    left: 1200px;
    color: white;
    padding: 1%;
    padding-left: 2%;
    padding-right: 2%;
    background-color: #7cc5d6;
    border-radius: 15px;
}
.btn-connect:hover {
    background: #7cc5d6;
    color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 5px #7cc5d6,
                0 0 25px #7cc5d6,
                0 0 50px #7cc5d6,
                0 0 100px #7cc5d6;
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
</style>