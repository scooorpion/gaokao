"use client"
import { useState, useEffect } from 'react';

const OtherSchedule = () => {
  // 定义目标日期（2025年6月7日）
  const targetDate = new Date('2024-04-23T00:00:00');

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
    <div className="text-center dark:text-white m-4">
      <p className="text-4xl mb-4">
        <div className='text-3xl font-bold mt-4'>你的计划还剩</div>
        <div className="text-green-600 font-bold text-6xl">{timeLeft.days} days{' '}</div> 
        <span className="text-green-600 font-bold">{timeLeft.hours}</span> hours{' '}
        <span className="text-green-600 font-bold">{timeLeft.minutes}</span> minutes{' '}
        <span className="text-green-600 font-bold">{timeLeft.seconds}</span> seconds
      </p>
    </div>
  );
};

export default OtherSchedule;
