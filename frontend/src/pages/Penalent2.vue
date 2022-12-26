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
                    <p class="mt-12 text-xl  text-center">&#x1F468;&#x1F3FE;&#x200D;&#x2696;&#xFE0F; Entrainement Droit pénal general - Analyse d'arrêt</p>
                    <hr class="mt-5">
                    <p class="mt-12 ml-5 text-2xl">Analysez l’arrêt n° 207 du 6 août 1980 Affaire Margaret Acheampong reproduit ci-dessous.</p>
                    <div class="text">
                        <br>
                        LA COUR
                        <br>
                        Vu le dossier de la procédure instruite au Tribunal de Première Instance d’Abidjan contre la nommée Margaret Acheampong, né vers 1949 à Accra (R. Ghana), de Akwassi Acheampong et de Ashabia Amma, ménagère domiciliée à Abobo Gare, célibataire sans enfant, jamais condamné ni recensée, de nationalité ghanéenne ;
                        <br>
                        Inculpée d’enlèvement de mineur, placée sous mandat de dépôt le 13 avril 1978, et mise en liberté provisoire, le 17 avril 1980 ;
                        <br>
                        Vu le dépôt du dossier au greffe de la Chambre d’ Accusation conformément aux dispositions de l’article 197 ;
                        <br>
                        Vu le dépôt des pièces ;
                        <br>
                        Oui Monsieur le Conseiller Bouaffon en la lecture de son rapport ;
                        <br>
                        Oui Monsieur l’Avocat Général en ses réquisitions orales conforment à celles écrites ;
                        <br>
                        Après en avoir délibéré conformément à la loi, hors la présence du Ministère Public et du greffier ;
                        <br>
                        Considérant qu’il résulte des pièces du dossier de la procédure suivie du chef d’enlèvement de mineur à l’encontre de Margaret Acheampong, les faits suivants :
                        <br>
                        Le 7 mars 1978, au marché de Dorma-Ahinkro, en République du Ghana, Margaret Acheampong, une nationale ghanéenne, réussissait à kidnapper l’enfant appartenant à une n’autre nationale ghanéenne et à se faire remettre Richard Kablan Aboidje, enfant de celle-ci âgé d’un an environ, pour disparaître ensuite avec ledit enfant.
                        Celui-ci ne sera découvert que le 30 mars 1978 à Abobo-Gare (Sous-préfecture de Bingerville), grâce à Badu Yaw, Chef des Ghanéens à Adjamé et restituer à sa mère Béatrice Kwassi Aboidje le 4 avril 1987 par les fonctionnaires de la police du troisième arrondissement d’Adjamé.
                        <br>
                        Après avoir ainsi obtenu la restitution de son enfant, Béatrice Kwassi Aboidje arrivée à Abidjan le 2 avril 1978 en provenance du Ghana, regagnait son pays, non sans avoir auparavant déposé plainte contre Margaret Acheampong.
                        Celle-ci, arrêtée par la police d’Adjamé, inculpée d’enlèvement de mineur par le Juge d’instruction du 2ème Cabinet d’Abidjan le 15 avril 1978, reconnut son forfait.
                        <br>
                        Considérant qu’il s’évince des données qui précèdent, que le crime d’enlèvement de mineur imputé à Margaret Acheampong, arrêtée à Adjamé, a été commis hors du territoire de la République par une étrangère, crime qui ne figure pas sur la liste des infractions limitativement énumérés par l’article 663 du Code de Procédure Pénale ;
                        <br>
                        Considérant dès lors que les juridictions répressives ivoiriennes, notamment la Chambre d’Accusation, sont incompétentes à connaître dudit crime et qu’il convient de les déclarer telles, par interprétation a contrario des dispositions de l’article 663 susvisé et 52 du même code ;
                        Vu les réquisitions écrites de Monsieur le Procureur Général, ensemble l’article 216 du Code de Procédure Pénale ;
                        <br>
                        <br>
                        EN CONSÉQUENCE
                        <br>
                        Déclare incompétentes à connaître de la cause concernant Margaret Acheampong les juridictions répressives ivoiriennes, notamment, la Chambre d’Accusation de la Cour d’Appel d’Abidjan ;
                        Renvoie le Ministère Public à se mieux pourvoir…
                        <br>
                        Président : M. Hoguié
                        Conseillers : MM. Bouaffon et Ado
                        Avocat Général : M. Flolquet
                        Greffier : Me Djodje Ika
                        <br>
                        Question liées à l’arrêt
                        <br>
                        1) Identifier clairement le problème juridique traité par le Juge.
                        <br>
                        2) Identifier les règles de droit pénal ivoirien qui seraient applicables en l’espèce.
                        <br>
                        3) Indiquer la compréhension que vous avez de la solution adoptée par le juge.
                        <br>
                        4) Donnez votre point de vue sur la compatibilité de ces solutions avec les règles du droit pénal ivoirien.
                        <br>
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