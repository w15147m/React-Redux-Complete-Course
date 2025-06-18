
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import PostList from './components/PostList';
import CRUDPOST from './components/CRUDPOST';

import { PostStore } from './store/PostStore';
import { useState } from 'react';
function App() {
  const [selectedPage, setSelectedPage] = useState('Home');
  return (
    <div className="d-flex text-capitalize  min-vh-100 p">
      <PostStore>
      <Sidebar  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <div className='w-100 d-flex flex-column justify-content-between'>
        <Navbar />
        <div className='flex-grow-1 '>
          {selectedPage === 'Home' ? <PostList /> : <CRUDPOST />}
        </div>
        <Footer />
      </div>
      </PostStore>
    </div>
  )
}

export default App
