"use client"
import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-56">
      <div className="rounded-full bg-gray-300 dark:bg-green-800 p-5 px-10">
        <div className="text-9xl text-center dark:text-white font-medium">
          {time.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default Clock;