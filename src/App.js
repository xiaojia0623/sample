import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  HashRouter as Router, Route, Routes   } from "react-router-dom";
import Header from './Components/Header/Header';
import MiddleNavbars from './Components/MiddleNavbars/MiddleNavbars';

import IntroProject from './Pages/IntroProject';
import Question from './Pages/Question';
import CurrentProgress from './Pages/CurrentProgress';
import Message from './Pages/Message';



function App() {
  return (
    <Router>
      <Header/>
      <MiddleNavbars/>
      <Routes>
          <Route exact path='/' element={<IntroProject/>}/>
          <Route path='/question' element={<Question/>}/>
          <Route path='/currentprogress' element={<CurrentProgress/>}/>
          <Route path='/message' element={<Message/>}/>
      </Routes>

      <footer className="bg-dark-gray">
        <p className="p-3 m-0 text-center  p-32 text-white">Copyright <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
          <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/></svg> 拼拼 All rights reserved.(僅練習用)
        </p>
      </footer>
    </Router>
  );
}

export default App;