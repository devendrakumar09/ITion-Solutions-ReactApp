import React from 'react'

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 ">         
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-28 ">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6  ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-white">
                        React Developer job Project &nbsp;&nbsp; <a href="#" className="font-semibold  text-black"><span className="absolute inset-0" aria-hidden="true"></span>Github Repo <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className=" text-white md:text-6xl leading-tight mb-6 text-4xl font-bold tracking-tight  sm:text-6xl">ITion Solutions</h1>
                        {/* <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>                         */}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default HeroSection