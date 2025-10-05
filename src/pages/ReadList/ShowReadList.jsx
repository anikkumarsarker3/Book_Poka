import React from 'react';

const ShowReadList = ({ list }) => {
    return (
        <div className="card card-side bg-base-100 shadow-sm m-3">
            <figure>
                <img
                    className='w-3xs w-3xl'
                    src={list.image}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{list.bookName}</h2>
                <p></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default ShowReadList;