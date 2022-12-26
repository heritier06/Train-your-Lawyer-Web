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
                <button class="text-center licence1" @click="$router.push('/Entrainement')">Entrainement</button>
                <p class="mt-12 text-2xl font-bold text-center">Droit Pénal Général</p>
                <p class="mt-3 text-center text-gray-600 text-sm">0% terminée</p>
                <hr class="mt-5">
                <button class="first-lesson">Entrainement</button>
                <br><br>
                <div class="flex flex-col option-cours">
                    <button class="c-2" @click="$router.push('/Penalent')">Dissertation juridique</button>
                    <button class="c-3">Analyse d'arrêt</button>
                    <button class="c-4">Cas pratiques</button>
                </div>
            </div>
            <div class="lesson_">
                
                <div class="scroll">
                    <p class="mt-12 text-xl  text-center">&#x1F468;&#x1F3FE;&#x200D;&#x2696;&#xFE0F; Entrainement Droit pénal general - Analyse d'arrêt</p>
                    <hr class="mt-5">
                    <p class="mt-12 ml-5 text-2xl">Correction de l’arrêt à analyser (Arrêt N° 207 du 06 août 1980)</p>
                    <div class="text">
                        1) Le problème juridique traité par le juge est le suivant : le juge ivoirien est-il compétent pour juger un crime commis à l’étranger par un ressortissant étranger et dont la victime est elle-même étrangère ?
                        <br>
                        2) L’espèce nous renvoie à l’application de la loi pénale ivoirienne à des faits commis à l’étranger. Les régles de droit pénal applicables sont donc : les articles 15, 16 et 17 du Code Pénal et les articles 658 à 664 du Code de Procédure Pénale.
                        <br>
                        3) Compréhension de la décision du juge
                        <br>
                        <br>
                        Le juge a adopté la démarche suivante :
                        <br>
                        1- Il s’interroge d’abord sur le texte applicable et en détermine le sens et la portée :
                        <br>
                        a. Il définit et qualifie la situation qui lui est soumise : il s’agit d’un crime d’enlèvement d’enfant commis à l’étranger par un étranger contre un autre étranger. C’est une infraction commise entièrement ou partiellement à l’étranger (article 16 du Code Pénale).
                        <br>
                        b. Il recense tous les textes susceptibles de s’appliquer à une telle situation.
                        <br>
                        c. Il confronte tous ces textes à cette situation.
                        <br>
                        d. Il conclut qu’aucune autre disposition n’est applicable en dehors de l’article 663 du CPP.
                        <br>
                        e. Il interprète ce texte : il établit la compétence des juges ivoiriens sur une liste d’infraction et cette liste est limitative. Ce qui signifie qu’on ne peut pas ajouter une autre infraction à la liste établie par la loi.
                        <br>
                        NOTES :
                        <br>
                        Les points a, b, et c sont les étapes de la réflexion nécessaire pour se mettre à l’abri de l’erreur. Il n’est pas nécessaire de les énoncer (le juge ne le fait pas) pour justifier la solution.
                        <br>
                        <br>
                        2- Il applique le texte aux faits de l’espèce :
                        <br>
                        a. Il s’agit d’un crime d’enlèvement d’enfant commis à l’étranger par un étranger contre un autre étranger.
                        <br>
                        b. Le crime d’enlèvement d’enfant ne figure pas dans la liste de l’article 663.
                        <br>
                        <br>
                        3- Il en conclut que les juridictions ivoiriennes ne sont pas compétentes pour le juger lorsqu’il est commis à l’étranger, par un étranger contre un autre étranger.
                        <br>
                        On peut comprendre que :
                        <br>
                        1- Le juge considère que la liste établie par l’article 663 du Code Pénal qui applique le principe de la réalité est limitative. Cela signifie qu’on ne peut déduire ni de ce texte ni d’aucun autre un critère général d’application du principe de la réalité à des cas non prévus par le législateur.
                        <br>
                        2- Il se réfère à l’article 663 du CPP seulement. Cela signifie implicitement que l’article 658 qui met en œuvre le principe de la personnalité active n’est pas applicable.
                        <br>
                        3- Le juge ne tient pas compte de la circonstance que l’enlèvement peut être considéré comme une infraction permanente. L’infraction permanente est constituée par un fait qui s’accomplit instantanément, et dont les effets se prolongent dans le temps.
                        <br>
                        Dans le cas de l’enlèvement d’enfant, la garde est l’effet recherché par l’auteur de l’infraction. Le juge aurait donc pu considérer qu’il s’agit d’une infraction permanente et tenir compte de cette circonstance. En l’ignorant, il semble se rallier à la position des juges français qui traitent de telles infractions comme des infractions instantanées.
                        <br>
                        Dans le cadre du Code Pénal actuel, on doit se référer à l’article 17 qui dispose que l’infraction est commise au lieu de son but immédiat ou de son résultat. La garde illégitime est le but immédiat de l’enlèvement. Elle a lieu en Côte d’Ivoire. On pourrait donc en déduire que les juridictions ivoiriennes sont compétentes. Le juge n’aurait donc pas pu prendre la même décision au regard de ce Code.
                    </div>
                </div>
            </div>
            </div>
    </div>
</template>

<style scoped>

.box{
    position: relative;
    margin-top: 50px;
    width: 650px;
    height: 300px;
    border-radius: 10px 10px;
    border: 1px solid;

}
.c-3{
    background-color: white;
}

.c-2, .c-4{
    background-color: #F1A244;
}
.c-2, .c-3, .c-4{
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