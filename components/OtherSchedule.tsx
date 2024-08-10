"use client";
import { useState, useEffect, useCallback } from 'react';

interface OtherScheduleProps {
  targetDate: string;
  title: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const OtherSchedule: React.FC<OtherScheduleProps> = ({ targetDate, title }) => {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const now = new Date();
    const target = new Date(targetDate); // 将 targetDate 转换为 Date 对象
    const difference = target.getTime() - now.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  return (
    <div className="text-center dark:text-white m-4">
      <p className="text-4xl mb-4">
        <div className='text-3xl font-bold mt-4 pb-5'>{title}</div>
        <div className="text-green-600 font-bold text-6xl">{timeLeft.days} days{' '}</div> 
        <span className="text-green-600 font-bold">{timeLeft.hours}</span> hours{' '}
        <span className="text-green-600 font-bold">{timeLeft.minutes}</span> minutes{' '}
        <span className="text-green-600 font-bold">{timeLeft.seconds}</span> seconds
      </p>
    </div>
  );
};

export default OtherSchedule;