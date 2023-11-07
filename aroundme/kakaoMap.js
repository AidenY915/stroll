const mapContainer = document.createElement("div");
mapContainer.id = "mapContainer";
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("body").appendChild(mapContainer);
  var container = document.getElementById("mapContainer"); //지도를 담을 영역의 DOM 레퍼런스
  console.log(container);
  var options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.494719665527384, 127.0300768938762), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };
  var map = new kakao.maps.Map(container, options);
});
