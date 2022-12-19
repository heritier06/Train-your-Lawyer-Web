<template>
    <div class="h-screen Login">
      <img src="../assets/cloud.png" class="cloud-first" alt="cloud1" />
      <img src="../assets/cloud.png" class="cloud-second" alt="cloud2" />
      <img src="../assets/diploma.png" class="diploma" alt="diploma" />
      <img src="../assets/student.png" class="student" alt="student" />
      <img src="../assets/balance.png" class="balance" alt="balance" />
      <div class="formulaire">
            <form action="/" @submit.prevent="createPost">
                <img src="../assets/logo.png" class="logo" alt="logo" />
                <a class="connect-lo" @click="$router.push('/Login')">Se connecter</a>
                <a class="account-lo" @click="$router.push('/Register1')">Créer un compte</a>
                <input type="email" v-model="email" name="e-mail" id="mail" placeholder="E-mail" required autofocus/>
                <input type="password" v-model="password" name="password" id="pass" placeholder="Mot de passe" required autofocus />
                <div class="me">
                    <input type="checkbox" name="rememberme" id="rememberme" value="1" />
                    <label for="rememberme">Se souvenir de moi</label>
                </div>
                <a class="forgot" href="#">Mot de passe oublié?</a>
                <button class="button-s" type="submit">Connexion</button>
            </form>
        </div>
    </div>
</template>

<script>
function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
}
import axios from "axios";
export default {
  data() {
    return {
      /*title: "",
      description: "",
      body: "",
      author: "",
      date_posted: ""*/
      email: "",
      password: ""
    };
  },
  methods: {
    createPost() {
      let postData = {
        email: this.email,
        password: this.password
        /*title: this.title,
        description: this.description,
        body: this.body,
        author: this.author,
        date_posted: this.date_posted*/
      };
      this.__submitToServer(postData);
    },
    async __submitToServer(data) {
      let res = await axios.post("http://localhost:3000/users/login", data);
      let ress = JSON.stringify(res.data);
      console.log(ress);
      if (Object.keys(ress).length === 2) {
        console.log("Connexion failed!");
        this.email = "";
        this.password = "";
        alert("Wrong email or password");
      }
      else {
        console.log("Connexion success!");
        this.$router.push('/');
      }
    }
  }
};
</script>

<style scoped>
.Login {
  background-color: #e98a1e;
}
.cloud-first {
  position: fixed;
  top: -30%;
  left: 56%;
  height: 85%;
}.cloud-second {
  position: fixed;
  right: 53%;
  bottom: -35%;
  height: 85%;
}.diploma {
  position: fixed;
  top: 23%;
  right: 15%;
  height: 20%;
}
.student {
  position: fixed;
  right: 70%;
  bottom: -10%;
  height: 40%;
}
.balance {
   position: fixed;
   top: 250px;
   right: 80%;
   rotate: 15deg;
   height: 20%;
}
.formulaire {
  position: fixed;
  top: 20%;
  left: 36%;
  width: 350px;
  background-color: white;
  border: 2px solid;
  border-radius: 5%;
  height: 500px;
  box-shadow: 0px 6px rgba(25, 24, 24, 0.466);
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
  cursor: pointer;
}
.account-lo {
  font-weight: lighter;
  text-decoration: none;
  color: #000000;
  position: absolute;
  top : 25%;
  right: 6%;
  cursor: pointer;
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
button.button-s {
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