
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
function App() {
  return (
    <div className="d-flex  min-vh-100 p">
      <Sidebar />
      <div className='w-100 d-flex flex-column justify-content-between'>
        <Navbar />
        <div className='flex-grow-1 bg-secondary'>
          <CreatePost />
          <PostList />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
