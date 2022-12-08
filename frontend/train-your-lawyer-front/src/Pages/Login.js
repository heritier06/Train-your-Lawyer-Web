import cloud from '../Assets/cloud.png';
import cloud2 from '../Assets/cloud.png';
import diploma from '../Assets/diploma.png';
import student from '../Assets/student.png';
import balance from '../Assets/balance.png';
import logo from '../Assets/logo.png';
import React from 'react';
import './Login.css'

function Login() {
    return (
    <div className="Login">
            <img src={cloud} className="cloud-first" alt="cloud1"/>
            <img src={cloud2} className="cloud-second" alt="cloud2"/>
            <img src={diploma} className="diploma" alt="diploma"/>
            <img src={student} className="student" alt="student"/>
            <img src={balance} className="balance" alt="balance"/>
            <div className="formulaire">
                <form action="/">
                    <img src={logo} className="logo" alt="logo"/>
                    <a class="connect" href='#'>Se connecter</a>
                    <a class="account" href='#'>Créer un compte</a>
                    <input type="email" name="e-mail" id="mail" placeholder="E-mail" required></input>
                    <input type="password" name="password" id="pass" placeholder="Mot de passe" required></input>
                    <div class="me">
                        <input type="checkbox" name="rememberme" id="rememberme" value="1"></input>
                        <label for="rememberme">Se souvenir de moi</label>
                    </div>
                    <a class="forgot" href='#'>Mot de passe oublié?</a>
                    <a class="button" href="#">Connexion</a>

                    {/* <h4>Se connecter</h4>                    
                    <a class="register" href="dd">Créer un compte </a>
                    <input type="email" name="e-mail" id="mail" placeholder="E-mail" required></input>
                    <input type="password" name="password" id="pass" placeholder="Mot de passe" required></input>
                    <div>
                        <input type="checkbox" name="rememberme" id="rememberme" value="1"></input>
                        <label for="rememberme">Se souvenir de moi</label>
                    </div>
                    <a class="forgot" href="ddd">Mot de passe oublié</a>
                    <a class="button" href="ddd">Connexion</a> */}
                </form>
            </div>
    </div>
    );
}

export default Login