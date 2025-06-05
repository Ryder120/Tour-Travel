import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-950 w-full pt-8'>
      <div className='w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start px-4'>
        {/* Language & Currency */}
        <div className='w-full md:w-3/12 mb-8 md:mb-0'>
          <div className='text-white'>
            <h5 className='font-semibold mb-2 text-gray-300'>Language</h5>
            <div className='w-40 h-8 flex items-center border border-amber-50 rounded px-2 mb-4'>
              <button className=' text-sm flex items-center text-gray-400'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsJj32BQJHR8eHlR1Kb8ejJ4AMUCzPBKieQ&s" alt="UK Flag" className='w-5 h-4 px-0.5 mr-3' />
                English (UK)
              </button>
            </div>
            <h5 className='font-semibold mb-2 text-gray-300'>Currency</h5>
            <div className='w-40 h-8 flex items-center border border-amber-50 rounded px-2 text-gray-400'>
              <button className=' text-sm text-gray-400'>USD ($)</button>
            </div>
          </div>
        </div>
        {/* Company */}
        <div className='w-full md:w-3/12 mb-8 md:mb-0 flex justify-between items-start px-4'>
          <div className='text-white'>
            <h5 className='font-semibold mb-2 text-gray-300'>Company</h5>
            <div className='text-xs text-gray-400'>
              <p className='py-1'>About Us</p>
              <p className='py-1'>Blogs</p>
              <p className='py-1'>Career</p>
            </div>
          </div>
        </div>
        {/* Help */}
        <div className='w-full md:w-3/12 mb-8 md:mb-0 flex justify-between items-start px-4'>
          <div className='text-white'>
            <h5 className='font-semibold mb-2 text-gray-300'>Help</h5>
            <div className='text-xs text-gray-400 '>
              <p className='py-1'>Contact Us</p>
              <p className='py-1' >FAQs</p>
              <p className='py-1'>Terms And Conditions</p>
              <p className='py-1'>Privacy Policy</p>
              <p className='py-1'>Site Map</p>
            </div>
          </div>
        </div>
        {/* Payment */}
        <div className='w-full md:w-3/12 mb-8 md:mb-0 flex justify-between items-start px-4'>
          <div className='text-white'>
            <h5 className='font-semibold mb-2 text-gray-400'>Payment Method Possibles</h5>
            <img src="https://unblast.com/wp-content/uploads/2020/03/Payment-Icons-Pack-1534x1536.jpg" alt="PayPal Logo" className='w-30 h-20 mb-2' />
            <h5 className='font-semibold mb-2 text-gray-300'>Company</h5>
            <p className='text-xs text-gray-400'>Become a Tour Guide of US</p>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className='w-full'>
        <div className='w-full md:w-6/12 mx-auto text-center text-white mt-8 '>
          <p>Copyright 2021 Tour Guide All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer