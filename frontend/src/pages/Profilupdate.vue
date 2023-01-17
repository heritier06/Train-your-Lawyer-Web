<template>
    <div class="Profil">
        <div class="nav-bar">
            <img src="../Assets/logo.png" class="logo">
            <a class="name" href="#">Train your Lawyer</a>
            <div class="vertically"></div>
            <!-- <a class="acceuil" @click="$router.push('/')">Acceuil</a> -->
            <a class="cours" @click="$router.push('/Lesson')">Cours</a>
            <a class="acceuil" @click="$router.push('/Profil')">Profil</a>
            <a class="article" href="#">Article</a>
            <a class="packs" href="#">Nos Packs</a>
            <button class="btn-try">Essayer</button>
            <button class="btn-connect" @click="$router.push('/Login')">Connexion</button>
            <div class="vertically-2"></div>
        </div>
        <div class="box">
            <img src="">
            <input type="file" name="" id="file" accept="image/*">
            <label for="file">Modifier</label>
            <input type="text" name="" placeholder="Nom">
            <input type="text" name="" placeholder="Prénom">
            <input type="text" name="" placeholder="Année">
            <input type="text" name="" placeholder="Email">
            <input type="text" name="" placeholder="Tél">
            <button style="float: left">Valider</button>
            <button style="float: right">Annuler</button>
        </div>
    </div>
</template>


class="Profil"
<style scoped>

.acceuil{
    position: absolute;
    top: 20px;
    left: 280px;
    font-size: 18px;
}

.cours{
    position: absolute;
    top: 20px;
    left: 470px;
    font-size: 18px;
}
.article{
    position: absolute;
    top: 20px;
    left: 650px;
    font-size: 18px;
}
.packs{
    position: absolute;
    top: 20px;
    left: 800px;
    font-size: 18px;
}
.acceuil:hover, .cours:hover, .article:hover, .packs:hover {
    font-weight: bold;
}
.btn-try{
    position: absolute;
    top: 10px;
    left: 1000px;
    padding: 1%;
    padding-left: 2%;
    padding-right: 2%;
    background-color:#E3E3E3;
    border-radius: 15px;
}
.btn-try:hover {
    background: #E98B1E;
    color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 5px #E98B1E,
                0 0 25px #E98B1E,
                0 0 50px #E98B1E,
                0 0 100px #E98B1E;
}
.btn-connect{
    position: absolute;
    top: 10px;
    left: 1200px;
    color: white;
    padding: 1%;
    padding-left: 2%;
    padding-right: 2%;
    background-color: #E98B1E;
    border-radius: 15px;
}
.btn-connect:hover {
    background: #E98B1E;
    color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 5px #E98B1E,
                0 0 25px #E98B1E,
                0 0 50px #E98B1E,
                0 0 100px #E98B1E;
}
.vertically-2 {
    border-left: 1px solid black;
    position: absolute;
    left: 1160px;
    top: 20px;
    height: 30px;
}
.nav-bar {
    position: sticky;
    /*background-color: rgb(248, 0, 0); */
    margin-left: 1.5%;
    margin-right: 0%;
    height: 70px;
    width: 1400px;
    border-radius: 10px 10px;
    box-shadow: 5px 5px 18px grey;
    border: 0px solid;
}
.logo {
    height: 50px;
    position: absolute;
    top: 10px;
    left: 30px;
}
a.name{
    position: absolute;
    top: 25px;
    left: 75px;
    font-weight: bold;
}
.vertically {
    border-left: 1px solid black;
    position: absolute;
    left: 230px;
    top: 20px;
    height: 30px;
}
.box {
    justify-content: center;
    box-sizing: border-box;
    border: 2px solid;
    box-shadow: -3px -3px 7px #ffffff73,
        3px 3px 5px rgba(94, 104, 121, 0.288);
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    margin-top: 50px;
    overflow: hidden;
    float: center;
    background-color: #fff;
    width: 360px;
    height: 600px;
    margin-top: 30px;
    margin-left: 20%;
}

img {
    float: center;
    box-sizing: border-box;
    width: 149px;
    height: 149px;
    border-radius: 50%;
    margin: auto;
    border: 5px solid black;
    padding: 3px;
    background-color: white;
}

input[type="text"],
input[type="email"] {
    display: block;
    box-sizing: border-box;
    background: none;
    color: black;
    margin-bottom: 30px;
    padding: 10px;
    width: 320px;
    height: 32px;
    border: none;
    border-bottom: 1px solid black;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 15px;
    transition: 0.2s ease;
}

input[type="text"]:focus,
input[type="email"]:focus {
    border-bottom: 2px solid black;
    border-bottom-right-radius: 20px;
    color: #3498db;
    transition: all 0.3s;
}

button {
    border: 1px solid black;
    color: black;
    height: 30px;
    width: 100px;
    border-radius: 5px;
    margin: 0px;
    transition: all 0.3s;
}

button:hover {
    background-color: #e98a1e;
    transform: scale(1.1);
}

input[type="file"] {
    display: none;
}

label {
    box-sizing: border-box;
    font-size: 20px;
    color: black;
    border: 1px solid black;
    padding: -1px 10px;
    border-radius: 5px;
    transition: 0.2s ease;
}

label:hover {
    background-color: #e98a1e;
    color: black;
}

.box:hover {
    width: 360px;
    height: 600px;
    border-radius: 5px;
}

/* .box:hover img {
    width: 100px;
    height: 100px;
    margin: 20px;
} */
</style>