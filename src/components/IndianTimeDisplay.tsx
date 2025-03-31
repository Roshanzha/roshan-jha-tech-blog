
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

const IndianTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const formattedTime = formatInTimeZone(
    currentTime,
    'Asia/Kolkata',
    'MMM d, yyyy • hh:mm:ss a'
  );
  
  return (
    <div className="text-sm font-medium transition-colors dark:text-gray-300">
      <span>{formattedTime} IST</span>
    </div>
  );
};

export default IndianTimeDisplay;
