<template>
    <div class="h-screen Lesson">
        <div class="left-bar">
            <div class="flex flex-col options">
                <div class="cours">
                    <img class="img-1" src="../assets/1.png"/>
                    <button class="btn-01" @click="$router.push('/Lesson')">Cours</button>
                </div>
                <div class="entrainement">
                    <img class="img-2" src="../assets/2.png"/>
                    <button class="btn-02" @click="$router.push('/Entrainement')">Entrainements</button>
                </div>
                <div class="td">
                    <img class="img-3" src="../assets/3.png"/>
                    <button class="btn-03" @click="$router.push('/TD')">Travaux dirigés</button>
                </div>
                <div class="article">
                    <img class="img-4" src="../assets/4.png"/>
                    <button class="btn-04" @click="$router.push('/Article')">Articles</button>
                </div>
                <div class="pack">
                    <img class="img-5" src="../assets/5.png"/>
                    <button class="btn-05" @click="$router.push('/Pack')">Nos packs</button>
                </div>
              </div>
        </div>
        <div class="up-bar">
            <img src="../assets/logo.png" class="logo" alt="logo" @click="$router.push('/')"/>
            <a class="title" @click="$router.push('/')">Train your lawyer</a>
        </div>
        <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 formation">
            <button class="licence1" @click="$router.push('/Lesson')">Licence 1</button>
            <button class="licence2" @click="$router.push('/Licence2')">Licence 2</button>
            <button class="licence3" @click="$router.push('/Licence3')">Licence 3</button>
        </div>

        <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 content">
            <a class="constitutionel">
                <img src="../assets/entreprise.png" class="law" alt="law"/>
                <p class="mt-5 font-bold text-center">Fiscalités des Entreprises</p>
            </a>
            <a class="famille">
                <img src="../assets/surete.png" class="family" alt="family"/>
                <p class="mt-5 font-bold text-center">Droit des Sûretés</p>
            </a>
            <a class="personne">
                <img src="../assets/fiscal.png" class="people" alt="people"/>
                <p class="mt-5 font-bold text-center">Droit Fiscal Général</p>
            </a>
            <a class="finance">
                <img src="../assets/public.png" class="money" alt="money"/>
                <p class="mt-5 font-bold text-center">Droit des Propriétés Public</p>
            </a>
            <a class="notariat">
                <img src="../assets/procedure.png" alt="lock" class="lock">
                <p class="mt-5 font-bold text-center">Procédure Collective</p>
            </a>
            <a class="assurance">
                <img src="../assets/contrat.png" alt="lock" class="lock">
                <p class="mt-5 font-bold text-center">Contrats Spéciaux</p>
            </a>
        </div>

    </div>
</template>

<style scoped>

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
    /*background-color: white;*/
    color: rgb(3, 3, 3);
    cursor: pointer;
}

.btn-02, .btn-03, .btn-04, .btn-05{

    font-size: 12px;
    margin-left: 10%;
    padding: 3% 2% 3% 5%;
    text-decoration: none;
    /*background-color: white;*/
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
    background: linear-gradient(-90deg, #e98a1e, 0.1%, white);
    width: 79.93%;
    height: 13%;
    float: right;
    box-shadow: 5px 5px 18px grey;
    border: 0px solid;
    border-bottom-left-radius: 10px 10px;
    border-bottom-right-radius: 10px 10px;
}
.left-bar {
    height: 100%;
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
button.licence3{
    border-radius: 10px;
    text-align: center;
    margin-top: 30px;
    margin-left: 32%;
    font-size: 15px;
    display: inline-block;
    width: 40%;
    height: 50%;
    padding: 3% 5% 3% 5%;
    text-decoration: none;
    background-color: #e98a1e;
    color: #fff;
    cursor: pointer;
}
.licence1:hover, .licence2:hover, .licence3:hover{
    background-color: #ffff;
    color: orange;
    transition: all 850ms ease-in-out;
    box-shadow: 0 0 10px 0 orange inset, 0 0 10px 4px orange;
}
button.licence1{
    border-radius: 10px;
    text-align: center;
    margin-top: 30px;
    margin-left: 32%;
    font-size: 15px;
    display: inline-block;
    width: 40%;
    height: 50%;
    padding: 3% 5% 3% 5%;
    text-decoration: none;
    color: #000;
    cursor: pointer;
}

button.licence2{
    border-radius: 10px;
    text-align: center;
    margin-top: 30px;
    margin-left: 32%;
    font-size: 15px;
    display: inline-block;
    width: 40%;
    height: 50%;
    padding: 3% 5% 3% 5%;
    text-decoration: none;
    color: #000;
    cursor: pointer;
}
.constitutionel {
        float: right;
        background-color: #fff;
        width: 250px;
        height: 250px;
        border-radius: 10px;
        margin-top: 30px;
        margin-left: 20%;
        border: 0px solid;
        box-shadow: 0px 0px 18px grey;
        background: linear-gradient(180deg, #e98a1e, 0.1%, white);
}
.famille {
        float: right;
        background-color: #fff;
        width: 250px;
        height: 250px;
        border-radius: 10px;
        margin-top: 30px;
        margin-left: 20%;
        border: 0px solid;
        box-shadow: 0px 0px 18px grey;
        background: linear-gradient(180deg, #e98a1e, 0.1%, white);
}
.personne {
        float: right;
        background-color:#fff;
        width: 250px;
        height: 250px;
        border-radius: 10px;
        margin-top: 30px;
        margin-left: 20%;
        border: 0px solid;
        box-shadow: 0px 0px 18px grey;
        background: linear-gradient(180deg, #e98a1e, 0.1%, white);
}
.finance {
        float: right;
        background-color: #fff;
        width: 250px;
        height: 250px;
        border-radius: 10px;
        margin-top: 150px;
        margin-left: 20%;
        border: 0px solid;
        box-shadow: 0px 0px 18px grey;
        background: linear-gradient(180deg, #e98a1e, 0.1%, white);
}
.assurance {
        float: right;
        background-color: #fff;
        width: 250px;
        height: 250px;
        border-radius: 10px;
        margin-top: 150px;
        margin-left: 20%;
        border: 0px solid;
        box-shadow: 0px 0px 18px grey;
        background: linear-gradient(180deg, #e98a1e, 0.1%, white);
}
.notariat {
        float: right;
        background-color: #fff;
        width: 250px;
        height: 250px;
        border-radius: 10px;
        margin-top: 150px;
        margin-left: 20%;
        border: 0px solid;
        box-shadow: 0px 0px 18px grey;
        background: linear-gradient(180deg, #e98a1e, 0.1%, white);
}
.law, .family, .people, .money, .lock{
    margin-left: 17%;
    margin-top: 10%;
    height: 60%;
}
a, button {
    cursor: pointer;
}
</style>