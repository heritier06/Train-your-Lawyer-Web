<template>
    <div class="Landing">
        <div class="nav-bar">
            <img src="../assets/logo.png" class="logo">
            <a class="name" href="#">Train your Lawyer</a>
            <div class="vertically"></div>
            <a class="acceuil" @click="$router.push('/')">Acceuil</a>
            <a class="cours" @click="$router.push('/Lesson')">Cours</a>
            <a class="article" href="#">Article</a>
            <a class="packs" href="#">Nos Packs</a>
            <button class="btn-try">Essayer</button>
            <button class="btn-connect" @click="$router.push('/Login')">Connexion</button>
            <div class="vertically-2"></div>
        </div>
        <div class="description">
            <p>Pour réussir tes <span style="color: #E98B1E">études de droit</span>,<br />La plateforme la plus complète qu'il te faut.</p>
        </div>
        <div class="other_desc">
            <p>Des milliers de contenus pédagogiques, créé par des<br>enseignants, qui t’aident à comprendre, apprendre et à<br>t’entraîner dans plus de 26 matières.</p>
        </div>
        <img src="../assets/learn.png" class="learn">
        <button class="btn-continue" @click="$router.push('/Lesson')">Tester sans inscription</button>
        <h2 class="number"> <span style="font-weight:lighter">+ de</span> 1000 étudiants inscrits</h2>
        <div class="feed">
            <h1 style="font-size: 160%; font-weight: bolder;"> Ce qu'en disent <br /> nos étudiants</h1>
            <img src="../Assets/starsss.jpeg" class="stars">
        </div>
        <div class="feedback">
            <img src="../assets/icon-André.jpg" class="user_icon">
            <p class="user">André<br />L3 à Abomey-Calavi (FADESP)</p>
            <hr class="line" />
            <p style="font-size: 110%; font-weight: 0.1 solid;">
                J'ai appris mon cours de droit pénal grâce à cette <br />plateforme ce qui m'a permis d'avoir 19 de moyenne en TD!<br /> Le cours de droit administratif m'a semblé moins pénible à <br />apprendre grâce à vous.
            </p>
        </div>
        <h1 class="description1">Des contenus pédagogiques qui vont faire décoller ta moyenne</h1>
        <div class="another">
            <span class="dot"></span>
            <h1 class="optimise">Des cours optimisés</h1>
            <p class="lexique">Comprendre, approdondir ou compléter <br>tes cours simplement</p>
            <img src="../assets/check-icon.png" class="check-icon">
            <p class="check1">26 matières de la L1 a la L3</p>
            <img src="../assets/check-icon.png" class="check-icon2">
            <p class="check2">Elements pédagogiques: résumés, nota bene, exemples...</p>
        </div>
        <img src="../assets/book.png" class="book">
        <div class="footer">
            <footer>
                <h3>Copyright, inc all rights reserved. TrainYourLaywer.co, obibi@goat.com</h3>
            </footer>
        </div>
</div>
</template>

<style scoped>

.footer{
    position: absolute;
    top: 230%;
    border: 1px solid;
    box-shadow: #E3E3E3;
    background-color: #E98B1E;
    font-weight: bold;
    width: 1400px;
    text-align: center;
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
.description1{
    position: absolute;
    top: 148%;
    margin-left: 20%;
    font-weight: bolder;
    font-size: 160%;
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
    top: 59%;
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
}

.description {
    position: absolute;
    top: 150px;
    left: 80px;
    font-family: Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    font-size: 35px;
}
.other_desc {
    position: absolute;
    top: 300px;
    left: 80px;
    font-family: Calibri, 'Trebuchet MS', sans-serif;
    font-size: 25px;
}
.acceuil{
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