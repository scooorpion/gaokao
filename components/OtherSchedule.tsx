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

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
  }, [calculateTimeLeft]);

  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft, mounted]);

  if (!mounted) {
    return (
      <div className="text-center">
        {title && <div className='text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6'>{title}</div>}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TimeCard value={0} label="天" />
          <TimeCard value={0} label="时" />
          <TimeCard value={0} label="分" />
          <TimeCard value={0} label="秒" />
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      {title && <div className='text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6'>{title}</div>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <TimeCard value={timeLeft.days} label="天" isPrimary />
        <TimeCard value={timeLeft.hours} label="时" />
        <TimeCard value={timeLeft.minutes} label="分" />
        <TimeCard value={timeLeft.seconds} label="秒" />
      </div>
    </div>
  );
};

// 时间卡片组件
interface TimeCardProps {
  value: number;
  label: string;
  isPrimary?: boolean;
}

const TimeCard: React.FC<TimeCardProps> = ({ value, label, isPrimary = false }) => {
  return (
    <div className={`
      relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105
      ${isPrimary 
        ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
        : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-800 dark:text-gray-200 shadow-md'
      }
    `}>
      <div className="relative z-10">
        <div className={`text-3xl md:text-4xl font-bold mb-1 ${
          isPrimary ? 'text-white' : 'text-gray-800 dark:text-gray-200'
        }`}>
          {value.toString().padStart(2, '0')}
        </div>
        <div className={`text-sm font-medium ${
          isPrimary ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'
        }`}>
          {label}
        </div>
      </div>
      
      {/* 装饰性背景元素 */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"></div>
    </div>
   );
 };
 
 export default OtherSchedule;