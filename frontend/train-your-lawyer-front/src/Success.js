import cloud from './Assets/cloud.png';
import cloud2 from './Assets/cloud.png';
import diploma from './Assets/diploma.png';
import student from './Assets/student.png';
import balance from './Assets/balance.png';
import logo from './Assets/logo.png';
import man from './Assets/man.png';
import arrow from './Assets/arrow.png';

import verified from './Assets/verified.png';

import React from 'react';
import './Success.css'

function Success() {
    return (
    <div className="Success">
            <img src={cloud} className="cloud-first" alt="cloud1"/>
            <img src={cloud2} className="cloud-second" alt="cloud2"/>
            <img src={diploma} className="diploma" alt="diploma"/>
            <img src={man} className="man" alt="man"/>
            <div className="box">
                    <h3 class="Sucess">Votre compte a été créé avec succès !</h3>
                    <img src={verified} className="verified" alt="verified"/>
                    <img src={arrow } className="arrow" alt="arrow"/>
                    <a class="button" href="#">Suivant</a>

            </div>
    </div>
    );
}

export default Success