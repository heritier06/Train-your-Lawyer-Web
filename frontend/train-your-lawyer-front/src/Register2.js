import cloud from './Assets/cloud.png';
import cloud2 from './Assets/cloud.png';
import diploma from './Assets/diploma.png';
import student from './Assets/student.png';
import balance from './Assets/balance.png';
import logo from './Assets/logo.png';
import React from 'react';
import './Register2.css'

function Register2() {
    return (
    <div className="Register2">
            <img src={cloud} className="cloud-first" alt="cloud1"/>
            <img src={cloud2} className="cloud-second" alt="cloud2"/>
            <img src={diploma} className="diploma" alt="diploma"/>
            <img src={student} className="student" alt="student"/>
            <img src={balance} className="balance" alt="balance"/>
            <div className="formulaire">
                <form action="/">
                    <img src={logo} className="logo" alt="logo"/>
                    <a className="connect" href='#'>Se connecter</a>
                    <a className="account" href='#'>Créer un compte</a>
                    <select name="select" id="select">
                        <option value="">Choose a year</option>
                        <option value="1">1ere Année</option>
                        <option value="2">2ème Année</option>
                        <option value="3">3ème Année</option>
                        <option value="3">4ème Année</option>
                        <option value="3">5ème Année</option>
                    </select>
                    <input type="name" name="nom" id="nom" placeholder="Nom" required></input>
                    <input type="name" name="prenom" id="nom" placeholder="Prénom" required></input>
                    <a class="number" href='#'>2/2</a>
                    <a class="button" href="/Success">Créer</a>
                </form>
            </div>
    </div>
    );
}

export default Register2