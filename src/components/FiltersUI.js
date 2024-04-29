import React, { useEffect, useState } from 'react'
import Movies from '../local-json/movies-filter-react.json'

const FiltersUI = () => {
    const [movielang, setMovielang] = useState([]);
    const [movieCountries, setMovieCountries] = useState([]);
    const [movieGenres, setMovieGenres] = useState([]);
    let movieLangArr = []
    let movieCountriesArr = []
    let movieGenresArr = []

    Movies.map((item) => (
        item.movielanguages.map((data) => (
            movieLangArr.push(data)
        ))        
    ))

    Movies.map((item) => (
        item.moviegenres.map((data) => (
            movieGenresArr.push(data)
        ))        
    ))

    Movies.map((item) => (
        item.moviecountries.map((data) => (
            movieCountriesArr.push(data)
        ))        
    ))

    useEffect(() => {
        
        const uniqueLang = [...new Set(movieLangArr)];
        const uniqueGeneres = [...new Set(movieGenresArr)];
        const uniqueCountries = [...new Set(movieCountriesArr)];
        
        setMovielang(uniqueLang);
        setMovieCountries(uniqueCountries)
        setMovieGenres(uniqueGeneres)


    }, []);


    return (
        <div className="m-10 ">
            <div className="flex flex-col">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                    <div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            <div className="flex flex-col">
                                <label for="manufacturer" className="text-sm font-medium text-stone-600">Languages</label>
                                <select id="manufacturer" className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                    <option>Select</option>
                                    {/* {movielang.map((data) =>(
                                        
                                    )} */}
                                    {movielang.map((item) => (
                                        <option>{item}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label for="date" className="text-sm font-medium text-stone-600">Countries</label>
                                <select id="manufacturer" className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                    <option>Select</option>
                                    {movieCountries.map((item) => (
                                        <option>{item}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label for="status" className="text-sm font-medium text-stone-600">Genres</label>

                                <select id="status" className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                    <option>Select</option>
                                    {movieGenres.map((item) => (
                                        <option>{item}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                            <button className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">Search</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default FiltersUI