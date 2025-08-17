// pages/index.js
import ProgressBar from '../components/ProgressBar';
import OtherSchedule from '../components/OtherSchedule';
import Head from 'next/head';

// 获取下一次高考日期
function getNextGaokaoDate(): string {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentGaokao = new Date(currentYear, 5, 7); // 6月7日 (月份从0开始)
  
  // 如果当前日期已经过了今年的高考日期，则返回明年的高考日期
  if (now > currentGaokao) {
    return `${currentYear + 1}-06-07T00:00:00`;
  } else {
    return `${currentYear}-06-07T00:00:00`;
  }
}

// 获取高中开始日期（高考前3年的9月1日）
function getHighSchoolStartDate(): string {
  const nextGaokaoYear = parseInt(getNextGaokaoDate().split('-')[0]);
  const startYear = nextGaokaoYear - 3;
  return `${startYear}-09-01T00:00:00`;
}

const Home = () => {
  return (

    <div>
      <Head>
        <title>GaoKao</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex flex-col items-center justify-center p-6">
        {/* 主标题 */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            高考倒计时
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            距离梦想更近一步
          </p>
        </div>

        {/* 倒计时卡片 */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border border-white/20 dark:border-gray-700/20">
          <OtherSchedule targetDate={getNextGaokaoDate()} title="" />
        </div>

        {/* 进度条卡片 */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 dark:border-gray-700/20 w-full max-w-2xl">
          <ProgressBar startDate={getHighSchoolStartDate()} 
            endDate={getNextGaokaoDate()} label="高中进度" />
        </div>

        {/* 装饰性元素 */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/30 dark:bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/30 dark:bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-indigo-200/30 dark:bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

    </div>
    
  );
};

export default Home;
