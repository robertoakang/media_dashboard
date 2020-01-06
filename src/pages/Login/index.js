import React, { useState } from 'react';
import Carousel from 'nuka-carousel';

// import './App.scss';

import logo from '../../assets/mipp_white_h.png'

/* Importing images */
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';
import image5 from '../../assets/5.jpg';
import image6 from '../../assets/6.jpg';

import api from '../../services/api';

export default function Login({ history }) {    
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event){
    event.preventDefault();

    // const response = await api.post('/sessions', { email, password });
   
    // const { _id } = response.data;

    // localStorage.setItem('user' , _id);

    history.push('/dashboard');
  }

    return (
        <>    
          <div className="container">   
          <img src={logo} alt="MIPP" className="logotype"/>   
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">USUÁRIO</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Seu usuário cadastrado"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <label htmlFor="password">SENHA</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Sua senha cadastrada"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <button className="btn" type="submit">Entrar</button>
                </form>
            </div>
          </div>
          <Carousel 
            withoutControls 
            autoplay 
            autoplayInterval={2500}
            wrapAround
            pauseOnHover={false}
            className="slider">
              <img src={image1} alt="Imagem 1" />
              <img src={image2} alt="Imagem 2" />
              <img src={image3} alt="Imagem 3" />
              <img src={image4} alt="Imagem 4" />
              <img src={image5} alt="Imagem 5" />
              <img src={image6} alt="Imagem 6" />
          </Carousel> 
        </>
    );
}