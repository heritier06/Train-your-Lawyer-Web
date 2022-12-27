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
                    <button class="c-3" @click="$router.push('/Penalent2')">Analyse d'arrêt</button>
                    <button class="c-4" @click="$router.push('/Penalent3')">Cas pratiques</button>
                </div>
            </div>
            <div class="lesson_">
                
                <div class="scroll">
                    <p class="mt-12 text-xl  text-center">&#x1F468;&#x1F3FE;&#x200D;&#x2696;&#xFE0F; Entrainement Droit pénal general - Cas Pratiques</p>
                    <hr class="mt-5">
                    <p class="mt-12 ml-5 text-2xl">Cas Pratiques - Correction</p>
                    <div class="text">
                        <br>
                        Introduction
                        <br>
                        Résumer les faits
                        <br>
                        Le Problème, général est relatif au conflit de lois dans le temps.
                        <br>
                        L’appel de Kolou peut-il prospérer ?
                        <br>
                        Ce qui conduit à répondre à la question de savoir si Kolou peut valablement revendiquer l’application d’un texte sous l’empire duquel l’infraction qui est reprochée n’a pas été commise et surtout s’il peut être poursuivi et jugé en application d’un texte qui, par l’arrivée du terme fixé par le législateur, a cessé d’être en vigueur ?
                        <br>
                        <br>
                        I- L’appel de kolou par rapport aux principes de solution des conflits
                        <br>
                        <br>
                        D’abord Kolou, revendique l’application du texte sur le détournement des deniers privés en lieu et place delà loi du 31 août 2009 sur l’enrichissement illicite des Ministres de culte religieux (A). Ensuite, Kolou avance que le délit d’enrichissement illicite des Ministres de cultes est supprimé (B).
                        <br>
                        <br>
                        A- La revendication du bénéfice du texte sur le détournement de deniers privés
                        <br>
                        <br>
                        Qu’elle soit une loi nouvelle adoptée en remplacement de celle du 31 août 2009 ou qu’elle à l’expiration du délai de vie prévu pour le texte de circonstance, la revendication du bénéfice de la loi sur le détournement de deniers privés paraît fondée parce que :
                        <br>
                        <br>
                        1- Il n’y a pas eu une condamnation devenue définitive (au sens de l’Art. 21 du C.P) au jour où la loi du 31/ 08/ 2009 disparaissait.
                        <br>
                        <br>
                        2- Les peines de la loi sur les détournements des deniers privés serait moins sévères que celles de la loi 31/ 08/ 2009 (Art. 20 C.P).
                        <br>
                        <br>
                        Ainsi, les conditions du principe de l’application immédiate du nouveau texte (ou du texte revenu en vigueur) sont réunies, et on pourrait suivre, à ce niveau, Kolou dans son argumentation.
                        <br>
                        <br>
                        B- Argument tiré de la suppression de l’infraction d’enrichissement illicite des Ministres de cultes
                        <br>
                        <br>
                        Au plan des principes, l’argument est également fondé.
                        <br>
                        D’abord, c’est tout le texte qui a disparu de l’ordre juridique, ce qui a ensuite entraîné la suppression de l’infraction.
                        <br>
                        <br>
                        1- Pour la suppression du texte
                        <br>
                        <br>
                        L’Art. 13 C.P pose le principe de la légalité : « Le juge ne peut qualifier d’infraction et punir un fait qui n’est pas légalement défini et puni comme tel…»
                        <br>
                        <br>
                        Si le délit de l’enrichissement illicite par détournement des dîmes et offrandes est supprimé, la répression de ce fait contrevient au principe de légalité des délits et des peines.
                        <br>
                        <br>
                        2- Pour la suppression de l’infraction
                        <br>
                        <br>
                        Il faut citer l’Art. 19 alinéa 1er : « Nul ne peut être poursuivi ou jugé en raison d’un fait qui, aux termes d’une disposition nouvelle, ne constitue plus une infraction… ».
                        <br>
                        <br>
                        Cette règle apparaît comme un corollaire du principe de légalité et, à ce stade de la réflexion, la position de Kolou est parfaitement soutenable.
                        <br>
                        <br>
                        L’art 19 alinéa 2 prévoit même que si des peines et mesures de sûreté avaient été prononcées pour le fait qui n’est plus délictueux, il doit être mis fin à leur exécution.
                        <br>
                        <br>
                        C’est également sur cette base que Kolou pourrait revendiquer sa soutane et ses instruments de culte. Mais Kolou ne fait pas une lecture complète de l’art 19.
                        <br>
                        <br>
                        II- L’appel de Kolou est mal fondé
                        <br>
                        <br>
                        A- Fondement
                        <br>
                        <br>
                        Base : Art. 19 alinéa 3 : « Toutefois, en cas d’infraction… ». Ce qui signifie que l’individu ayant commis l’acte interdit pendant la période pourra être jugé et condamné même après l’expiration du délai, conformément à la loi ancienne ; ceci par exception à la règle de principe posée par l’Art. 19 alinéa 1er.
                        <br>
                        <br>
                        La loi ne fait pas ici, la distinction que font certains droits étrangers entre lois plus douces et lois plus sévères.
                        <br>
                        <br>
                        B- Justification
                        <br>
                        <br>
                        La solution doit être approuvée, car si l’on devait faire application du principe par l’Art. 19 alinéa 1er aux délinquants ayant violé une loi temporaire, ceux-ci, par des mesures dilatoires au niveau de la procédure, parviendraient à se mettre à l’abri de la répression en atteignant la date limite de l’application de la loi.
                        Conclusion : L’appel de Kolou ne peut pas être valide.
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
a, button {
  cursor: pointer;
}
</style>