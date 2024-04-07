"use client"
import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-9xl text-center m-2 dark:text-white font-medium">
      {time.toLocaleTimeString()}
    </div>
  );
};

export default Clock;