const getStoreBook = () => {
    const storeBookSTR = localStorage.getItem('readList');
    if (storeBookSTR) {
        const storeBookData = JSON.parse(storeBookSTR);
        return storeBookData;

    }
    else {
        return [];
    }
}
const addToStoreDb = (id) => {
    const storeBookData = getStoreBook();
    if (storeBookData.includes(id)) {
        alert('Vai already ei data existed')

    }
    else {
        storeBookData.push(id)
        const data = JSON.stringify(storeBookData);
        localStorage.setItem('readList', data)
        console.log(storeBookData);
    }
}
export { addToStoreDb, getStoreBook };