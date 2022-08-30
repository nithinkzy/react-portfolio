import logo from './logo.svg';
import './App.scss';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" elements={<Layout />}></Route>
      </Routes>
    </>
  );
}

export default App;
