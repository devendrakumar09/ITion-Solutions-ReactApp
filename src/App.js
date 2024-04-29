

import './App.css';
import Movies from './local-json/movies-filter-react.json'
import MovieCard from './components/MovieCard';
import HeroSection from './components/HeroSection';
import { useState } from 'react';
import FiltersUI from './components/FiltersUI';

function App() {
  const [movielang, setMovielang] = useState([]);
  // Movies.map((item) => (
  //   item.movielanguages.map((item) => (
  //     movielang.push([item])
  //     // movielang.includes([item])
  //   ))
  // ))
  
  
//   images.map(img => {
//     if (uniqueTags.indexOf(img.tag) === -1) {
//         uniqueTags.push(img.tag)
//     }
// });

  return (
    <>
      <div class="bg-gradient-to-bl from-blue-50 to-violet-50 ">
        <HeroSection />
        <div class="container mx-auto  p-2">
          <FiltersUI />
        </div>
        <div class="flex items-center justify-center ">
          <div class="container mx-auto  p-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
              {Movies.map((item) => (
                <MovieCard data={item} key={item.id} />                  
              ))}
            </div>           
          </div>
        </div>
      </div>
    </>


  );
}

export default App;
