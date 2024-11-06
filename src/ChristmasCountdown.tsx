import React, { useState, useEffect } from 'react';
import "./ChristmasCountdown.css";

const ChristmasCountdown: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeRemaining() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const christmas = new Date(`December 25, ${currentYear} 00:00:00`);
    
    // If it's already past Christmas this year, set the countdown to next year's Christmas
    if (now > christmas) {
      christmas.setFullYear(currentYear + 1);
    }

    const difference = christmas.getTime() - now.getTime();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="time-show">
        <div>
            <span>{timeRemaining.days}</span>
            <p>d</p>
        </div>
        <div>
            <span>{timeRemaining.hours}</span>
            <p>h</p>
        </div>
        <div>
            <span>{timeRemaining.minutes}</span>
            <p>m</p>
        </div>
        <div>
            <span>{timeRemaining.seconds}</span>
            <p>s</p>
        </div>
    </div>
  );
};

export default ChristmasCountdown;