let buy_btn = document.querySelector("#buy");
buy_btn.addEventListener("click", function () {
  setTimeout(function () {
    alert("accepted");
  }, 0);
  setTimeout(function () {
    alert("Your order is being cooked");
  }, 6000);
  setTimeout(function () {
    alert("Your order is ready");
  }, 9000);
  setTimeout(function () {
    alert("Order out for delivery ");
  }, 10000);
  setTimeout(function () {
    alert("Order delivered");
  }, 14000);
});
