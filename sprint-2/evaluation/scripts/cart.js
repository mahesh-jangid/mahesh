var cart_prod = JSON.parse(localStorage.getItem("cartItems")) || [];

var total_amt = document.querySelector(".total");
var total_amount = [];
displayCartProduct(cart_prod);
function displayCartProduct(cart_prod) {
  cart_prod.map(function (elem, ind) {
    // console.log(elem.product_image);
    var product_main = document.querySelector(".product_main_info");
    var single_product = document.createElement("div");
    single_product.classList.add("product");

    var otherData = ` <div class="product_image">
            <img
              src="${elem.strCategoryThumb}"
              alt=""
            />
          </div>
          <div class="product_info">
            <h3 class="product_name">${elem.strCategory}</h3>
            <h3 class="product_price">Rs ${elem.price}</h3>
          </div>
           <button class="remove_btn">
               <i class="fas fa-times"></i>
              </button>`;

    single_product.insertAdjacentHTML("afterbegin", otherData);

    product_main.appendChild(single_product);
    total_amount.push(Number(elem.price));
    showTotal();

    let remove_btn = single_product.querySelectorAll(".remove_btn");
    remove_btn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        deleteItem(ind);
        showTotal();
      });
    });
  });
}
function showTotal() {
  var total_price = total_amount.reduce(function (total, price) {
    total += Number(price);
    return total;
  });
  // console.log(showTotal());
  total_amt.textContent = Number(total_price);
}

document.querySelector(".buy").addEventListener("click", function () {
  window.location.href = "checkout.html";
});

function deleteItem(ind) {
  cart_prod.splice(ind, 1);
  console.log(cart_prod);
  localStorage.setItem("cartItems", JSON.stringify(cart_prod));
  window.location = "cart.html";
  displayCartProduct();
}
