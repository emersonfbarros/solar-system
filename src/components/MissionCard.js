import { Component } from 'react';
import PropTypes from 'prop-types';
import { IoLocationSharp } from 'react-icons/io5';
import { BsCalendarEventFill } from 'react-icons/bs';
import { ImFlag } from 'react-icons/im';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <p className="mission-name" data-testid="mission-name">{ name }</p>
        <hr className="mission-divider" />
        <div className="wrapper-mission">
          <BsCalendarEventFill />
          <p className="mission-year" data-testid="mission-year">
            { year }
          </p>
          <IoLocationSharp />
          <p className="mission-country" data-testid="mission-country">
            { country }
          </p>
          <ImFlag className="flag-desination" />
          <p className="mission-destination" data-testid="mission-destination">
            { destination }
          </p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
