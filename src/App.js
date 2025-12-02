import { SpeedInsights } from '@vercel/speed-insights/react';

import './App.css';
import MainRouter from "./routes";
import Footer from "./layouts/footer";

function App() {
  return (
   <div>
       <MainRouter/>
       <Footer />
       <SpeedInsights />
   </div>
  );
}

export default App;
