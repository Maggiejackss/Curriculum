import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/home';
import Breeds from '../views/breeds';
import Favorites from '../views/Favorites'
import Quiz from '../views/quiz'


const Main = () => {
  return (
    <main className="y-wrap">
      <Routes>
        <Route path="/breeds" element={<Breeds />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
      </Routes>
    </main>
  )
};

export default Main;