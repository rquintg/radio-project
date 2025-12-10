import { SpeedInsights } from '@vercel/speed-insights/react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import MainRouter from "./routes";
import Footer from "./layouts/footer";

import avatar from '../src/img/logo_punk_medallo.jpg';
import './App.css';


function App() {
  return (
   <div>
       <MainRouter/>
       <Footer />
       <SpeedInsights />
    
      <FloatingWhatsApp
        phoneNumber="573014453392"
        accountName="Punk Medallo"
        statusMessage="Generalmente responde rapido"
        chatMessage="Hola, ¿en qué puedo ayudarte?"
        placeholder="Escribe un mensaje..."
        avatar={avatar}
        darkMode
        allowEsc
        allowClickAway
        notification
        notificationDelay={10}
        buttonClassName='whatsappButton'
      />
   </div>
   
  );
}

export default App;
