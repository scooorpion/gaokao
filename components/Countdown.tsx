"use client"
import { useState, useEffect } from 'react';

const Countdown = () => {
  // 定义目标日期（2025年6月7日）
  const targetDate = new Date('2025-06-07T00:00:00');

  // 计算当前日期与目标日期之间的差值
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center dark:text-white">
      <p className="text-4xl mb-4">
        <span className="text-green-500 font-bold text-7xl">{timeLeft.days}</span> days{' '}
        <span className="text-green-600 font-bold">{timeLeft.hours}</span> hours{' '}
        <span className="text-green-600 font-bold">{timeLeft.minutes}</span> minutes{' '}
        <span className="text-green-600 font-bold">{timeLeft.seconds}</span> seconds
      </p>
    </div>
  );
};

export default Countdown;
