let $lastClickedCategory;
let $lastClickedOrderBy;

const clickLi = function () {
  if ($(this).parent().hasClass("categoryUl")) {
    if ($lastClickedCategory !== undefined)
      $lastClickedCategory.css("color", "");
    $lastClickedCategory = $(this);
  } else if ($(this).parent().hasClass("orderByUl")) {
    if ($lastClickedOrderBy !== undefined) $lastClickedOrderBy.css("color", "");
    $lastClickedOrderBy = $(this);
  }
  $(this).css("color", "#ff5f55");
};

$(() => {
  $(".categoryUl > li, .orderByUl > li").on("click", clickLi);
  $(".categoryUl > li:first-child, .orderByUl > li:first-child").trigger(
    "click"
  );

  appendSlider(".slider:eq(0)", 0, 30, 1, "km");
  appendSlider(".slider:eq(1)", 0, 5, 0, "점");
  appendSlider(".slider:eq(2)", 0, 30, -2, "개");
});
