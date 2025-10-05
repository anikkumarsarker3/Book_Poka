import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';

export const router = createBrowserRouter([
    {
        path: "/",
        // element: <Root></Root>,
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('booksData.json'),
                Component: Home
            },
            {

                path: '/about',
                Component: About
            },
            {

                path: '/bookdetails/:id',
                loader: () => fetch('booksData.json'),
                Component: BookDetails
            },
            {

                path: '/readlist',
                loader: () => fetch('booksData.json'),
                Component: ReadList
            },
        ],
    },
]);