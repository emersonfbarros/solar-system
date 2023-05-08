import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSytem';

function App() {
  return (
    <>
      <Header />
      <main>
        <SolarSystem />
        <Missions />
      </main>
      <Footer />
    </>
  );
}

export default App;
