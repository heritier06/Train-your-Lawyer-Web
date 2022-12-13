<template>
    <div class="Landing">
        <div class="nav-bar">
            <img src="../assets/logo.png" class="logo">
            <a class="name" href="#">Train your Lawyer</a>
            <div class="vertically"></div>
            <a class="acceuil" @click="$router.push('/')">Acceuil</a>
            <a class="cours" href="#">Cours</a>
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
        <button class="btn-continue">Tester sans inscription</button>   
</div>
</template>

<style scoped>

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
    position: fixed;
    background-color: rgb(238, 238, 238) transparent;
    top: 1%;
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