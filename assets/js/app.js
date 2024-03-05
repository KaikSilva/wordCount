$("#mywords").on("input", function (event) {
  const $input = $(this);
  const words = $input.val().trim();
  const object = words ? words.split(" ") : [];
  const $resultWord = $(".resultWords");
  const $resultCharacter = $(".resultCharacter");

  $resultWord.text(object.length);
  $resultCharacter.text(words.length);
});

$(document).ready(function () {
  $("#ThemeButton").on("click", function () {
    $("html").toggleClass("dark light");

    if ($("html").hasClass("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  const temaSalvo = localStorage.getItem("theme");
  console.log(temaSalvo);
  if (temaSalvo) {
    $("html").addClass(temaSalvo);
  }
});
