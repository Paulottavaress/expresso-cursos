import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from '../../utils/FormatString';
import ptBr from '../../internationalization/pt-br';

const Countdown = ({
  endDt,
  timeZone
}) => {
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  endDt = new Date(endDt + ` ${timeZone}`);
  endDt = new Date(endDt.setDate(endDt.getDate() + 1));

  const formatTime = (time) => (time < 10) ? `0${time}` : time;

  const updateCountdown = () => {
    const startDt = new Date();
    const totalSeconds = (endDt - startDt) / 1000;

    setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
    setHours(formatTime(Math.floor(totalSeconds / 3600) % 24));
    setMinutes(formatTime(Math.floor(totalSeconds / 60) % 60));
    setSeconds(formatTime(Math.floor(totalSeconds) % 60));
  };

  useEffect(() => {
    updateCountdown();
    setInterval(() => {updateCountdown();}, 1000);
  }, []);

  return (
    <>
      <div className='countdown-container d-flex gap-1'>
        <p className='text-danger m-0 h6 font-weight-bold'><span className='text-dark'>{capitalizeFirstLetter(ptBr.countdown['finishesIn'])} </span>{days} {ptBr.countdown['days']}, {hours} {ptBr.countdown['hours']}, {minutes} {ptBr.countdown['minutes']} {ptBr.countdown['and']} {seconds} {ptBr.countdown['seconds']} - {timeZone}</p>
      </div>
    </>
  )
};

Countdown.propTypes = {
  endDt: PropTypes.string.isRequired,
  timeZone: PropTypes.string,
};

Countdown.defaultProps = {
  timeZone: 'GMT-03',
};

export default Countdown;