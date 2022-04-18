// using slick to create carousel
$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 1500,
});
const dataProduct = [
  {
    id: 1,
    name: "Phấn Nước Che Phủ Mỏng Mịn, Kiềm Dầu Hiệu Quả Gilaa Long Wear DD Cushion SPF50/PA+++",
    price: "300.000",
    description: "Phấn nước Gilla",
    image: "https://product.hstatic.net/1000006063/product/65fd94e80afd5eb2ea42ac590b830af4_9e40e6d7ea044bc7be7acceceb7e0f04_grande.jpeg",
    category: "Phấn nước - Cushion",
    rating: "4",
  },
  {
    id: 2,
    name: "Kem Nền Che Phủ Hoàn Hảo, Bền Màu Lâu Trôi Maybelline Super Stay 24H Full Coverage Foundation 30ml",
    price: "200.000đ",
    description: "Maybelline Super Stay ",
    image: "https://product.hstatic.net/1000006063/product/320_1b8694c4fc3247acafc3f58237860923_1024x1024.jpg",
    category: "112",
    rating: "4.5",
  },
  {
    id: 3,
    name: "Son Thỏi Lì, Lên Màu Chuẩn Lilybyred Mood Cinema Velvet Epilogue 3.5g",
    price: "150.000đ",
    description: "Son Lilybyred ",
    image: "https://product.hstatic.net/1000006063/product/3568_3fd53dfe87e64feeb53a25a3e3f86990_1024x1024.jpg",
    category: "Son 1 LOST CHILI",
    rating: "3",
  },
  {
    id: 4,
    name: "Bột Tán Chân Mày Hai Màu Đa Năng 16Brand Brow Magazine 3.6g",
    price: "215.000đ",
    description: "Bột Tán Chân Mày",
    image: "https://product.hstatic.net/1000006063/product/3645_6437133cae2b47acb743262c35f46b1d_1024x1024.jpg",
    category: "COCO BROWN",
    rating: "4",
  },
  {
    id: 5,
    name: "Chì Kẻ Mày Ngang Cho Chân Mày Sắc Nét, Lâu Trôi Romand Han All Flat Brow - Han All Line 0.17g",
    price: "129.000đ",
    description: "chì kẻ mày",
    image: "https://product.hstatic.net/1000006063/product/0b1b3d8c9e1e7306123a7c17a7400e75_f59a72f2b7d54704ac939718407b9321.jpeg",
    category: "Chì kẻ mày",
    rating: "3",
  },
  {
    id: 6,
    name: "Bảng Phấn Mắt 9 Màu Moart Drawing Art Shadow Palette 9g",
    price: "200.000đ",
    description: "Phấn mắt",
    image: "https://product.hstatic.net/1000006063/product/28_e8b580e14700438c8498a3a6d4d9db7a_grande.png",
    category: "Phấn mắt Moart",
    rating: "4.5",
  },
  {
    id: 7,
    name: "Phấn Nước Che Phủ Mỏng Mịn, Kiềm Dầu Hiệu Quả Gilaa Long Wear DD Cushion SPF50/PA+++",
    price: "300.000",
    description: "Phấn nước Gilla",
    image: "https://product.hstatic.net/1000006063/product/65fd94e80afd5eb2ea42ac590b830af4_9e40e6d7ea044bc7be7acceceb7e0f04_grande.jpeg",
    category: "Phấn nước - Cushion",
    rating: "4",
  },
  {
    id: 8,
    name: "Phấn Nước Che Phủ Mỏng Mịn, Kiềm Dầu Hiệu Quả Gilaa Long Wear DD Cushion SPF50/PA+++",
    price: "300.000",
    description: "Phấn nước Gilla",
    image: "https://product.hstatic.net/1000006063/product/65fd94e80afd5eb2ea42ac590b830af4_9e40e6d7ea044bc7be7acceceb7e0f04_grande.jpeg",
    category: "Phấn nước - Cushion",
    rating: "4",
  },
];
const productList = document.querySelectorAll(".productList");

const renderProduct = (arr) => {
  result = "";
  arr.map((item) => {
    result += `
    <div class=${window.location.pathname === "/" ? "col-2" : "col-4"}>
      <img src="${item.image}" class="card-img-top" alt="...">
      <div class=" mt-2 mb-5">
        <p class="card-text">${item.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" onClick = 'viewDetail(${
              item.id
            })'>
              Xem chi tiết
            </button>
          </div>
          <small class="text-muted">${item.price}</small>
        </div>
      </div>
    </div>
    `;
  });
  productList.forEach((element) => {
    element.innerHTML = result;
  });
};

const viewDetail = (id) => {
  window.localStorage.setItem("productId", id);
  window.location.replace("/pages/detail.html");
};

const handleSearch = () => {
  const search = document.querySelector("#searchInput").value;

  window.localStorage.setItem("searchValue", search);
  window.location.replace("/pages/search.html");
};

renderProduct(dataProduct);
