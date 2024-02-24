import React from 'react';
import { TypeAnimation } from "react-type-animation";

export default function Header() {
  return (
    
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      background: 'linear-gradient(90deg, #3498DB 0%, #8EE5EE 100%)',
      borderRadius: '10px',
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
      marginBottom: '30px', 
    }}> 
      <div style={{ textAlign: 'center' }}> 
        <TypeAnimation
          sequence={[
            "Welcome!",
            1000,
            "Bienvenido!",
            1000,
            "受欢迎的",
            1000,
            "Benvenuto",
            1000,
            "Bem-vindo.",
            1000,
            "Willkommen",
            1000,
            "Alavidā",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          style={{
            fontSize: '3rem',
            color: '#fff',
            fontWeight: 'bold',
            margin: '0px',
            marginBottom: '10px',
            animation: '$fadeIn 1s ease-in-out',
          }} // Innovative animation styles
        />
        
      </div>
    </div>
  );
}

