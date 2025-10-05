import React, { use } from 'react';
import { Link } from 'react-router';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, tags, yearOfPublishing } = book;


    return (
        <Link to={`/bookdetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm mx-auto p-4 border">
                <figure className='p-20 bg-gray-200 h-[250px]'>
                    <img
                        className='rounded-2xl h-[180px]'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className='flex-1'>

                    <div className='text-green-600 flex gap-7 font-semibold mt-2'>
                        {
                            tags.map(tag => <p className='bg-gray-100 p-2 rounded-2xl'>{tag}</p>)
                        }

                        {/* <p className='bg-gray-100 p-2 rounded-2xl'>Identity</p> */}
                    </div>
                </div>
                <div className="card-body flex flex-1">
                    <h2 className="card-title text-2xl">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <h2 className='text-lg font-semibold border-b p-2 border-dashed'>By: {author}</h2>
                    {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div> */}
                    <div className='flex justify-between items-center mt-5'>
                        <h2 className='text-lg'>Fiction</h2>
                        <div className='flex items-center gap-2'>
                            <p>{rating}</p>
                            <p>⭐</p>

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;