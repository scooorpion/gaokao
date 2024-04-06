// pages/index.js
import Clock from '../components/Clock';
import Countdown from '../components/Countdown';
import ProgressBar from '../components/ProgressBar';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-black">
      <Clock />
      <Countdown />
      <ProgressBar />
    </div>
  );
};

export default Home;
