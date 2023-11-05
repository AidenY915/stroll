/*
let clickedBefore;
if (clickedBefore !== undefined) clickedBefore.color = "inherit";
*/

const contextSwitch = function (title, content) {
  $("header h1").text(title);
  $(".container>h1").text(content);
};
