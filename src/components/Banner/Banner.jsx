import React from 'react';
import bannerPic from '../../assets/bannerpic.png'

const Banner = () => {
    return (
        <div className='flex flex-col-reverse text-center md:text-left md:flex-row justify-around items-center my-7 bg-gray-200 p-10 rounded-4xl'>
            <div className='flex-1 mx-auto'>
                <h1 className='text-5xl font-bold leading-[65px]'>Books to freshen up your bookshelf</h1>
                {/* <button className="btn btn-success">Success</button> */}
                <button className='btn mt-7 btn-success'>View The List</button>
            </div>
            <div className='flex-1 mb-7 md:mb-0'>
                <img className='mx-auto' src={bannerPic} alt="" />
            </div>

        </div>
    );
};

export default Banner;