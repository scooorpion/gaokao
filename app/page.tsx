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
        <OtherSchedule />
        
        <Clock />
        <Countdown />

        <ProgressBar startDate="2022-09-01T00:00:00" 
          endDate="2025-06-07T00:00:00" label="高中" />

        <ProgressBar startDate="2024-02-25T00:00:00" 
          endDate="2024-07-01T00:00:00" label="高二下" />
        

        <TodayCountdown />
      </div>

    </div>
    
  );
};

export default Home;
