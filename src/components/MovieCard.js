import React from 'react'

const MovieCard = ({ data }) => {
    return (
        <div className="bg-white rounded-lg border p-4 ">
            <img src={data.moviemainphotos} alt={data.movietitle} className="w-full h-48 rounded-md object-cover" />
            <div className="px-1 py-4">
                <div className="font-bold text-xl mb-2">{data.movietitle}</div>                
                <p className="text-gray-500 text-base">
                    <span className='font-bold'>language : - </span>
                    (
                        {data.movielanguages.map((item) => (
                            <span className="me-1">
                                {item} ,
                            </span>
                        ))}
                    )
                </p>

            </div>
        </div>
    )
}

export default MovieCard