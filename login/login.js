const loginFrame = document.createElement("div");
loginFrame.id = "loginFrame";
loginFrame.innerHTML = `
    <img src = "http://placehold.it/150x150" class = 'logoImg'>
    <p>Log in</p>
    <form>
    <input type='text'>
    <input type='password'>
    <button>로그인</button>
    </form>
`;
loginFrame.style.zIndex = "51";

const showLogInFrame = () => {
  curtain.style.display = "block";
  $("body").append($(loginFrame));
  $(loginFrame).find('input[type="text"]').focus();
};

const closeLoginFrame = function (e) {
  if ($(loginFrame).has(e.target).length === 0 && e.target !== loginFrame) {
    $(loginFrame).detach();
    $(loginFrame).find('input[type="text"]').val("");
    $(loginFrame).find('input[type="password"]').val("");
    curtain.style.display = "none";
  }
};

$(document).ready().on("mouseup", closeLoginFrame);
$(loginFrame).find("form").on("submit", closeLoginFrame);
