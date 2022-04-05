import logo from './logo.svg';
import './App.css';
import './style.css';
import Photo from './Component/Profile/ProfilePhotos';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';

function App() {
  return (
    <div className="App">
     <Photo > </Photo>
     <FullName></FullName>
     <Adress></Adress>
    </div>
  );
}

export default App;
