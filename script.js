$("#menu").click(function () {
  $(".navbar").addClass("active");
});

$("#close").click(function () {
  $(".navbar").removeClass("active");
});

function moveTo() {
  window.location.href = "product.html";
}
