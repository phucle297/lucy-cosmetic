const checkout = document.querySelector(".checkout");

const dataCart = [
  {
    name: "Product 1",
    price: "100",
    image: "https://picsum.photos/200?random=1",
    quantity: 1,
  },
  {
    name: "Product 2",
    price: "200",
    image: "https://picsum.photos/200?random=2",
    quantity: 2,
  },
  {
    name: "Product 3",
    price: "300",
    image: "https://picsum.photos/200?random=3",
    quantity: 1,
  },
  {
    name: "Product 4",
    price: "400",
    image: "https://picsum.photos/200?random=4",
    quantity: 3,
  },
  {
    name: "Product 5",
    price: "500",
    image: "https://picsum.photos/200?random=5",
    quantity: 1,
  },
  {
    name: "Product 6",
    price: "600",
    image: "https://picsum.photos/200?random=6",
    quantity: 1,
  },
];

const renderCart = () => {
  let total = 0;
  let cart = "";
  dataCart.forEach((product) => {
    total += product.price * product.quantity;
    cart += `
      <tr>
        <td scope="row">
          <div>
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
          </div>
        </td>
        <td>
          <img src="${
            product.image
          }" alt="" width = "50px" height = "50px" class = "rounded-circle"/>
        </td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>
          <div class="input-group" style="width:150px">
            <div class="input-group-prepend">
              <button class="btn btn-outline-secondary btn-number" type="button" data-type="minus" data-field="quant[${
                product.name
              }]">
                <i class="fas fa-minus"></i>
              </button>
            </div>
            <input type="text" name="quant[${
              product.name
            }]" class="form-control input-number text-center" value="${
      product.quantity
    }" min="1" max="100">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary btn-number" type="button" data-type="plus" data-field="quant[${
                product.name
              }]">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </td>
        <td>${product.price * product.quantity}</td>
        <td>
          <button class="btn btn-outline-danger">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>`;
  });
  checkout.innerHTML = cart;
  return total;
};

const total = renderCart();

const totalPrice = document.querySelector(".total-price");
totalPrice.innerHTML = total;
const couponPrice = document.querySelector(".coupon-price");
couponPrice.innerHTML = 20;
const shippingPrice = document.querySelector(".shipping-price");
shippingPrice.innerHTML = 30;
const totalPriceAfterCoupon = document.querySelector(
  ".total-price-after-coupon"
);
totalPriceAfterCoupon.innerHTML = total + 30 - 20;
