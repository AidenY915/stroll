const toDetail = document.createElement("li");
toDetail.innerHTML = "<a href = '../detail/detail.html'>상세설명으로</a>";

document.addEventListener("DOMContentLoaded", () => {
  const resultContentsUl = document.querySelector(".resultContents>ul");
  resultContentsUl.append(toDetail);
});
