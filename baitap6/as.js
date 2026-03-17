const apiUrl = "https://69a7e2942cd1d0552691f916.mockapi.io/idk";

async function fetchData(url, data) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Thêm phòng thất bại");
        }

        const result = await response.json();
        alert("Thêm phòng thành công!");
        console.log(result);

    } catch (error) {
        console.error(error.message);
    }
}
async function getRooms() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Không lấy được dữ liệu");
        }

        const rooms = await response.json();

        renderRooms(rooms);

    } catch (error) {
        console.error(error.message);
    }
}
function renderRooms(rooms) {
    const container = document.getElementById("roomContainer");
    container.innerHTML = "";

    rooms.forEach(room => {
        const card = document.createElement("div");
        card.className = "room-card";

        card.innerHTML = `
       <div class="room-card">
    <div class="room-img-wrapper">
        ${room.image 
            ? `<img src="${room.image}" alt="room">` 
            : `<div class="no-image">No Image</div>`}
        <div class="heart-icon"><i class="fi fi-sr-heart"></i></div>
    </div>

    <div class="room-body">
        <div class="rating">
            <span class="stars">
            <i class="fi fi-ss-star"></i>
            <i class="fi fi-ss-star"></i>
            <i class="fi fi-ss-star"></i>
            <i class="fi fi-ss-star"></i>
            <i class="fi fi-ss-star"></i>
            </span>
            <span class="review">25 Review</span>
        </div>

        <h3 class="room-title">${room.name}</h3>
        <div class="room-type">${room.describe}</div>

        <div class="price-row">
            <span class="label">Giá tiền</span>
            <span class="price">${room.quantity} đ</span>
        </div>

        <div class="status-row">
            <span class="available">Còn 30 phòng</span>
            <span class="booked"><i class="fi fi-ss-ticket"></i> 120 đã đặt</span>
        </div>

        <button class="book-btn">
            Đặt Ngay <i class="fi fi-sr-bolt"></i> </button>
    </div>
</div>
        `;

        container.appendChild(card);
    });
}

function getData() {
    let name = document.getElementById("name_room").value;
    let describe = document.getElementById("describe_room").value;
    let quantity = document.getElementById("quantity").value;
    let image = document.getElementById("image").value;
    const newData = {
        name,
        describe,
        quantity,
        image
    };

    fetchData(apiUrl, newData);
}
document.getElementById("addRoomBtn")
        .addEventListener("click", getData);
document.getElementById("showRoombtn")
        .addEventListener("click", getRooms);