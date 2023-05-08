import { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div className="solar-system">
        <Title headline="Planets" />
        <div className="planets">
          {
            planets.map((planet) => (
              <PlanetCard
                key={ planet.name }
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
