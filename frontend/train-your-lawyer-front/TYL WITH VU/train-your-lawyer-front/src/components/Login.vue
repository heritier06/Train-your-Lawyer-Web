<template>
    <div class="Login">
            <img src="../assets/cloud.png" className="cloud-first" alt="cloud1"/>
            <img src="../assets/cloud.png" className="cloud-second" alt="cloud2"/>
            <img src="../assets/diploma.png" className="diploma" alt="diploma"/>
            <img src="../assets/student.png" className="student" alt="student"/>
            <img src="../assets/balance.png" className="balance" alt="balance"/>
            <div className="formulaire">
                <form action="/">
                    <img src="../assets/logo.png" className="logo" alt="logo"/>
                    <a className="connect-lo" href="#">Se connecter</a>
                    <router-link to="Register1" className="account-lo">Créer un compte</router-link>
                    <input type="email" name="e-mail" id="mail" placeholder="E-mail" required/>
                    <input type="password" name="password" id="pass" placeholder="Mot de passe" required/>
                    <div className="me">
                        <input type="checkbox" name="rememberme" id="rememberme" value="1"/>
                        <label for="rememberme">Se souvenir de moi</label>
                    </div>
                    <a className="forgot" href='#'>Mot de passe oublié?</a>
                    <a className="button" href="#">Connexion</a>
                </form>
            </div>
    </div>
</template>

<style scoped>

.Login {
  background-color: blue;
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
input[type=email]{
  width: 80%; 
  height: 36px; 
  border-radius: 15px 15px; 
  background-color: #fff; 
  border: solid 1px #020202;
  box-shadow: 0px 1px rgba(25, 24, 24, 0.466);
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 55%; 
  padding-left: 10px;
}
input[type=password]{
  width: 80%; 
  height: 36px; 
  border-radius: 15px 15px; 
  background-color: #fff; 
  border: solid 1px #000000;
  box-shadow: 0px 1px rgba(25, 24, 24, 0.466);
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 5%; 
  padding-left: 10px;
}
.logo {
  position: fixed;
  height: 10%;
  left: 46.5%;
  top: 22%;
}
.connect-lo {
  font-weight: bold;
  text-decoration: none;
  color: #000000;
  position: absolute;
  top: 25%;
  left: 6%;
}
.account-lo {
  font-weight: lighter;
  text-decoration: none;
  color: #000000;
  position: absolute;
  top : 25%;
  right: 6%;
}
.forgot {
  font-size: 70%;
  color: #000000;
  text-decoration: none;
  position: absolute;
  top : 75%;
  right: 6%;
}
.connect-lo::after {
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
.connect-lo:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.account-lo::after {
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
.account-lo:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.forgot::after {
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
.forgot:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.me {
  color: #000000;
  font-size: 80%;
  position: absolute;
  top: 65%;
  left: 8%;
}
a.button {
  font-size: 14px;
  font-weight: 600;
  color: white;
  padding: 3% 5% 3% 5%;
  margin-left: 25%;
  margin-top: 40%;
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
a.button:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
  top: 3px;
  /* background-color:#000000;
  box-shadow: none; */
}
</style>
