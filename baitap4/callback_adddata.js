function adddata(url,data,callback){
    fetch(url,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Loi khi them du lieu vao api ' + response.statusText);
    }
    return response.json();
    })
    .then(result => {
        callback(null,result);
    })
    .catch(error => {
        callback(error,null);
    });
}
    function displaydata(error,result){
        if(error){
            console.error('Error adding data:', error);
        } else {
            console.log('Data added successfully:', result);
        }
    }
    const apiUrl = 'https://656d3ffbbcc5618d3c22ee91.mockapi.io/product';

    const newData = {
        name: 'Tran Minh',
        price: 29.99
    };
    const newData2 = {
        name: 'Nhat Huy',
        price: 19.99
    };
    adddata(apiUrl,newData,displaydata);
    adddata(apiUrl,newData2,displaydata);