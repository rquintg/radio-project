import './App.css';
import NavBar from './layouts/navBar';
import Home from './layouts/home';
import PunkPlayer from "./components/webPlayer";
import Footer from "./layouts/footer";

function App() {
  return (
   <div>
       <NavBar />
       <Home />
       <PunkPlayer/>
       <Footer />
   </div>
  );
}

export default App;
