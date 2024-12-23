import React from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
//Icons que podem ser vistos no site www.feathericons.com

import './styles.css';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register(){
    console.log("Oie");
    return(
        <div className='register-container'>
            <div className='content'>
                <section>
                    <img src={logoImg} alt="logo" />

                    <h1>Cadastro</h1>
                    
                    <p>Faça seu cadasro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                   
                    <Link className=".back-link" to="/">
                      <FiArrowLeft Size={16} color="#E02841"/>
                      Não tenho cadastro
                    </Link>
                </section>
                <form>
                    <input placeholder='Nome da ONG'/>
                    <input type="email" placeholder='E-mail'/>
                    <input placeholder='WhatsApp'/>
                    
                    <div className='input-group'>
                        <input placeholder='Cidade'/>
                        <input placeholder='UF' style={{width: 80}} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );   
}