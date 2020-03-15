// ========================================================================= //
//  Typed Hero Header
// ========================================================================= //

var typed = $(".typed");
$(() => {
  var strings = $(".typed-items").text();
  strings = $(".typed-items").data("typed-person") + "," + strings;
  strings = strings.split(",");

  typed.typed({
    strings: strings,
    typeSpeed: 100,
    loop: true
  });
});
