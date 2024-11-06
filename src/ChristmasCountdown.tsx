import React, { useState, useEffect } from 'react';
import "./ChristmasCountdown.css";

// Define a React Functional Component named `ChristmasCountdown`
const ChristmasCountdown: React.FC = () => {
    // State variable to store the time remaining, initialized by calling `getTimeRemaining`
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  
    // useEffect hook to set up an interval that updates `timeRemaining` every second
    useEffect(() => {
      // Set up a timer that updates the state every 1 second (1000 milliseconds)
      const interval = setInterval(() => {
        setTimeRemaining(getTimeRemaining()); // Update state with new time remaining
      }, 1000);
  
      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(interval);
    }, []); // Empty dependency array means this effect only runs once, when the component mounts
  
    // Helper function to calculate the time remaining until Christmas
    function getTimeRemaining() {
      const now = new Date(); // Current date and time
      const currentYear = now.getFullYear(); // Get the current year
  
      // Set target Christmas date for the current year at midnight
      const christmas = new Date(`December 25, ${currentYear} 08:00:00`);
      
      // If the current date is after Christmas, set the target to next year’s Christmas
      if (now > christmas) {
        christmas.setFullYear(currentYear + 1);
      }
  
      // Calculate the difference in milliseconds between now and Christmas
      const difference = christmas.getTime() - now.getTime();
  
      // Convert the difference into days, hours, minutes, and seconds
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)), // Days remaining
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24), // Hours remaining
        minutes: Math.floor((difference / (1000 * 60)) % 60), // Minutes remaining
        seconds: Math.floor((difference / 1000) % 60), // Seconds remaining
      };
    }

  return (
    <div className="XmasTimer">
    <div className="XmasTitle">
        Time till Christmas
    </div>
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
    </div>
  );
};

export default ChristmasCountdown;