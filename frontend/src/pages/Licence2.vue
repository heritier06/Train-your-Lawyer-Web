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
        <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 formation">
            <button class="licence1" @click="$router.push('/Lesson')">Licence 1</button>
            <button class="licence2" @click="$router.push('/Licence2')">Licence 2</button>
            <button class="licence3" @click="$router.push('/Licence3')">Licence 3</button>
        </div>
        <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 content">
            <div class="constitutionel">
                <img src="../assets/fiscal.png" class="law" alt="law"/>
                <a class="const-name">Droit Fiscal Général</a>
            </div>
            <div class="famille">
                <img src="../assets/penal.png" class="family" alt="family"/>
                <a class="fam-name">Droit Pénal Général</a>
            </div>
            <div class="personne">
                <img src="../assets/admin.png" class="people" alt="people"/>
                <a class="pers-name">Droit Administratif</a>
            </div>
            <div class="finance">
                <img src="../assets/lock1.png" class="money" alt="money"/>
                <a class="fin-name">Droit des Libertés Fondamental</a>
            </div>
            <div class="notariat">
                <img src="../assets/lock1.png" alt="lock" class="lock">
                <a class="not-name">Anglais Général</a>
            </div>
            <div class="assurance">
                <img src="../assets/lock1.png" alt="lock" class="lock">
                <a class="assu-name">Finance et Publique</a>
            </div>
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
    /*border-radius: 10px;
    text-align: center;
    margin-top: 1%;
    font-size: 15px;
    /*width: 60%;
    height: 50%;*/
    font-size: 12px;
    margin-left: 10%;
    padding: 3% 2% 3% 5%;
    text-decoration: none;
    /*background-color: white;*/
    color: rgb(3, 3, 3);
    cursor: pointer;
}

/*.btn-01:hover::after, .btn-02:hover::after, .btn-03:hover::after, .btn-04:hover::after{
    transform: scaleX(1);
    transform-origin: bottom left;
  }*/
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
a.const-name{
    color: 0000;
    position: absolute;
    font-size: 15px;
    margin-top: 210px;
    margin-left: 3.8%;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    top: 200px;
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
a.fam-name{
    position: absolute;
    font-size: 15px;
    margin-top: 210px;
    margin-left: 3.8%;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    left: 52.5%;
    top: 200px;
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
a.pers-name{
    color: 0000;
    position: absolute;
    font-size: 15px;
    margin-top: 210px;
    margin-left: 3.8%;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    left: 78.9%;
    top: 200px;
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
a.fin-name{
    color: 0000;
    position: absolute;
    font-size: 15px;
    margin-top: 26px;
    margin-left: 0.8%;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
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
a.assu-name{
    color: 0000;
    position: absolute;
    font-size: 15px;
    margin-top: 50px;
    margin-left: 3.5%;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
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
a.not-name{
    color: 0000;
    position: absolute;
    font-size: 15px;
    margin-top: 50px;
    margin-left: 5.1%;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
}
.law{
    position: relative;
    width: 60%;
    height: 55%;
    top: 15%;
    left: 19%;
}
.family{
    position: relative;
    width: 75%;
    height: 70%;
    top: 10%;
    left: 10.5%;
}
.people {
    position: relative;
    width: 85%;
    height: 80%;
    top: 3%;
    left: 10.5%;
}

.money{
    position: relative;
    width: 75%;
    height: 70%;
    top: 5%;
    left: 10.5%;
}
.lock{ 
    position: relative;
    width: 65%;
    height: 60%;
    top: 6%;
    left: 16.5%;;
}
</style>