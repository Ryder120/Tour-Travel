import React from 'react'

const Navbar = () => {
     
  return (
    
  
    <div className='relative '>
          <div className='absolute w-full top-0 left-0 z-0 object-cover'>
      <img src='src/Component/pic/Rectangle 140.png' alt='banner' className='w-full h-185  opacity-90'  />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-4xl font-bold mb-2 drop-shadow-md text-black">We Find The Best Tours For You</h2>
          <p className="text-lg drop-shadow-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut est dolorum officia vitae blanditiis,</p>
           <p className='text-black'>sequi deserunt quibusdam saepe. Sequi voluptatem voluptatibus esse fugiat incidunt adipisci consequatur eveniet cum inventore odio!</p>
        
        </div>
    </div>
      
  
    <div className='flex justify-center items-center  h-16 py-5 px-10 overflow-hidden relative z-10'>
        <h1 className=' text-2xl  font-bold text-white font-serif'>Tour guide</h1>
        <div className='float-left ml-150 flex-wrap'>
            <a href='/home' className='mx-4 hover:text-gray-400 text-white'>Home</a>
            <a href='/about' className='mx-4 hover:text-gray-400 text-white'>About Us</a>
            <a href='/popular destination' className='mx-4 hover:text-gray-400 text-white'>Popular Destinations</a>
            <a href='/tours' className='mx-4 hover:text-gray-400 text-white'>Our Packages</a>
            <a href='/help' className='mx-4 hover:text-gray-400 text-white'>Help</a>
            <button className='mx-4 bg-yellow-500 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded'>Sign In</button>
        
        </div>
        
       

    </div>



    </div>


  )
}

export default Navbar