"use client"
import { useState, useEffect } from 'react';

const TodayCountdown: React.FC = () => {
  const [remainingTime, setRemainingTime] = useState<number>(calculateRemainingTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateRemainingTime(): number {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999); // 设置今天结束时间为23:59:59
    const difference = endOfDay.getTime() - now.getTime();
    return difference > 0 ? difference : 0;
  }

  function formatTime(ms: number): string {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold mb-4">今日剩余时间</h1>
      <div className="text-2xl">{formatTime(remainingTime)}</div>
    </div>
  );
};

export default TodayCountdown;
