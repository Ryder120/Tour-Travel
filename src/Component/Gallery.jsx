import React from 'react'

const Gallery = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='flex w-full max-w-7xl px-10 py-8 justify-between items-center'>
                <div className='w-8/12 text-left'>
                    <h1 className='font-bold text-black text-4xl mb-4'>From The Gallary</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat distinctio quae eaque iure eos voluptatem laborum ducimus aut natus voluptatibus ipsum exercitationem laboriosam dolorem sapiente illum repellendus, dolor ex nostrum.</p>
                </div>
                <div className='w-4/12 flex justify-end'>
                    <button className='border w-40 h-10 text-white bg-gray-500 hover:bg-gray-600 rounded'>
                        View All Images
                    </button>
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className=' flex max-w-7xl flex-wrap gap-7 justify-center items-center p-4 '>
                    <img src="src/Component/pic/Rectangle 148.png" alt="Gallery Image 1" className=' object-cover rounded' />
                    <img src="src/Component/pic/Rectangle 149.png" alt="Gallery Image 2" className=' object-cover rounded' />
                    <img src="src/Component/pic/Rectangle 150.png" alt="Gallery Image 3" className=' object-cover rounded' />
                    <img src="src/Component/pic/Rectangle 151.png" alt="Gallery Image 4" className=' object-cover rounded' />
                    <img src="src/Component/pic/Rectangle 152.png" alt="Gallery Image 5" className='object-cover rounded' />
                    <img src="src/Component/pic/Rectangle 153.png" alt="Gallery Image 6" className=' object-cover rounded' />
                    <img src="src/Component/pic/Rectangle 154.png" alt="Gallery Image 6" className=' object-cover rounded' />
                    <img src="src/Component/pic/Rectangle 155.png" alt="Gallery Image 6" className=' object-cover rounded' />
                </div>
            </div>
        </div>
    )
}

export default Gallery