function fetchdata(callback){
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        callback(null,data);
    })
    .catch(error => {
        callback(error, null);
    });
}
function displaydata(error, data){
    if(error){
        console.error('Error fetching data:', error);
    } else {
        console.log('data:', data);
    }
}
fetchdata(displaydata);