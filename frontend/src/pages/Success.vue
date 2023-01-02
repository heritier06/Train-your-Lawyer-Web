<template>
    <div className="h-screen Success">
            <img src=../assets/cloud.png className="cloud-first" alt="cloud1"/>
            <img src=../assets/cloud.png className="cloud-second" alt="cloud2"/>
            <img src=../assets/diploma.png className="diploma" alt="diploma"/>
            <img src=../assets/man.png className="man" alt="man"/>
            <div className="box">
                    <h3 class="Sucess">Votre compte a été créé avec succès !</h3>
                    <img src=../assets/verified.png className="verified" alt="verified"/>
                    <img src=../assets/arrow.png className="arrow" alt="arrow"/>
                    <a class="button" @click="$router.push('/Pack')">Suivant</a>

            </div>
    </div>
    );
}
</template>

<script>

</script>

<style scoped>

.Success {
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
.man {
  height: 50%;
  position: fixed;
  right: 70%;
  bottom: 0%;
}
.box {
  border: 2px solid;
  box-shadow: 0px 6px rgba(25, 24, 24, 0.466);
  position: fixed;
  top: 30%;
  left: 30%;
  width: 480px;
  height: 200px;
  background-color: white;
  border-radius: 5%;
}

.verified {
  position: fixed;
  height: 10%;
  left: 44%;
  top: 40%;
}
.Sucess {
  font-weight: bold;
  text-decoration: none;
  color: #000000;
  position: absolute;
  top: 5%;
  left: 15%;
}
a.button {
  font-size: 14px;
  font-weight: 600;
  color: white;
  padding: 3% 5% 3% 5%;
  margin-left: 41%;
  margin-top: 50%;
  display: inline-block;
  text-decoration: none;
  text-align:center;
  width: 20%; 
  border-radius: 10px 10px; 
  background-color: #ffffff3b; 
  box-shadow: 0 3px rgba(233,139,30, 0.822);
  transition: all 0.1s linear 0s; 
  top: 0px;
  position: relative;
}
a.button:hover {
  background: #f35004;
  color: #ffffffff;
  border-radius: 5px;
  box-shadow: 0 0 5px #f35004,
              0 0 25px #f35004,
              0 0 50px #f35004,
              0 0 100px #f35004;
  top: 3px;
}
 
.arrow {
  position: fixed;
  height: 5%;
  top: 60%;
  right: 45%;
  bottom: 80%;
  animation: wobble 2s ease infinite;
}

@keyframes wobble {
  0% { transform: translateX(0%); }
  15% { transform: translateX(-25%) rotate(-5deg); }
  30% { transform: translateX(20%) rotate(3deg); }
  45% { transform: translateX(-15%) rotate(-3deg); }
  60% { transform: translateX(10%) rotate(2deg); }
  75% { transform: translateX(-5%) rotate(-1deg); }
  100% { transform: translateX(0%); }
}
a, button {
  cursor: pointer;
}
</style>