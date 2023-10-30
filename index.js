// document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  alert("I got click!");
}

var button = document.querySelectorAll("button");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    var buttonClicked = this.getAttribute("id");
    Checkcharacter(buttonClicked);
    buttonAnimation(buttonClicked);
  });
}

function play(source) {
  var audio = new Audio(source);
  audio.play();
}

document.addEventListener("keypress", function (event) {
  Checkcharacter(event.key);
  buttonAnimation(event.key);
});

function Checkcharacter(key) {
  switch (key) {
    case "w":
      play("sounds/crash.mp3");

      break;
    case "a":
      play("sounds/tom-2.mp3");
      break;
    case "s":
      play("sounds/tom-3.mp3");
      break;
    case "d":
      play("sounds/tom-4.mp3");
      break;
    case "j":
      play("sounds/snare.mp3");
      break;
    case "k":
      play("sounds/tom-1.mp3");
      break;
    case "l":
      play("sounds/kick-bass.mp3");
      break;
    default:
      alert("You clickd with the wrong keyword! ");
      break;
  }
}
button.classList.remove("pressed");
function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// console.log(button.classList.includes("drum"));
