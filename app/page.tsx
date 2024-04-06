// pages/index.js
import Clock from '../components/Clock';
import Countdown from '../components/Countdown';
import ProgressBar from '../components/ProgressBar';
import TodayCountdown from '../components/TodayCountdown';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-black">
      <Clock />
      <Countdown />
      <ProgressBar />
      <TodayCountdown />
    </div>
  );
};

export default Home;
