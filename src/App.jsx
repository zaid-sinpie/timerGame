import Player from './components/Player.jsx';
import TimerChanlleng from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChanlleng title="Easy" targetTime={1} />
      <TimerChanlleng title="Not Easy" targetTime={5}/>
      <TimerChanlleng title="Getting tough" targetTime={10}/>
      <TimerChanlleng title="Pros Only" targetTime={15}/>
    </>
  );
}

export default App;
