import React from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import HeadlineCards from './Components/HeadlineCards';
import Food from './Components/Food';
import Category from './Components/Category';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/> 
      <HeadlineCards/>
      <Food/>
      <Category/>
    </div>
  )
}

export default App