import { NavBar } from './Components/Nav/Nav';
import { Posts } from './Features/Posts/Posts';
import './App.css';
import { Categories } from './Features/Categories/Categories';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='body-wrapper'>
        <Posts />
        <Categories />
      </div>
    </div>
  );
}

export default App;
