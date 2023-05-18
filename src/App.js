import { SayHello } from './components/sayHello/sayHello'
import { AboutPage } from './components/about/aboutPage'
import './components/about/aboutPage.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <SayHello/>
      <AboutPage/>     
    </div>
  );
}

export default App;
