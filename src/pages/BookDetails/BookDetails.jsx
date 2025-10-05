import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDb } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === Number(id))

    const handleMarkAsRead = (id) => {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
        addToStoreDb(id)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={singleBook.image}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{singleBook.bookName}</h1>
                    <h1 className="text-md font-semibold">By: {singleBook.author}</h1>
                    <p className='border-y py-2.5 border-gray-300'> Fiction</p>
                    <p className="py-6 ">
                        <span className='font-bold'>Review: </span>{singleBook.review}
                    </p>
                    <div className='flex gap-4 items-center'>
                        <p className='pt-1 font-bold'>Tag</p>
                        <div className='text-green-600 flex gap-7 font-semibold mt-2'>
                            {
                                singleBook.tags.map(tag => <p className='bg-gray-100 p-2 rounded-2xl'>{tag}</p>)
                            }

                        </div>
                    </div>
                    <p>Number of pages: {singleBook.totalPages}</p>
                    <p>Publisher: {singleBook.publisher}</p>
                    <p>Year of Publishing: {singleBook.yearOfPublishing}</p>
                    <p>Rating: {singleBook.rating}</p>
                    <div className='flex gap-2'>

                        <button onClick={() => handleMarkAsRead(id)} className="btn btn-primary">Mark as Read</button>
                        <button className="btn btn-success">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;