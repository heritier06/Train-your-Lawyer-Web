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
        
        <div class="grid grid-flow-row-dense grid-cols-2 grid-rows-1 content">
            <div class="lesson_name">
                <button class="text-center licence1" @click="$router.push('/Licence2')">Licence2</button>
                <p class="mt-12 text-2xl font-bold text-center">Droit Pénal Général</p>
                <p class="mt-3 text-center text-gray-600 text-sm">0% terminée</p>
                <hr class="mt-5">
                <button class="first-lesson">Séance 1 - Introduction aux infractions </button>
                <br><br>
                <div class="flex flex-col option-cours">
                    <button class="c-1" @click="$router.push('/Seance1')">Cours optimisés</button>
                    <button class="c-2">Fiche de révision</button>
                    <button class="c-3">Vidéo de cours</button>
                    <button class="c-4">Mind map</button>
                    <button class="c-5">Flash cards</button>
                    <button class="c-6">QCM</button>
                </div>
            </div>
            <div class="lesson_">
                
                <div class="scroll">
                    <p class="mt-12 text-xl  text-center">&#x1F468;&#x1F3FE;&#x200D;&#x2696;&#xFE0F; Droit Pénale - Séance 1 - Introduction au droit Pénal</p>
                    <hr class="mt-5">
                    <p class="mt-12 ml-5 text-2xl">&#x1F4DA; Introduction au droit Penal</p>
                  </div>
                  <div class="qcm-q1">
                    <h3>Qu'est ce que le droit pénal?</h3>
                    <label>
                        <input type="radio" v-model="question1" value="a">Lorem ipsum
                    </label><br/>
                    <label>
                        <input type="radio" v-model="question1" value="b">Lorem ipsum
                    </label><br/>
                    <label>
                        <input type="radio" v-model="question1" value="c">Lorem ipsum
                    </label><br/>
                    <br>
                    <h3>A quoi ca sert?</h3>
                    <label>
                        <input type="radio" name="question2" value="a">Lorem ipsum
                    </label><br/>
                    <label>
                        <input type="radio" name="question2" value="b">Lorem ipsum
                    </label><br/>
                    <label>
                        <input type="radio" name="question2" value="c">Lorem ipsum
                    </label><br/>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                question1: 'a',
                question2: 'b',
            }
        },
        var: answers = ["A", "C", "B"],
    tot: answers.length,
    getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
    }
    getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === answers[i]) score += 1;
    return score;
    }
    returnScore() {
    document.getElementById("myresults").innerHTML =
        "Your score is " + getScore() + "/" + tot;
    if (getScore() > 2) {
        console.log("Bravo");
    }
    }
</script>

<style scoped>


.qcm-q1{
    position:absolute;
    top:45%;
    left: 55%;
    font-size: larger;
}
.c-1, .c-3, .c-5{
    background-color: white;
}

.c-2, .c-4,.c-6{
    background-color: #F1A244;
}
.c-1, .c-2, .c-3, .c-4, .c-5, .c-6 {
    text-align: center;
    margin-left: 10%;
    font-size: 15px;
    display: inline-block;
    width: 80%;
    height: 8%;
    padding: 3% 5% 3% 5%;
    text-decoration: none;
    color: #000;
    cursor: pointer;
}
.scroll {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
}
.lesson_{
    border-radius: 10px 10px;
    margin-left: -20%;
}
.first-lesson, .second-lesson, .third-lesson {
    margin-left: 10%;
    margin-top: 10%;
}
button.licence1{
    border-radius: 10px;
    text-align: center;
    margin-top: 30px;
    margin-left: 30%;
    font-size: 15px;
    display: inline-block;
    width: 40%;
    height: 8%;
    padding: 3% 5% 3% 5%;
    text-decoration: none;
    background-color: #e98a1e;
    color: #fff;
    cursor: pointer;
}
.lesson_name{
    width: 80%;
    border-radius: 10px 10px;
    background-color: #FFC580;
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
    height: 87%;
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
</style>