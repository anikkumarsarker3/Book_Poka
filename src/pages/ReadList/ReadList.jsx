import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../utility/addToDB';
import ShowReadList from './ShowReadList';

const ReadList = () => {
    const [myReadList, setMyReadList] = useState([]);
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    console.log(data)
    useEffect(() => {
        const storebookData = getStoreBook();
        const convertStoreBookData = storebookData.map(id => parseInt(id))
        const myReadListfilter = data.filter(book => convertStoreBookData.includes(book.bookId))
        setMyReadList(myReadListfilter);
        // console.log(myReadList);
    }, [])


    const handleSort = (type) => {
        setSort(type);
        if (type === 'Pages') {
            const sortList = [...myReadList].sort((a, b) => a.totalPages - b.totalPages)
            setMyReadList(sortList)

        }
        if (type === 'Rating') {
            const sortList = [...myReadList].sort((a, b) => a.rating - b.rating)
            setMyReadList(sortList)

        }


    }
    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Sort By:{sort ? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort('Pages')}>Pages</a></li>
                    <li><a onClick={() => handleSort('Rating')}>Rating</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div className='m-3'>

                        {
                            myReadList.map(list => <ShowReadList list={list}></ShowReadList>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;