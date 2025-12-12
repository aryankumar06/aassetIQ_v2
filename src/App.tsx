import { LandingPage } from './components/LandingPage';

function App() {
  const handleStart = () => {
    console.log('App started!');
  };

  return <LandingPage onStart={handleStart} />;
}

export default App;
