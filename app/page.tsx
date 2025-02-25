// pages/index.js
import Clock from '../components/Clock';
import Countdown from '../components/Countdown';
import ProgressBar from '../components/ProgressBar';
import TodayCountdown from '../components/TodayCountdown';
import OtherSchedule from '../components/OtherSchedule';
import Head from 'next/head';

const Home = () => {
  return (

    <div>
      <Head>
        <title>GaoKao</title>
      </Head>

      <div className="flex flex-col items-center justify-center h-screen dark:bg-black">
        {/* <OtherSchedule targetDate="2024-08-14T00:00:00" title="暑假第一二阶段结束" /> */}

        {/* <OtherSchedule targetDate="2024-09-01T00:00:00" title="距离高三正式开学" /> */}

        {/* <OtherSchedule targetDate="2025-02-27T00:00:00" title="高考" /> */}
        <OtherSchedule targetDate="2025-06-07T00:00:00" title="" />

        
        {/* <Clock /> */}
        {/* <Countdown /> */}

        <ProgressBar startDate="2022-09-01T00:00:00" 
          endDate="2025-06-07T00:00:00" label="高中" />
        
        

        {/* <TodayCountdown /> */}
      </div>

    </div>
    
  );
};

export default Home;
