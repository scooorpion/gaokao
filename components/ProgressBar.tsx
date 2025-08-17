"use client"
import { useEffect, useState, useRef, useCallback } from 'react';


interface ProgressBarProps {
  startDate: string;
  endDate: string;
  label: string;
}


const ProgressBar: React.FC<ProgressBarProps> = ({ startDate, endDate, label }) => {
  // const startDateRef = useRef(new Date('2024-02-25T00:00:00'));
  // const endDateRef = useRef(new Date('2024-07-01T00:00:00'));
  // const [progress, setProgress] = useState<number>(0);

  const startDateRef = useRef(new Date(startDate));
  const endDateRef = useRef(new Date(endDate));
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
    <div className="w-full">
      {/* 标题和百分比 */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          {label}
        </h3>
        <div className="text-right">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {Math.round(progress)}%
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            已完成
          </div>
        </div>
      </div>
      
      {/* 进度条容器 */}
      <div className="relative">
        {/* 背景轨道 */}
        <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
          {/* 进度条 */}
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
            style={{ width: `${Math.min(progress, 100)}%` }}
          >
            {/* 动画光效 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            {/* 流动光效 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
          </div>
        </div>
        
        {/* 进度指示器 */}
        {progress > 5 && (
          <div 
            className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-4 border-blue-500 transition-all duration-1000 ease-out"
            style={{ left: `calc(${Math.min(progress, 100)}% - 12px)` }}
          >
            <div className="w-full h-full bg-blue-500 rounded-full animate-ping opacity-75"></div>
          </div>
        )}
      </div>
      
      {/* 时间信息 */}
      <div className="flex justify-between mt-3 text-sm text-gray-600 dark:text-gray-400">
        <span>开始时间</span>
        <span>目标时间</span>
      </div>
    </div>
  );
};

export default ProgressBar;
