var nav = document.getElementsByClassName("_floating");
var sea = document.getElementsByClassName("_taste");
var ser = document.getElementsByClassName("_tasteFormControl");

window.onscroll = function sticky() {
  if (window.pageYOffset > nav[0].offsetTop) {
    if (nav[0]) {
      nav[0].classList.add("_floatingDown");
    }
    if (sea[0]) {
      sea[0].classList.add("_tasteDown");
    }
    if (ser[0]) {
      ser[0].classList.add("_tasteFormDown");
    }
  } else {
    if (nav[0]) {
      nav[0].classList.remove("_floatingDown");
    }
    if (sea[0]) {
      sea[0].classList.remove("_tasteDown");
    }
    if (ser[0]) {
      ser[0].classList.remove("_tasteFormDown");
    }
  }
};

/*taste modal*/
var ssTaste = function() {
  var tasteWrap = $(".taste-wrap");
  var tasteField = tasteWrap.find(".taste-field");
  var closeTaste = $("#close-taste");
  var tasteTrigger = $("#_taste");
  var body = $("body");

  tasteTrigger.on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    var $this = $(this);

    body.addClass("taste-visible");
    setTimeout(function() {
      $(".taste-wrap")
        .find(".taste-field")
        .focus();
    }, 100);
  });

  closeTaste.on("click", function() {
    var $this = $(this);

    if (body.hasClass("taste-visible")) {
      body.removeClass("taste-visible");
      setTimeout(function() {
        $(".taste-wrap")
          .find(".taste-field")
          .blur();
      }, 100);
    }
  });

  taste.on("click", function(e) {
    if (!$(e.target).is(".taste-field")) {
      closeTaste.trigger("click");
    }
  });

  tasteField.on("click", function(e) {
    e.stopPropagation();
  });

  tasteField.attr({ placeholder: "Type Your Keywords", autocomplete: "off" });
};

ssTaste();
