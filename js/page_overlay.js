$(function () {
  // Open and close each overlay
  $("#labour_btn").click(function () {
    $("#labour_overlay").css("display", "block");
  });

  $("#labour_btn_close").click(function () {
    $("#labour_overlay").css("display", "none");
  });

  $("#specs_btn").click(function () {
    $("#specs_overlay").css("display", "block");
  });

  $("#specs_btn_close").click(function () {
    $("#specs_overlay").css("display", "none");
  });

  $("#specs_select").on("change", function (e) {
    var selectedVehicle = $(this).find("option:selected").attr("value");

    $(".specs_body_grid").css("display", "none");

    $("#" + selectedVehicle + "_body_grid").css("display", "grid");
  });

  $(".deliveries_btn").click(function () {
    $("#deliveries_overlay").css("display", "block");
  });

  $("#deliveries_btn_close").click(function () {
    $("#deliveries_overlay").css("display", "none");
  });
});
