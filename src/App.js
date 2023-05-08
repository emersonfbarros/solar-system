import './App.css';
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
    </>
  );
}

export default App;
