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
        <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 formation">
            <p class="text-xl mt-12 font-bold text-center">Sessions d'entraînements</p>
        </div>
        <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-3 content">
            <div class="first-training">
                <div class="brd-1">
                    <img class ="trn-01" src="../assets/penal.png" @click="$router.push('/Penalent')">
                </div>
                <p class="ml-12 text-xl mt-12 font-bold text-center" @click="$router.push('/Penalent')">
                    Droit Penal General - Session d’entraînement
                </p>
            </div>
            <div class="second-training">
                <div class="brd-2">
                    <img class ="trn-02" src="../assets/family.png">
                </div>
                <p class="ml-12 text-xl mt-12 font-bold text-center">
                    Droit de la famille 1 - Session d’entraînement
                </p>
            </div>
            <div class="third-training">
                <div class="brd-3">
                    <img class ="trn-03" src="../assets/admin.png">
                </div>
                <p class="ml-12 text-xl mt-12 font-bold text-center">
                    Droit administratif 2 - Session d’entraînement
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.brd-1, .brd-2, .brd-3{
    height: 150px;
    width: 250px;
    background-color: #ee9f45;
}
.trn-01, .trn-02, .trn-03{
    height: 100%;   
}
.first-training, .second-training, .third-training{
    display: inline-flex;
    float: right;
    background-color: #fff;
    width: 1000px;
    height: 150px;
    border-radius: 10px;
    margin-top: 35px;
    margin-left: 5%;
    border: 0px solid;
    box-shadow: 0px 0px 18px grey;
    background: linear-gradient(180deg, #e98a1e, 0.1%, white);
}
.entrainement {
    margin-top: 5%;
    margin-left: 7%;
    display: inline-flex;
    background-color: #FFC580;
    border-radius: 10px;
    width: 220px;
    height: 45px;
    box-shadow: 0 0 10px 0 rgb(255, 106, 0) inset, 0 0 10px 4px  rgb(255, 106, 0);
}
.cours, .article, .td, .pack {
    margin-top: 5%;
    margin-left: 7%;
    display: inline-flex;
    border-radius: 10px;
    width: 220px;
    height: 45px;
}
.cours:hover, .article:hover, .td:hover, .pack:hover{
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
a, button {
  cursor: pointer;
}
</style>