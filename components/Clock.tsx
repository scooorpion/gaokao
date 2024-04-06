"use client"
import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-6xl text-center dark:text-white font-medium">
      {time.toLocaleTimeString()}
    </div>
  );
};

export default Clock;