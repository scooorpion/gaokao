"use client"
import { useEffect, useState, useRef, useCallback } from 'react';

const ProgressBar = () => {
  const startDateRef = useRef(new Date('2024-02-25T00:00:00'));
  const endDateRef = useRef(new Date('2024-07-01T00:00:00'));
  const [progress, setProgress] = useState<number>(0);

  const calculateProgress = useCallback(() => {
    const now = new Date();
    const totalTime = endDateRef.current.getTime() - startDateRef.current.getTime();
    const elapsedTime = now.getTime() - startDateRef.current.getTime();
    const currentProgress = (elapsedTime / totalTime) * 100;
    setProgress(currentProgress);
  }, []);

  useEffect(() => {
    calculateProgress(); // 初次加载时计算进度

    const interval = setInterval(() => {
      calculateProgress(); // 每秒钟更新一次进度
    }, 1000);

    return () => clearInterval(interval); // 清除定时器
  }, [calculateProgress]);

  return (
    <div className="w-7/12 bg-gray-200 h-8 rounded-full overflow-hidden dark:text-black relative">
      <div className="h-full bg-green-600" style={{ width: `${progress}%` }} />
      <span className="absolute inset-0 flex items-center justify-center w-full h-full">
        本学期剩余：{`${Math.round(progress)}%`}
      </span>
    </div>
  );
};

export default ProgressBar;
