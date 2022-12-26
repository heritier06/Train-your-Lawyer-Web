<template>
    <div class="h-screen Lesson">
        <div class="left-bar">
            <div class="flex flex-col options">
                <div class="cours">
                    <img class="img-1" src="../assets/1.png"/>
                    <button class="btn-01">Cours</button>
                </div>
                <div class="entrainement">
                    <img class="img-2" src="../assets/2.png"/>
                    <button class="btn-02">Entrainements</button>
                </div>
                <div class="td">
                    <img class="img-3" src="../assets/3.png"/>
                    <button class="btn-03">Travaux dirigés</button>
                </div>
                <div class="article">
                    <img class="img-4" src="../assets/4.png"/>
                    <button class="btn-04">Articles</button>
                </div>
                <div class="pack">
                    <img class="img-5" src="../assets/5.png"/>
                    <button class="btn-05">Nos packs</button>
                </div>
              </div>
        </div>
        <div class="up-bar">
            <img src="../assets/logo.png" class="logo" alt="logo" @click="$router.push('/')"/>
            <a class="title" @click="$router.push('/')">Train your lawyer</a>
        </div>
        <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 formation">
            <div class="head">
                <p class="mt-8 text-xl font-bold name">Droit Pénal</p>
                <img class="penal" src="../assets/law.png"/>
            </div>
        </div>
        <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 content">
            <div class="bloc-cours">
                <a class="titre">Contenu du cours</a>
                <div class="contenu1">
                    <img class="arrow" src="../assets/arrow_down.png"/>
                    <a class="seance1">Séance 1 - Titre</a>
                </div>
                <div class="contenu2">
                    <img class="arrow" src="../assets/arrow_down.png"/>
                    <a class="seance2">Séance 2 - Titre</a>
                </div>
                <div class="contenu3">
                    <img class="arrow" src="../assets/arrow_down.png"/>
                    <a class="seance3">Séance 3 - Titre</a>
                </div>
                <div class="contenu4">
                    <img class="arrow" src="../assets/arrow_down.png"/>
                    <a class="seance4">Séance 4 - Titre</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.arrow {
    position: absolute;
    margin-top: 2%;
    margin-left: 5%;
    width: 40px;
    height: 40px;
}
.name {
    font-size: 60px;
    margin-top: 6%;
    margin-left: 33%;
    color: #C99305;
}
.cours {
    margin-top: 5%;
    margin-left: 7%;
    display: inline-flex;
    background-color: #FFC580;
    border-radius: 10px;
    width: 220px;
    height: 45px;
    box-shadow: 0 0 10px 0 rgb(255, 106, 0) inset, 0 0 10px 4px  rgb(255, 106, 0);
}
.entrainement, .article, .td, .pack {
    margin-top: 5%;
    margin-left: 7%;
    display: inline-flex;
    border-radius: 10px;
    width: 220px;
    height: 45px;
}
.entrainement:hover, .article:hover, .td:hover, .pack:hover{
    background-color: #ffff;
    color: rgb(0, 0, 0);
    transition: all 850ms ease-in-out;
    box-shadow: 0 0 10px 0 orange inset, 0 0 10px 4px orange;
}
.img-1, .img-2, .img-3, .img-4, .img-5{
    max-width: 13%;
    height: 73%;
    position: relative;
    left: 6%;
    top: 15%;
}
.btn-01{
    font-size: 12px;
    margin-left: 10%;
    padding: 3% 5% 3% 5%;
    text-decoration: none;
    color: rgb(3, 3, 3);
    cursor: pointer;
}

.btn-02, .btn-03, .btn-04, .btn-05{
    font-size: 12px;
    margin-left: 10%;
    padding: 3% 2% 3% 5%;
    text-decoration: none;
    color: rgb(3, 3, 3);
    cursor: pointer;
}
.options {
    margin-top: 45%;
}
.formation {
    width: 79.93%;
    height: 10%;
    float: right;
}
.content {
    float: right;
    width: 79.93%;
    height: 70%;
}
.up-bar {
    float: right;
    background-color: #ffff;
    width: 79.93%;
    height: 13%;
    float: right;
    box-shadow: 5px 5px 18px grey;
    border: 0px solid;
    border-bottom-left-radius: 10px 10px;
    border-bottom-right-radius: 10px 10px;
}
.left-bar {
    position: fixed;
    height: 140%;
    width: 20%;
    float: left;
    background-color: #ffff;
    box-shadow: 0px 0px 18px grey;
    border: 0px solid;
    border-bottom-right-radius: 10px 10px;
    position: relative;
}
.logo {
    position: absolute;
    height: 40px;
    width: 30px;
    margin-left: 40px;
    margin-top: 3%;
}
a.title{
    position: absolute;
    top: 50px;
    left: 380px;
    font-weight: bold;
}
.head{
    top: 15px;
    margin-bottom: -200px;
    background-color: #FFC580;
}
.bloc-cours {
    position: sticky;
    float: right;
    background-color: #fff;
    width: 990px;
    height: 550px;
    border-radius: 30px 30px;
    margin-top: 180px;
    margin-left: 5%;
    border: 0px solid;
    box-shadow: 0px 0px 18px grey;
    background: white;
}
a.titre {
    position: relative;
    text-align: center;
    color: rgb(148, 148, 148);
    font-size: 15px;
    left: 2.9%;
    top: 3%;
}
.contenu1{
    position: sticky;
    background-color: #fff;
    width: 700px;
    height: 70px;
    border-radius: 30px 30px;
    margin-top: 45px;
    margin-left: 12%;
    border: 0px solid;
    box-shadow: 0px 0px 12px grey;
    background: white;
}
.contenu2{
    position: sticky;
    background-color: #fff;
    width: 700px;
    height: 70px;
    border-radius: 30px 30px;
    margin-top: 50px;
    margin-left: 12%;
    border: 0px solid;
    box-shadow: 0px 0px 12px grey;
    background: white;
}
.contenu3{
    position: sticky;
    background-color: #fff;
    width: 700px;
    height: 70px;
    border-radius: 30px 30px;
    margin-top: 55px;
    margin-left: 12%;
    border: 0px solid;
    box-shadow: 0px 0px 12px grey;
    background: white;
}
.contenu4{
    position: sticky;
    background-color: #fff;
    width: 700px;
    height: 70px;
    border-radius: 30px 30px;
    margin-top: 60px;
    margin-left: 12%;
    border: 0px solid;
    box-shadow: 0px 0px 12px grey;
    background: white;
}
a.seance1{
    position: absolute;
    top: 35%;
    left: 15%;
    color: rgb(148, 148, 148);
}
a.seance2{
    position: absolute;
    top: 35%;
    left: 15%;
    color: rgb(148, 148, 148);
}
a.seance3{
    position: absolute;
    top: 35%;
    left: 15%;
    color: rgb(148, 148, 148);
}
a.seance4{
    position: absolute;
    top: 35%;
    left: 15%;
    color: rgb(148, 148, 148);
}
.penal{
    position: absolute;
    height: 120px;
    width: 140px;
    top: 27%;
    left: 53%;
}
</style>