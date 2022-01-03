var cart = JSON.parse(localStorage.getItem("cartItems")) || [];

var total_DOM = document.querySelector(".total_item");

var getCartTotal = JSON.parse(localStorage.getItem("totalCartItemCount"));
totalCartitem();

getfood();

async function getfood() {
  let url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  let res = await fetch(url);

  let data = await res.json();
  let response = await data.categories;

  console.log(response);
  displayfood(response);
}

function displayfood(data) {
  data.map(function (elem) {
    var product_main = document.querySelector(".product_main_info");
    // product_main.textContent = "";
    var single_product = document.createElement("div");
    single_product.classList.add("product");

    var img_wrapper_div = document.createElement("div");
    img_wrapper_div.classList.add("product_image");
    var img_div = document.createElement("img");
    img_div.src = elem.strCategoryThumb;
    img_wrapper_div.append(img_div);

    var product_info = document.createElement("div");
    product_info.classList.add("product_info");
    var product_name = document.createElement("h3");
    product_name.classList.add("product_name");
    product_name.textContent = elem.strCategory;
    var product_price = document.createElement("h3");
    product_price.classList.add("product_price");
    elem.price = Math.round(Math.random() * 500);
    product_price.innerHTML = `Rs ${elem.price}`;

    product_info.append(product_name, product_price);

    var add_cart_btn = document.createElement("div");
    add_cart_btn.classList.add("add_cart_btn");
    var button = document.createElement("button");
    button.textContent = "Add To Cart";
    add_cart_btn.append(button);
    add_cart_btn.addEventListener("click", function () {
      // console.log(pertprod);
      addToCart(elem);
    });

    single_product.append(img_wrapper_div, product_info, add_cart_btn);
    product_main.append(single_product);
  });
}

// /////////// For Total item count Cart ///////////////
function totalCartitem() {
  var total_cart_item = cart.length;
  total_DOM.textContent = total_cart_item;
  localStorage.setItem("totalCartItemCount", JSON.stringify(total_cart_item));
}

var Cart_btn = document.querySelector(".fa-shopping-cart");
Cart_btn.addEventListener("click", function () {
  window.location.href = "cart.html";
});

function addToCart(prod) {
  cart.push(prod);
  localStorage.setItem("cartItems", JSON.stringify(cart));
  totalCartitem();
}
