<template>
    <div class="h-screen Lesson">
        <div class="left-bar">
            <div class="flex flex-col options">
                <div class="cours">
                    <img class="img-1" src="../assets/1.png"/>
                    <button class="btn-02" @click="$router.push('/Lesson')">Cours</button>
                </div>
                <div class="entrainement">
                    <img class="img-2" src="../assets/2.png"/>
                    <button class="btn-01" @click="$router.push('/Entrainement')">Entrainements</button>
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
                    <p class="mt-12 text-xl  text-center">&#x1F468;&#x1F3FE;&#x200D;&#x2696;&#xFE0F; Entrainement Droit pénal general - Dissertation Juridique</p>
                    <hr class="mt-5">
                    <family-name Times New Roman></family-name><p class="mt-12 ml-5 text-2xl">📝Resultat de Dissertation</p>
                    <div class="text">
                    <br>
                    <div class="az">
                    <family-name Times New Roman>Introduction (À faire)</family-name>    
                    </div>
                    <br>
                   <strong> 1️⃣- Les pouvoirs du juge répressif</strong>
                    <br>
                    <br>
                    <i> A- Le juge répressif ne peut apprécier la constitutionnalité des lois </i>
                    <br>
                    <br>
                    Le contrôle de la légalité d’un texte pénal peut porter soit sur le fond du droit (contrôle de la légalité interne), soit sur le respect des formes (contrôle de la légalité externe). S’agissant des lois et autres textes ayant valeur législative :
                    <br>
                    Le pouvoir de contrôle de la légalité interne se ramène à la vérification de la conformité de la loi avec un texte supérieur qui ne peut être autre que la constitution ou un traité international. L’article 221 du C.P interdit au juge de procéder à un tel contrôle de constitutionnalité.
                    <br>
                    En revanche, on pourrait reconnaître au juge pénal, un contrôle de la légalité externe : dans cette optique, le juge pourrait vérifier si la loi a été régulièrement promulguée et publiée.
                    <br>
                    En tout état de cause, qu’il s’agisse d’un contrôle de la légalité externe ou interne, celui-ci ne peut se faire que par voie d’exception (la partie poursuivie soulève l’illégalité du texte servant de base aux poursuites).
                    <br>
                    De ce fait, si le juge admet, l’exception, cette solution ne vaut qu’à l’égard des parties aux procès. Cela signifie que si d’autres personnes sont poursuivies sur la base du même texte et si l’exception d’inégalité n’est pas soulevée, elles pourraient être condamnées.
                    <br>
                    <br>
                    <i> B- Qu’en est-il des règlements ? </i>
                    <br>
                    <br>
                    En ce qui concerne les règlements, la même solution vaudrait pour le contrôle de la légalité externe. Par contre pour le pouvoir de contrôle de la légalité interne, le problème reste entier. La jurisprudence a, dès avant 1960 reconnu par un décret, un tel pouvoir au juge pénal français.
                    <br>
                    <br>
                    <br>
                   <strong> 2️⃣- Les devoirs du juge répressif</strong>
                    <br>
                    <br>
                    <i>A- Le juge répressif doit respecter les principes régissant l’application de la loi pénale dans le temps. </i>
                    <br>
                    <br>
                    Il ne peut faire rétroagir une loi pénale plus sévère (Art. 20 C.P). Il doit appliquer immédiatement une loi pénale plus douce.
                    <br>
                    <br>
                    <i> B- Le juge répressif doit appliquer strictement la loi pénale </i>
                    <br>
                    <br>
                    Il doit procéder à une confrontation rigoureuse entre les faits reproches et le texte qui est applicable. Si les faits ne sont susceptibles d’aucune qualification pénale, le juge ne peut prononcer aucune sanction.
                    <br>
                    <br>
                    <i> C- Il doit interpréter strictement la loi pénale </i>
                    <br>
                    <br>
                    Il signifie qu’en présence d’un acte A, non expressément prévu et réprimé par la loi pénale, mais analogue (ressemblant beaucoup) à un autre acte B, constituant une infraction, le juge ne peut appliquer, les pénalités prévues pour l’acte B.
                    En effet, l’extension d’un texte à une situation voisine mais non expressément prévue, constitue un raisonnement par analogue. Celui-ci est formellement interdit par l’article 13 alinéa 2 du Code pénal.
                    Sans cette interdiction, le juge aurait le pouvoir de créer des infractions. En vertu donc de cette disposition de l’article 13 al. 2 du C.P, le principe de légalité n’est pas compatible avec les incriminations larges. La règle de l’interprétation stricte qui constitue une des règles les plus importantes du droit pénal doit être précisé à trois points de vue :
                    <br>
                    1- Tout d’abord, en présence d’une loi obscure et douteuse, cette règle n’autorise pas un refus d’interprétation de la part du juge. Celui-ci doit utiliser tous les moyens à sa disposition pour en découvrir le sens.
                    <br>
                    2- Ensuite, cette règle n’interdit pas au juge de rectifier une erreur matérielle, c’est-à-dire de rédaction.
                    <br>
                    3- En outre, il est permis au juge d’appliquer un texte à des situations qui ne pouvaient être prévues à l’époque de la rédaction de celui-ci. Ce raisonnement qui permet de « moderniser » un texte et qui n’est pas interdit par la règle de l’interprétation restrictive de la loi pénale, s’appelle une interprétation téléologique.
                    L’interprétation téléologique de la loi pénale consiste à adapter la loi pénale lors de son application par le juge pénal en empruntant l’esprit du législateur au moment où il l’édictait. Ex : la réglementation sur la navigation des bateaux à vapeur sans prévoir celle des bateaux à gaz.
                    En effet, il est nécessaire d’adapter la loi répressive aux formes nouvelles de délinquance, alors même que le législateur lorsqu’il l’édictait, en ignorait les effets du progrès.
                    <br>
                    <br>
                   <i> D- Le juge répressif ne peut prononcer que les peines prévues par la loi, dans les limites et les conditions légales.</i>
                    <br>
                    <br>
                    Art. 19 C.P : « Nul ne peut être poursuivi ou jugé en raison d’un fait qui aux termes d’une disposition nouvelle ne constitue plus une infraction ».
                    Si antérieurement à cette disposition, des peines et mesures de sûreté ont été prononcées pour ce fait, il est mis fin à leur exécution à l’exception de l’internement dans une maison de santé et de la confiscation-mesure de police.
                    Toutefois, en cas d’infraction à une disposition pénale sanctionnant une prohibition ou une obligation limitée à une période déterminée, les poursuites sont valablement engagées ou continuées et les peines et mesures de sûreté exécutées nonobstant la fin de cette période.
                    </div>
                  </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.az {
    position: relative;
    margin-left: 35%;
}
.box{
    position: relative;
    margin-top: 50px;
    width: 650px;
    height: 400px;
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