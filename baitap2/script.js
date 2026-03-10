var man = [
    {
        id: 1,
        name: "The Cosmo Quần short khaki",
        price: "250.000",
        image: "https://picsum.photos/id/1011/400/400"
    },
    {
        id: 2,
        name: "Quần baggy đen sang trọng",
        price: "398.000",
        image: "https://picsum.photos/id/1005/400/400"
    },
    {
        id: 3,
        name: "Áo khoác Blazer Nam",
        price: "300.000",
        image: "https://picsum.photos/id/1062/400/400"
    },
    {
        id: 4,
        name: "Quần Short thể thao",
        price: "300.000",
        image: "https://picsum.photos/id/1074/400/400"
    }
];

var women = [
    {
        id: 1,
        name: "Váy Fashion Red",
        price: "250.000",
        image: "https://picsum.photos/id/1081/400/400"
    },
    {
        id: 2,
        name: "Áo thun phối váy ngắn",
        price: "398.000",
        image: "https://picsum.photos/id/20/400/400"
    },
    {
        id: 3,
        name: "Áo khoác mùa đông",
        price: "300.000",
        image: "https://picsum.photos/id/1027/400/400"
    },
    {
        id: 4,
        name: "Áo thun basic nữ",
        price: "300.000",
        image: "https://picsum.photos/id/64/400/400"
    }
];

function listProducts() {
    // Xử lý NAM
    let demoMan = "";
    for (let i = 0; i < man.length; i++) {
        demoMan += `
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src="${man[i].image}" class="card-img-top" style="height:300px; object-fit: cover;">
                    <div class="card-body text-center">
                        <h6 class="card-title">${man[i].name}</h6>
                        <p class="card-text text-danger fw-bold">${man[i].price}đ</p>
                        <button class="btn btn-primary" onclick="order()">Đặt mua</button>
                    </div>
                </div>
            </div>`;
    }
    document.getElementById("men").innerHTML = demoMan;

    // Xử lý NỮ
    let demoWomen = "";
    for (let i = 0; i < women.length; i++) {
        demoWomen += `
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src="${women[i].image}" class="card-img-top" style="height:300px; object-fit: cover;">
                    <div class="card-body text-center">
                        <h6 class="card-title">${women[i].name}</h6>
                        <p class="card-text text-danger fw-bold">${women[i].price}đ</p>
                        <button class="btn btn-primary" onclick="order()">Đặt mua</button>
                    </div>
                </div>
            </div>`;
    }
    document.getElementById("women").innerHTML = demoWomen;
}

function order() {
    alert("Cảm ơn bạn đã đặt hàng!");
}