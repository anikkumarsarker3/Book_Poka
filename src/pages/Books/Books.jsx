import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ bookData }) => {
    const [allBooks, setAllBooks] = useState([]);
    // useEffect(() => {
    //     fetch('booksData.json')
    //         .then(res => res.json())
    //         .then(data => setAllBooks(data))
    // }, [])
    // const booksPromise = fetch('booksData.json').then(res => res.json())
    return (
        <div>
            <h1 className='text-4xl text-center font-bold mb-4'>Books</h1>
            <Suspense fallback={<span>Loading....</span>}>
                {/* <Book booksPromise={booksPromise}></Book> */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>

                    {
                        bookData.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;