<template>
    <div class="h-screen Register2">
        <img src="../assets/cloud.png" class="cloud-first" alt="cloud1" />
        <img src="../assets/cloud.png" class="cloud-second" alt="cloud2" />
        <img src="../assets/diploma.png" class="diploma" alt="diploma" />
        <img src="../assets/student.png" class="student" alt="student" />
        <img src="../assets/balance.png" class="balance" alt="balance" />
            <div className="formulaire">
                <form action="/">
                    <img src="../assets/logo.png" className="logo" alt="logo"/>
                    <a className="connect" @click="$router.push('/Logi')">Se connecter</a>
                    <a className="account" @click="$router.push('/Register1')">Créer un compte</a>
                    <select name="select" id="select">
                        <option value="">Choisis ton année</option>
                        <option value="1">1ere Année</option>
                        <option value="2">2ème Année</option>
                        <option value="3">3ème Année</option>
                        <option value="3">4ème Année</option>
                        <option value="3">5ème Année</option>
                    </select>
                    <input type="name" name="nom" id="nom" placeholder="Nom" required autofocus />
                    <input type="name" name="prenom" id="nom" placeholder="Prénom" required autofocus/>
                    <a class="number" href='#'>2/2</a>
                    <button type ="submit" class="button-s" >Créer</button>
                </form>
            </div>
    </div>

</template>

<style scoped>

.Register2 {
    background-color: #e98a1e;
}
.cloud-first {
  position: fixed;
  height: 85%;
  left: 56%;
  top: -30%;
}
.cloud-second {
  position: fixed;
  height: 85%;
  right: 53%;
  bottom: -35%;
}
.diploma {
  height: 20%;
  position: fixed;
  right: 15%;
  top: 23%;
}
.student {
  height: 40%;
  position: fixed;
  right: 70%;
  bottom: -10%;
}
.balance {
  height: 20%;
  position: fixed;
  right: 80%;
  top: 250px;
  rotate: 15deg;
}
.formulaire {
  border: 2px solid;
  box-shadow: 0px 6px rgba(25, 24, 24, 0.466);
  position: fixed;
  top: 20%;
  left: 36%;
  width: 350px;
  height: 500px;
  background-color: white;
  border-radius: 5%;
}
select{
  width: 80%; 
  height: 36px; 
  border-radius: 15px 15px; 
  background-color: #fff; 
  border: solid 1px #020202;
  box-shadow: 0px 1px rgba(25, 24, 24, 0.466);
  position: relative;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 50%; 
  padding-left: 20px;
}
input[type=name]{
  width: 80%; 
  height: 36px; 
  border-radius: 15px 15px; 
  background-color: #fff; 
  border: solid 1px #000000;
  box-shadow: 0px 1px rgba(25, 24, 24, 0.466);
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 10%; 
  padding-left: 10px;
}

.logo {
  position: fixed;
  height: 10%;
  left: 46.5%;
  top: 22%;
}
.connect {
  font-weight: lighter;
  text-decoration: none;
  color: #000000;
  position: absolute;
  top: 25%;
  left: 6%;
  cursor: pointer;
}
.account {
  font-weight: bold;
  text-decoration: none;
  color: #000000;
  position: absolute;
  top : 25%;
  right: 6%;
  cursor: pointer;
}
.number {
  font-size: 70%;
  color: #000000;
  text-decoration: none;
  position: absolute;
  top : 75%;
  right: 6%;
}
.connect::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;left: 0;
  background-color: black;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.connect:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.account::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;left: 0;
  background-color: black;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.account:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.number::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;left: 0;
  background-color: black;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.number:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

button.button-s {
  font-size: 14px;
  font-weight: 600;
  color: white;
  padding: 3% 5% 3% 5%;
  margin-left: 25%;
  margin-top: 20%;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  width: 40%; 
  border-radius: 10px 10px; 
  background-color: #e98a1e; 
  box-shadow: 0 3px rgba(233,139,30, 0.822);
  transition: all 0.1s linear 0s; 
  top: 0px;
  position: relative;
}
button.button-s:hover {
  background: #f47303;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #f47303,
              0 0 25px #f47303,
              0 0 50px #f47303,
              0 0 100px #f47303;
  top: 3px;
}
</style>