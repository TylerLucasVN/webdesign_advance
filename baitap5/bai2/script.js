const API_URL = "e xoa tam do het api roi a";

// GET HOTEL
function getHotels() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => renderHotels(data))
        .catch(err => console.log("Error:", err));
}

// RENDER TABLE
function renderHotels(data) {

    const tableBody = document.getElementById("productTableBody");
    tableBody.innerHTML = "";

    data.forEach(hotel => {

        const row = `
        <tr>
            <td>${hotel.id}</td>
            <td>${hotel.name}</td>
            <td><img src="${hotel.img}" width="80"></td>
            <td>${hotel.description}</td>
            <td>${hotel.location}</td>
            <td>${hotel.bookingdate}</td>
            <td>${hotel.price}</td>
            <td>
                <button onclick="deleteHotel('${hotel.id}')">Delete</button>
            </td>
        </tr>
        `;

        tableBody.innerHTML += row;

    });

}

// ADD HOTEL
document.getElementById("addHotel").addEventListener("click", function () {

    const newHotel = {

        name: document.getElementById("name").value,
        img: document.getElementById("image").value,
        description: document.getElementById("description").value,
        location: document.getElementById("location").value,
        bookingdate: document.getElementById("bookingdate").value,
        price: document.getElementById("price").value

    };

    fetch(API_URL, {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newHotel)

    })
        .then(res => res.json())
        .then(() => {

            getHotels();

        });

});

// DELETE HOTEL
function deleteHotel(id) {

    if (!confirm("Bạn có chắc muốn xoá không?")) return;

    fetch(`${API_URL}/${id}`, {

        method: "DELETE"

    })
        .then(res => res.json())
        .then(() => {

            getHotels();

        });

}

// LOAD DATA
getHotels();