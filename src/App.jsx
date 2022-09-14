import './App.css'
import AllUsers from './AllUsers';
import SingleUser from './SingleUser';
import Header from './Header';
import {Routes, Route} from 'react-router-dom'; 

export default function App() {
  return (
    <main className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<AllUsers/>} />
        <Route path="/profile/:id" element={<SingleUser/>} />
        </Routes>
    </main> 
  );
}