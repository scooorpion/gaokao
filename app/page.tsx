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
        <ProgressBar />
        <TodayCountdown />
      </div>
      
    </div>
    
  );
};

export default Home;
