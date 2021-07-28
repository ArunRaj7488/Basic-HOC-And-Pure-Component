import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/HOC/ClickCounter';
import MouseOverCounter from './components/HOC/MouseOverCounter';
import ParentCopm from './components/PureComponent/ParentCopm';

function App() {
  return (
    <div className="App">
      {/* <ParentCopm /> */}
     <ClickCounter value="ABC"/>
     <hr />
     <MouseOverCounter value="XYZ"/>
    </div>
  );
}

export default App;
