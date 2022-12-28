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
                    <button class="c-6" @click="$router.push('/VidPenal')">Vidéo de cours</button>
                    <button class="c-3" @click="$router.push('/QcmPenal')">QCM</button>
                    <button class="c-4" @click="$router.push('/Register1')">Mind map 🔒</button>
                    <button class="c-5" @click="$router.push('/Register1')">Flash cards 🔒</button>
                    <button class="c-2"  @click="$router.push('/Register1')">Fiche de révision 🔒</button>
                </div>
            </div>
            <div class="lesson_">
                
                <div class="scroll">
                    <p class="mt-12 text-xl  text-center">&#x1F468;&#x1F3FE;&#x200D;&#x2696;&#xFE0F; Droit Pénale - Séance 1 - Les infractions</p>
                    <hr class="mt-5">
                    <p class="mt-12 ml-5 text-2xl">&#x1F4DA; Cours Optimisés</p>
                    <div class="text">
                    <br>
                        Les elements constitutifs de l'infraction
                        <br>
                        <br>
                        Il existe trois types d'infraction:
                        <br>
                        <br>
                        Les elements constitutifs de l'infraction: L'element legal
                        <br>
                        <br>
                        L'infraction n'existe que si elle est prévue par un texte. En effet, en vertu du principe de la
                        légalité des délits et des peines (ou principe de la légalité criminelle), seule la loi peut déterminer
                        ce qui constitue une infraction et les peines applicables (article 111-3 du Code pénal).
                        <br>
                        <br>
                        Un élément matériel : il s'agit du comportement réprimé par la loi. Généralement, l'infraction
                        sera constituée si le comportement a produit le résultat visé par le texte. Mais parfois,
                        l'infraction sera constituée alors même que le comportement n'a pas produit le résultat redouté.
                        C'est ce que nous verrons dans la suite de cet article.
                        <br>
                        <br>
                        Un élément moral : il s'agit de l'attitude psychologique de l'auteur du comportement réprimé
                        par la loi. Selon les infractions, l'auteur peut avoir agi avec intention ou par imprudence. Nous
                        verrons également cela dans la suite de cet article.
                        <br>
                        <br>
                        📚Les elements constitutifs de l'infraction: L'element materiel
                        <br>
                        <br>
                        Ainsi que nous l'avons exposé ci-dessus, l'élément matériel fait partie des 3 éléments
                        constitutifs de l'infraction. Il s'agit avant tout du comportement que le texte d'incrimination
                        réprime.
                        <br>
                        <br>
                        📚Le comportement
                        <br>
                        <br>
                        Les infractions de commission et les infractions d'omission
                        <br>
                        <br>
                        En général, une infraction correspond à un comportement positif (un individu fait ce que la loi
                        interdit de faire). On parle d'infraction par commission. Exemples : un meurtre, un viol…
                        <br>
                        <br>
                        Mais parfois, l'infraction correspond à une abstention (un individu s'abstient de faire ce que la
                        loi prescrit). On parle d'infraction par omission. Exemple : l'omission de porter assistance à
                        une personne en péril (article 223-6 alinéa 2 du Code pénal).
                        <br>
                        <br>
                        ✏ Les infractions instantanées et les infractions continues
                         <br>
                         <br>
                         Les infractions instantanées sont celles qui se réalisent en un trait de temps. Exemple : le vol.
                         <br>
                         <br>
                         ✏ Les infractions continues sont celles dont l'exécution se prolonge dans le temps. Exemple
                         : le recel (article 321-1 du Code pénal).
                         <br>
                         <br>
                         ⚖️Pour les infractions continues :
                         <br>
                         <br>
                         Le point de départ du délai de prescription de l'action publique est fixé au jour où l'activité
                        délictueuse prend fin. Exemple : au jour où le receleur se dessaisit de la chose.
                        Si une loi nouvelle plus sévère entre en vigueur pendant la commission de l'infraction, elle
                        s'appliquera à cette infraction qui s'est prolongée après l'entrée en vigueur.
                         <br>
                         <br>
                         Les infractions simples, les infractions complexes et les infractions d'habitude
                         <br>
                         <br>
                        Les infractions simples sont celles qui ne sont constituées que par un seul acte. Exemple : le
                        vol.
                        <br>
                        <br>
                        ⚖️Les infractions complexes sont celles qui sont constituées par plusieurs actes de nature
                        différente. Exemple : l'escroquerie est constituée par un mensonge ou des manœuvres
                        frauduleuses, et la remise d'une chose (article 313-1 du Code pénal). La réunion de ces actes
                        est nécessaire pour constituer l'infraction.
                        <br>
                        <br>
                        ⚖️Les infractions d'habitude sont celles qui sont constituées par la répétition de plusieurs
                        actes de même nature (commettre l'acte une seule fois ne constitue pas une infraction). Exemple
                        : l’exercice illégal de la médecine (article L4161-1 du Code de la santé publique). L'infraction
                        est constituée à partir du deuxième acte médical.
                        <br>
                        <br>
                        ⚖️Pour les infractions complexes et d'habitude, le point de départ du délai de prescription de
                        l'action publique est fixé au dernier acte.
                        <br>
                        <br>
                        Exemples :
                        <br>
                        <br>
                        📚En matière d'escroquerie, le point de départ du délai de prescription est fixé à la date de la
                        remise de la chose.
                        <br>
                        <br>
                        📚En matière d'exercice illégal de la médecine, le point de départ du délai de prescription est fixé
                        au dernier acte médical.
                        <br>
                        <br>
                        ✏️Le résultat du comportement
                        <br>
                        <br>
                        Généralement, l'élément matériel de l'infraction est constitué si le comportement a produit le
                        résultat visé par le texte d'incrimination. On parle d'infraction consommée.
                        <br>
                        <br>
                        Mais parfois, l'élément matériel de l'infraction est constitué alors même que le comportement
                        n'a pas produit le résultat visé. On parle d'infraction tentée.
                        <br>
                        <br>
                        ✏️L'infraction consommée
                        <br>
                        <br>
                        Toute infraction vise à protéger une valeur (exemples : la vie, l'intégrité physique…).
                        Généralement, l'élément matériel de l'infraction suppose une atteinte à cette valeur. Mais
                        parfois, un comportement simplement susceptible de porter atteinte à cette valeur est suffisant
                        pour que l'élément matériel soit constitué (sans même que l'atteinte n'ait à se produire). C'est
                        pourquoi parmi les infractions consommées, on distingue les infractions matérielles des
                        infractions formelles.
                        <br>
                        <br>
                        Les infractions matérielles sont celles qui requièrent la survenance du résultat redouté.
                        <br>
                        <br>
                        Exemple:
                        <br>
                        <br> 
                        Le meurtre est une infraction matérielle ; il est constitué à la mort de la victime.
                        Les infractions formelles sont celles qui ne requièrent pas la survenance du résultat redouté.
                        <br>
                        <br>
                        Exemple :
                        <br>
                        <br>
                        L'empoisonnement est une infraction formelle ; le simple fait d'attenter à la vie
                        d'autrui par l'emploi ou l'administration de substances de nature à entraîner la mort suffit à 
                        constituer l'infraction (article 221-5 du Code pénal). Ainsi, l'infraction sera consommée même
                        si la victime survit.
                        <br>
                        <br>
                        Pour les infractions matérielles, le point de départ du délai de prescription de l'action publique
                        est fixé au jour de la survenance du résultat.
                        Pour les infractions formelles, le point de départ du délai de prescription de l'action publique
                        est fixé au jour du comportement.
                        <br>
                        <br>
                        ✏️L’infraction tentée
                        <br>
                        <br>
                        La tentative est l’activité tendant à la commission d’une infraction mais qui n’aboutit pas au
                        résultat incriminé par la loi
                        <br>
                        <br>
                        La tentative est punissable si 2 conditions sont réunies (article 121-5 du Code pénal).
                        Il faut d’abord un commencement d’exécution : le simple projet de commettre une infraction
                        ne suffit pas à constituer la tentative. Il faut que le projet se soit concrétisé par des actes qui ne
                        soient pas de simples actes préparatoires. Il existe 2 conceptions du commencement
                        d’exécution:
                        <br>
                        <br>
                        1️⃣La conception objective : Selon la conception objective, le commencement d’exécution
                        requiert l’accomplissement d’un acte qui est apte à causer le résultat et proche de sa réalisation.
                        Exemple : Le fait de remettre des fonds à un tueur à gages ayant finalement renoncé à passer à
                        l’acte « n’a pas pour conséquence directe et immédiate de consommer le crime d’assassinat »
                        (Cass. crim., 25 oct. 1962, Lacour). Dès lors, il ne s’agit pas d’une tentative de meurtre mais
                        d’un acte préparatoire.
                        <br>
                        2️⃣La conception subjective : Selon la conception subjective, le commencement d’exécution se
                        caractérise par l’intention de l’agent, sa volonté de commettre l’infraction.
                        <br>
                        Au final, la jurisprudence n’a pas tranché entre ces 2 conceptions, et retient une conception
                        mixte : pour qu’il y ait commencement d’exécution, elle exige des actes qui tendent «
                        directement au délit avec intention de le commettre » (Cass. crim., 11 juin 1975, n° 75-90.235).
                        <br>
                        ✏️La deuxième condition pour que la tentative soit punissable est l’absence de désistement
                        volontaire : même en cas de commencement d’exécution, la tentative ne sera pas punissable si
                        l’agent décide de renoncer à commettre l’infraction. Pour que la tentative soit punissable, il faut
                        donc que la défaillance du résultat résulte de circonstances indépendantes de la volonté de
                        l’agent. Exemple : en cas d’arrestation par la police.
                        <br>
                        A noter que la tentative est également punissable lorsque l’agent n’a simplement pas réussi à
                        atteindre le résultat. Exemple : l’agent qui tire sur sa cible mais qui la manque.
                        <br>
                        <br>
                        La tentative sera réprimée de manière différente selon le type d’infraction tentée. Ainsi, la
                        tentative est : toujours punissable si l’infraction tentée est un crime.
                        Punissable si l’infraction tentée est un délit seulement si le texte le prévoit expressément.
                        Jamais punissable si l’infraction tentée est une contravention.
                        L’auteur de la tentative est assimilé à l’auteur de l’infraction ; il encourt la même sanction
                        (article 121-4 du Code pénal).
                    </div>
                  </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

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