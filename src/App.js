import * as React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from "./Components/About/About";
import { Details } from "./Components/Friends/Details";
import { Friends } from "./Components/Friends/Friends";
import { PostDetails } from "./Components/Friends/PostDetails";
import { Posts } from "./Components/Friends/Posts";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { NotFound } from "./Components/Notfound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='friends' element={<Friends />}></Route>
        <Route path='/friend/:id' element={<Details />}></Route>
        <Route path='/posts' element={<Posts></Posts>}>
          <Route path=":postId" element={<PostDetails></PostDetails>}></Route>
        </Route>
        <Route path='about' element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
