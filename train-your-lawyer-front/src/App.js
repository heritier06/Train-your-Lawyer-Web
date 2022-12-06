import cloud from './Assets/cloud.png';
import cloud2 from './Assets/cloud.png';
import diploma from './Assets/diploma.png';
import student from './Assets/student.png';
import balance from './Assets/balance.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"> </header>
      <img src={cloud} className="cloud-first" alt="cloud1"/>
      <img src={cloud2} className="cloud-second" alt="cloud2"/>
      <img src={diploma} className="diploma" alt="diploma"/>
      <img src={student} className="student" alt="student"/>
      <img src={balance} className="balance" alt="balance"/>
      <div className="formulaire"></div>
    </div>
  );
}

export default App;
