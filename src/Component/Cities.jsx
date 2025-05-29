import React from 'react'

const Cities = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
            <h2 className="text-5xl font-bold mt-40 drop-shadow-md text-black">Explore Popular Cities</h2>
            <p className="text-sm drop-shadow-sm text-black max-w-2xl mx-auto mt-5 f">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="flex gap-2 mt-10">
                <button className='py-3 px-10 me-2 mb-2 text-sm font-medium text-black-900  bg-white rounded-full border border-gray-200 hover:bg-teal-400'>NewYork</button>
                <button className='py-3 px-10 me-2 mb-2 text-sm font-medium text-black-900  bg-white rounded-full border border-gray-200 hover:bg-teal-400 '>California</button>
                <button className='py-3 px-10 me-2 mb-2 text-sm font-medium text-black-900  bg-white rounded-full border border-gray-200 hover:bg-teal-400 '>Alaska</button>
                <button className='py-3 px-10 me-2 mb-2 text-sm font-medium text-black-900  bg-white rounded-full border border-gray-200 hover:bg-teal-400 '>Sidney</button>
                <button className='py-3 px-10 me-2 mb-2 text-sm font-medium text-black-900  bg-white rounded-full border border-gray-200 hover:bg-teal-400 '>Dubai</button>
                <button className='py-3 px-10 me-2 mb-2 text-sm font-medium text-black-900  bg-white rounded-full border border-gray-200 hover:bg-teal-400 '>London</button>
                <button className='py-3 px-10 me-2 mb-2 text-sm font-medium text-black-900  bg-white rounded-full border border-gray-200 hover:bg-teal-400 '>Tokyo</button>
                <button className='py-3 px-10 me-2 mb-2 text-sm font-medium text-black-900  bg-white rounded-full border border-gray-200 hover:bg-teal-400 '>Delhi</button>

            </div>
            <div className='w-full max-w-6xl mx-auto mt-10'>
                <img src="src/Component/pic/Rectangle 156.png" alt="" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
            <div className=' max-w-4xl h-[250px] mx-auto bg-white rounded-[12px] shadow flex-col  px-10 py-10 mt-8 border border-blue-200  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <h1 className='font-bold text-7xl  '>Alaska</h1>
                <p className='text-sm mr-2 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, nostrum. Laudantium repellat facilis adipisci similique quaerat explicabo unde a mollitia commodi, pariatur quasi ipsam laborum temporibus deleniti earum neque ducimus!</p>
            </div>


        </div>




    )

}

export default Cities