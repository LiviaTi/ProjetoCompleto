import React, {useState} from 'react';
import api from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
//Icons que podem ser vistos no site www.feathericons.com

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register(){
    const [name, setName] =useState('');
    const [email, setEmail] =useState('');
    const [whatsapp, setWhatsapp] =useState('');
    const [city, setCity] =useState('');
    const [uf, setUF] =useState('');

    const navigate = useNavigate();

    async function handleRegister(e){
            e.preventDefault();

            const data = {
                name,
                email,
                whatsapp,
                city,
                uf,
            }
            try{
                const response = await api.post('ongs', data);
                //await serve para esperar cadastrar tudo e quando usa o await é obrigatório utilizar o async
                alert(`Seu ID de acesso: ${response.data.id}`);
            
                navigate('/');
            }catch(err){
                alert('Erro no cadastro, tente novamente.');
            }
            
        }
        return(
            <div className='register-container'>
                <div className='content'>
                    <section>
                        <img src={logoImg} alt="logo" />

                        <h1>Cadastro</h1>
                        
                        <p>Faça seu cadasro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    
                        <Link className=".back-link" to="/">
                        <FiArrowLeft size={16} color="#E02841"/>
                        Não tenho cadastro
                        </Link>
                    </section>
                    <form onSubmit={handleRegister}>
                        <input 
                            placeholder='Nome da ONG'
                            value={name}
                            onChange={e => setName(e.target.value)}    
                        />
                        <input 
                            type="email" 
                            placeholder='E-mail'
                            value={email}
                            onChange={e => setEmail(e.target.value)}  
                        />
                        <input
                            placeholder='WhatsApp'
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)}  
                        />
                        
                        <div className='input-group'>
                            <input 
                                placeholder='Cidade'
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                            <input 
                                placeholder='UF' 
                                style={{width: 80}}
                                value={uf}
                                onChange={e => setUF(e.target.value)}
                            />
                        </div>

                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        );   
}