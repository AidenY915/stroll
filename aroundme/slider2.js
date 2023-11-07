const makeSlider = ($query) => {
  const $inputLeft = $query.find("#input-left");
  const $inputRight = $query.find("#input-right");

  const $thumbLeft = $query.find(".slider > .thumb.left");
  const $thumbRight = $query.find(".slider > .thumb.right");
  const $range = $query.find(".slider > .range");

  const setLeftValue = () => {
    const $this = $inputLeft;
    const [min, max] = [
      parseInt($this.attr("min")),
      parseInt($this.attr("max")),
    ];

    // 교차되지 않게, 1을 빼준 건 완전히 겹치기보다는 어느 정도 간격을 남겨두기 위해.
    $this.attr(
      "value",
      Math.min(
        parseInt($this.attr("value")),
        parseInt($inputRight.attr("value")) - 1
      )
    );

    // input, thumb 같이 움직이도록
    const percent = (($this.attr("value") - min) / (max - min)) * 100;
    $thumbLeft.css("left", percent + "%");
    $range.css("left", percent + "%");
  };

  const setRightValue = () => {
    const $this = $inputRight;
    const [min, max] = [
      parseInt($this.attr("min")),
      parseInt($this.attr("max")),
    ];

    // 교차되지 않게, 1을 더해준 건 완전히 겹치기보다는 어느 정도 간격을 남겨두기 위해.
    $this.attr(
      "value",
      Math.max(
        parseInt($this.attr("value")),
        parseInt($inputLeft.attr("value")) + 1
      )
    );

    // input, thumb 같이 움직이도록
    const percent = (($this.attr("value") - min) / (max - min)) * 100;
    $thumbRight.css("right", 100 - percent + "%");
    $range.css("right", 100 - percent + "%");
  };

  $inputLeft.on("input", setLeftValue);
  $inputRight.on("input", setRightValue);
};

const sliderHtml = (min, max, digit, unit) =>
  `
  <div class="middle">
    <div class="multi-range-slider">
      <input type="range" id="input-left" min="${min}" max="${max}" value="${min}" />
      <input type="range" id="input-right" min="${min}" max="${max}" value="${max}" />
      <div class="slider">
        <div class="track"></div>
        <div class="range"></div>
        <div class="thumb left"></div>
        <div class="thumb right"></div>
      </div>
    </div>
  </div>
  `;

const appendSlider = (parent, min, max, digit, unit) => {
  $(parent).append($(sliderHtml(min, max, digit, unit)));
  makeSlider($(parent), min, max, digit, unit);
};
